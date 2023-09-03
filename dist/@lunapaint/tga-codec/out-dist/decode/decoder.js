"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeTga = void 0;
const assert_js_1 = require("./assert.js");
const byteStreamReader_js_1 = require("./byteStreamReader.js");
const text_js_1 = require("./text.js");
const validate_js_1 = require("./validate.js");
async function decodeTga(data, options = {}) {
    const initialCtx = {
        reader: new byteStreamReader_js_1.ByteStreamReader(data, true),
        hasAlpha: false,
        ambiguousAlpha: false,
        options,
        warnings: []
    };
    const header = parseHeader(initialCtx);
    const ctx = {
        ...initialCtx,
        header
    };
    ctx.identificationField = (0, text_js_1.readText)(ctx, undefined, ctx.header.idLength);
    const colorMapOffset = ctx.reader.offset;
    ctx.footer = parseFooter(ctx);
    ctx.extensionArea = parseExtensionArea(ctx);
    ctx.developerDirectory = parseDeveloperDirectory(ctx);
    ctx.reader.offset = colorMapOffset;
    if (ctx.header.colorMap?.type === 1) {
        ctx.colorMap = parseColorMap(ctx, ctx.header.colorMap);
    }
    ctx.hasAlpha = ((ctx.colorMap && ctx.header.colorMap?.depth === 32) || ((ctx.header.attributeBitsPerPixel > 0 ||
        ctx.header.bitDepth === 32) && (ctx.extensionArea === undefined ||
        ctx.extensionArea.attributesType > 2)));
    ctx.ambiguousAlpha = ctx.hasAlpha && ctx.header.attributeBitsPerPixel === 0;
    ctx.image = parseImageData(ctx, ctx.reader.offset);
    return {
        image: ctx.image,
        details: {
            header: ctx.header,
            imageId: ctx.identificationField,
            footer: ctx.footer,
            extensionArea: ctx.extensionArea,
            developerDirectory: ctx.developerDirectory,
        },
        warnings: ctx.warnings
    };
}
exports.decodeTga = decodeTga;
function parseHeader(ctx) {
    const idLength = ctx.reader.readUint8();
    const colorMapTypeRaw = ctx.reader.readUint8();
    let colorMapType;
    if (colorMapTypeRaw === 0 ||
        colorMapTypeRaw === 1) {
        colorMapType = colorMapTypeRaw;
    }
    else {
        (0, assert_js_1.handleWarning)(ctx, new assert_js_1.DecodeWarning('Color map type unrecognized', ctx.reader.offset - 1));
        colorMapType = 2;
    }
    const imageType = ctx.reader.readUint8();
    if (!(0, validate_js_1.isValidImageType)(imageType)) {
        throw new assert_js_1.DecodeError(ctx, `Invalid image type "${imageType}"`, ctx.reader.offset - 1);
    }
    if (colorMapType === 1 &&
        imageType !== 1 &&
        imageType !== 9) {
        (0, assert_js_1.handleWarning)(ctx, new assert_js_1.DecodeWarning(`Image type "${imageType}" cannot have a color map`, ctx.reader.offset - 2));
    }
    const colorMapOrigin = ctx.reader.readUint16();
    const colorMapLength = ctx.reader.readUint16();
    const colorMapDepth = ctx.reader.readUint8();
    if (colorMapType === 1) {
        if (colorMapOrigin >= colorMapLength) {
            (0, assert_js_1.handleWarning)(ctx, new assert_js_1.DecodeWarning(`Color map origin "${colorMapOrigin}" is greater than color map length "${colorMapLength}"`, ctx.reader.offset - 5));
        }
        if (!(0, validate_js_1.isValidColorMapDepth)(colorMapDepth)) {
            throw new assert_js_1.DecodeError(ctx, `Unsupported color map bit depth "${colorMapDepth}"`, ctx.reader.offset - 1);
        }
    }
    const xOrigin = ctx.reader.readUint16();
    const yOrigin = ctx.reader.readUint16();
    const width = ctx.reader.readUint16();
    const height = ctx.reader.readUint16();
    const bitDepth = ctx.reader.readUint8();
    if (!(0, validate_js_1.isValidBitDepth)(bitDepth, imageType)) {
        throw new assert_js_1.DecodeError(ctx, `Unsupported TGA bit depth "${bitDepth}" with image type ${imageType}`, 0x10);
    }
    const imageDescriptor = ctx.reader.readUint8();
    const attributeBitsPerPixel = (imageDescriptor & 15) >> 0;
    const screenOrigin = ((imageDescriptor & 48) >> 4);
    return {
        idLength,
        colorMap: colorMapType !== 0 ? {
            type: colorMapType,
            depth: colorMapDepth,
            length: colorMapLength,
            origin: colorMapOrigin
        } : undefined,
        imageType,
        origin: {
            x: xOrigin,
            y: yOrigin,
        },
        width,
        height,
        bitDepth,
        imageDescriptor,
        attributeBitsPerPixel,
        screenOrigin
    };
}
function parseColorMap(ctx, colorMap) {
    const colorMapOffset = ctx.reader.offset;
    const bytesPerEntry = Math.ceil(colorMap.depth / 8);
    ctx.reader.offset += colorMap.length * bytesPerEntry;
    let readPixel;
    switch (colorMap.depth) {
        case 15:
            readPixel = readPixel15Bit;
            break;
        case 16:
            if (ctx.hasAlpha) {
                readPixel = readPixel16Bit;
            }
            else {
                readPixel = readPixel15Bit;
            }
            break;
        case 24:
            readPixel = readPixel24Bit;
            break;
        case 32:
            readPixel = readPixel32Bit;
            break;
    }
    return (imageData, imageOffset, view, viewOffset) => {
        const colorIndex = view.getUint8(viewOffset);
        readPixel(imageData, imageOffset, ctx.reader.view, colorMapOffset + colorIndex * bytesPerEntry);
        return 1;
    };
}
function parseImageData(ctx, offset) {
    const image = {
        width: ctx.header.width,
        height: ctx.header.height,
        data: new Uint8Array(ctx.header.width * ctx.header.height * 4)
    };
    let readPixel;
    if (ctx.colorMap) {
        readPixel = ctx.colorMap;
    }
    else {
        switch (ctx.header.bitDepth) {
            case 8:
                readPixel = readPixel8BitGreyscale;
                break;
            case 15:
                readPixel = readPixel15Bit;
                break;
            case 16:
                if (ctx.header.imageType === 11 || ctx.header.imageType === 3) {
                    readPixel = readPixel16BitGreyscale;
                }
                else {
                    if (ctx.hasAlpha) {
                        readPixel = readPixel16Bit;
                    }
                    else {
                        readPixel = readPixel15Bit;
                    }
                }
                break;
            case 24:
                readPixel = readPixel24Bit;
                break;
            case 32:
                if (ctx.hasAlpha) {
                    readPixel = readPixel32Bit;
                }
                else {
                    readPixel = readPixel32BitNoAlpha;
                }
                break;
        }
    }
    let view = ctx.reader.view;
    if (ctx.header.imageType & 8) {
        const decoded = decodeRunLengthEncoding(ctx);
        view = new DataView(decoded.buffer, decoded.byteOffset, decoded.length);
        offset = 0;
    }
    if (ctx.header.screenOrigin === 2) {
        let imageOffset = 0;
        for (let y = 0; y < image.height; y++) {
            for (let x = 0; x < image.width; x++) {
                offset += readPixel(image.data, imageOffset, view, offset);
                imageOffset += 4;
            }
        }
    }
    else {
        let imageOffset = 0;
        for (let y = image.height - 1; y >= 0; y--) {
            imageOffset = ctx.header.width * y * 4;
            for (let x = 0; x < image.width; x++) {
                offset += readPixel(image.data, imageOffset, view, offset);
                imageOffset += 4;
            }
        }
    }
    if (ctx.ambiguousAlpha && !ctx.options.strictMode && ctx.options.detectAmbiguousAlphaChannel) {
        let hasOpacity = false;
        for (let i = 3; i < image.width * image.height * 4; i += 4) {
            if (image.data[i] > 0) {
                hasOpacity = true;
            }
        }
        if (!hasOpacity) {
            (0, assert_js_1.handleWarning)(ctx, new assert_js_1.DecodeWarning('Image has ambiguous alpha and is fully transparent, alpha has been disabled', -1));
            for (let i = 3; i < image.width * image.height * 4; i += 4) {
                image.data[i] = 255;
            }
        }
    }
    return image;
}
function decodeRunLengthEncoding(ctx) {
    const bytesPerPixel = Math.ceil(ctx.header.bitDepth / 8);
    const result = new Uint8Array(ctx.header.width * ctx.header.height * bytesPerPixel);
    let byte = 0;
    let count = 0;
    let i = 0, j = 0, k = 0;
    while (i < result.length - 1) {
        byte = ctx.reader.readUint8();
        count = (byte & 127) + 1;
        if (byte & 128) {
            for (j = 0; j < bytesPerPixel; j++) {
                byte = ctx.reader.readUint8();
                for (k = 0; k < count; k++) {
                    result[i + k * bytesPerPixel + j] = byte;
                }
            }
            i += count * bytesPerPixel;
        }
        else {
            count *= bytesPerPixel;
            for (let k = 0; k < count; k++) {
                result[i++] = ctx.reader.readUint8();
            }
        }
    }
    return result;
}
function readPixel8BitGreyscale(imageData, imageOffset, view, viewOffset) {
    imageData[imageOffset] = view.getUint8(viewOffset);
    imageData[imageOffset + 1] = imageData[imageOffset];
    imageData[imageOffset + 2] = imageData[imageOffset];
    imageData[imageOffset + 3] = 255;
    return 1;
}
function readPixel16BitGreyscale(imageData, imageOffset, view, viewOffset) {
    imageData[imageOffset] = view.getUint8(viewOffset);
    imageData[imageOffset + 1] = imageData[imageOffset];
    imageData[imageOffset + 2] = imageData[imageOffset];
    imageData[imageOffset + 3] = view.getUint8(viewOffset + 1);
    return 2;
}
let currentValue = 0;
function readPixel15Bit(imageData, imageOffset, view, viewOffset) {
    currentValue = view.getUint16(viewOffset, true);
    imageData[imageOffset] = currentValue >> 10 & 0x1f;
    imageData[imageOffset + 1] = currentValue >> 5 & 0x1f;
    imageData[imageOffset + 2] = currentValue & 0x1f;
    imageData[imageOffset] = (imageData[imageOffset] << 3) | (imageData[imageOffset] >> 2);
    imageData[imageOffset + 1] = (imageData[imageOffset + 1] << 3) | (imageData[imageOffset + 1] >> 2);
    imageData[imageOffset + 2] = (imageData[imageOffset + 2] << 3) | (imageData[imageOffset + 2] >> 2);
    imageData[imageOffset + 3] = 255;
    return 2;
}
function readPixel16Bit(imageData, imageOffset, view, viewOffset) {
    currentValue = view.getUint16(viewOffset, true);
    imageData[imageOffset] = currentValue >> 10 & 0x1f;
    imageData[imageOffset + 1] = currentValue >> 5 & 0x1f;
    imageData[imageOffset + 2] = currentValue & 0x1f;
    imageData[imageOffset] = (imageData[imageOffset] << 3) | (imageData[imageOffset] >> 2);
    imageData[imageOffset + 1] = (imageData[imageOffset + 1] << 3) | (imageData[imageOffset + 1] >> 2);
    imageData[imageOffset + 2] = (imageData[imageOffset + 2] << 3) | (imageData[imageOffset + 2] >> 2);
    imageData[imageOffset + 3] = (currentValue & 0x8000) ? 0 : 255;
    return 2;
}
function readPixel24Bit(imageData, imageOffset, view, viewOffset) {
    imageData[imageOffset] = view.getUint8(viewOffset + 2);
    imageData[imageOffset + 1] = view.getUint8(viewOffset + 1);
    imageData[imageOffset + 2] = view.getUint8(viewOffset);
    imageData[imageOffset + 3] = 255;
    return 3;
}
function readPixel32Bit(imageData, imageOffset, view, viewOffset) {
    imageData[imageOffset] = view.getUint8(viewOffset + 2);
    imageData[imageOffset + 1] = view.getUint8(viewOffset + 1);
    imageData[imageOffset + 2] = view.getUint8(viewOffset);
    imageData[imageOffset + 3] = view.getUint8(viewOffset + 3);
    return 4;
}
function readPixel32BitNoAlpha(imageData, imageOffset, view, viewOffset) {
    imageData[imageOffset] = view.getUint8(viewOffset + 2);
    imageData[imageOffset + 1] = view.getUint8(viewOffset + 1);
    imageData[imageOffset + 2] = view.getUint8(viewOffset);
    imageData[imageOffset + 3] = 255;
    return 4;
}
function parseExtensionArea(ctx) {
    if (ctx.footer?.extensionAreaOffset === undefined || ctx.footer.extensionAreaOffset === 0) {
        return undefined;
    }
    ctx.reader.offset = ctx.footer.extensionAreaOffset;
    const extensionSize = ctx.reader.readUint16();
    if (extensionSize !== 495) {
        (0, assert_js_1.handleWarning)(ctx, new assert_js_1.DecodeWarning('TGA file is a version other than v2', ctx.reader.offset - 2));
    }
    const authorName = (0, text_js_1.readText)(ctx, undefined, 41).trim() || undefined;
    const authorComments = (0, text_js_1.readText)(ctx, undefined, 324).trim() || undefined;
    const dateTimestamp = readDateTimestamp(ctx);
    const jobName = (0, text_js_1.readText)(ctx, undefined, 41).trim() || undefined;
    const jobTime = readTimestamp(ctx);
    const softwareId = (0, text_js_1.readText)(ctx, undefined, 41).trim() || undefined;
    const softwareVersionNumber = ctx.reader.readUint8() / 100;
    const softwareVersionLetter = (0, text_js_1.readText)(ctx, undefined, 2);
    let softwareVersion;
    if (softwareVersionNumber === 0 && (softwareVersionLetter === ' ' || softwareVersionLetter.length === 0)) {
        softwareVersion = undefined;
    }
    else {
        softwareVersion = `${softwareVersionNumber}${softwareVersionLetter}`;
    }
    const keyColorA = ctx.reader.readUint8();
    const keyColorR = ctx.reader.readUint8();
    const keyColorG = ctx.reader.readUint8();
    const keyColorB = ctx.reader.readUint8();
    let keyColor;
    if (keyColorA === 0 && keyColorR === 0 && keyColorG === 0 && keyColorB === 0) {
        keyColor = undefined;
    }
    else {
        keyColor = new Uint8Array([keyColorR, keyColorG, keyColorB, keyColorA]);
    }
    const aspectRatioNumerator = ctx.reader.readUint16();
    const aspectRatioDenominator = ctx.reader.readUint16();
    let aspectRatio;
    if (aspectRatioDenominator === 0) {
        aspectRatio = undefined;
    }
    else {
        aspectRatio = aspectRatioNumerator / aspectRatioDenominator;
    }
    const gammaNumerator = ctx.reader.readUint16();
    const gammaDenominator = ctx.reader.readUint16();
    let gamma;
    if (gammaDenominator === 0) {
        gamma = undefined;
    }
    else {
        gamma = gammaNumerator / gammaDenominator;
    }
    const colorCorrectionOffset = ctx.reader.readUint32();
    const postageStampOffset = ctx.reader.readUint32();
    const scanLineOffset = ctx.reader.readUint32();
    const attributesType = ctx.reader.readUint8();
    return {
        extensionSize,
        authorName,
        authorComments,
        dateTimestamp,
        jobName,
        jobTime,
        softwareId,
        softwareVersion,
        keyColor,
        aspectRatio,
        gamma,
        colorCorrectionOffset,
        postageStampOffset,
        scanLineOffset,
        attributesType,
    };
}
function parseDeveloperDirectory(ctx) {
    if (ctx.footer?.developerDirectoryOffset === undefined || ctx.footer.developerDirectoryOffset === 0) {
        return [];
    }
    ctx.reader.offset = ctx.footer.developerDirectoryOffset;
    const tagCount = ctx.reader.readUint16();
    const directory = [];
    for (let i = 0; i < tagCount; i++) {
        const tag = ctx.reader.readUint16();
        const offset = ctx.reader.readUint32();
        const length = ctx.reader.readUint32();
        directory.push({ tag, offset, length });
    }
    return directory;
}
function readDateTimestamp(ctx) {
    const month = ctx.reader.readUint16();
    const day = ctx.reader.readUint16();
    const year = ctx.reader.readUint16();
    const hour = ctx.reader.readUint16();
    const minute = ctx.reader.readUint16();
    const second = ctx.reader.readUint16();
    if (month === 0 && day === 0 && year === 0 && hour === 0 && minute === 0 && second === 0) {
        return undefined;
    }
    return new Date(year, month, day, hour, minute, second);
}
function readTimestamp(ctx) {
    const hours = ctx.reader.readUint16();
    const minutes = ctx.reader.readUint16();
    const seconds = ctx.reader.readUint16();
    if (hours === 0 && minutes === 0 && seconds === 0) {
        return undefined;
    }
    return { hours, minutes, seconds };
}
function parseFooter(ctx) {
    ctx.reader.offset = ctx.reader.view.byteLength - 26 + 8;
    const signature = (0, text_js_1.readText)(ctx, undefined, 17);
    if (signature !== 'TRUEVISION-XFILE.' || ctx.reader.readUint8() !== 0) {
        return {
            extensionAreaOffset: 0,
            developerDirectoryOffset: 0
        };
    }
    ctx.reader.offset = ctx.reader.view.byteLength - 26;
    let extensionAreaOffset = ctx.reader.readUint32();
    if (extensionAreaOffset >= ctx.reader.view.byteLength) {
        (0, assert_js_1.handleWarning)(ctx, new assert_js_1.DecodeWarning(`Extension area offset "${extensionAreaOffset}" is invalid`, ctx.reader.offset - 4));
        extensionAreaOffset = 0;
    }
    let developerDirectoryOffset = ctx.reader.readUint32();
    if (developerDirectoryOffset >= ctx.reader.view.byteLength) {
        (0, assert_js_1.handleWarning)(ctx, new assert_js_1.DecodeWarning(`Developer directory offset "${developerDirectoryOffset}" is invalid`, ctx.reader.offset - 4));
        developerDirectoryOffset = 0;
    }
    return {
        extensionAreaOffset,
        developerDirectoryOffset
    };
}

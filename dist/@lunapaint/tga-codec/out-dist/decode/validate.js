"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidBitDepth = exports.isValidColorMapDepth = exports.isValidImageType = void 0;
function isValidImageType(imageType) {
    return (imageType === 1 ||
        imageType === 2 ||
        imageType === 3 ||
        imageType === 9 ||
        imageType === 10 ||
        imageType === 11);
}
exports.isValidImageType = isValidImageType;
function isValidColorMapDepth(colorMapDepth) {
    return (colorMapDepth === 15 ||
        colorMapDepth === 16 ||
        colorMapDepth === 24 ||
        colorMapDepth === 32);
}
exports.isValidColorMapDepth = isValidColorMapDepth;
function isValidBitDepth(bitDepth, imageType) {
    if (imageType === 1 ||
        imageType === 9) {
        return bitDepth === 8;
    }
    if (imageType === 3 ||
        imageType === 11) {
        return bitDepth === 8 || bitDepth === 16;
    }
    return (bitDepth === 15 ||
        bitDepth === 16 ||
        bitDepth === 24 ||
        bitDepth === 32);
}
exports.isValidBitDepth = isValidBitDepth;

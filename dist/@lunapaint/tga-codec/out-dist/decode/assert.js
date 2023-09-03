"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleWarning = exports.DecodeWarning = exports.DecodeError = void 0;
class DecodeError extends Error {
    constructor(ctx, message, offset) {
        super(message);
        this.offset = offset;
        this.partiallyDecodedImage = {
            details: {
                header: ctx.header,
                footer: ctx.footer,
                imageId: ctx.identificationField,
                developerDirectory: ctx.developerDirectory,
                extensionArea: ctx.extensionArea,
            },
            warnings: ctx.warnings
        };
    }
}
exports.DecodeError = DecodeError;
class DecodeWarning extends Error {
    constructor(message, offset) {
        super(message);
        this.offset = offset;
    }
}
exports.DecodeWarning = DecodeWarning;
function handleWarning(ctx, warning) {
    if (ctx.options.strictMode) {
        throw warning;
    }
    ctx.warnings.push(warning);
}
exports.handleWarning = handleWarning;

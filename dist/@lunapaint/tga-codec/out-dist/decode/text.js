"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readText = void 0;
const assert_js_1 = require("./assert.js");
function readText(ctx, textDecoder, maxLength, isCompressed) {
    const bytes = [];
    let current = 0;
    let i = 0;
    const startOffset = ctx.reader.offset;
    for (; i < maxLength; i++) {
        try {
            current = ctx.reader.view.getUint8(ctx.reader.offset);
        }
        catch (e) {
            if (e instanceof Error && e.message === 'Offset is outside the bounds of the DataView') {
                (0, assert_js_1.handleWarning)(ctx, new assert_js_1.DecodeWarning('EOF while reading text', ctx.reader.offset));
            }
            throw e;
        }
        if (!isCompressed && current === 0) {
            break;
        }
        ctx.reader.offset++;
        bytes.push(current);
    }
    ctx.reader.offset = startOffset + maxLength;
    if (textDecoder) {
        return textDecoder.decode(new Uint8Array(bytes));
    }
    return String.fromCharCode(...bytes);
}
exports.readText = readText;

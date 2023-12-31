"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = exports.decode = void 0;
const PngDecoder_1 = __importDefault(require("./PngDecoder"));
const PngEncoder_1 = __importDefault(require("./PngEncoder"));
__exportStar(require("./types"), exports);
function decodePng(data, options) {
    const decoder = new PngDecoder_1.default(data, options);
    return decoder.decode();
}
exports.decode = decodePng;
function encodePng(png, options) {
    const encoder = new PngEncoder_1.default(png, options);
    return encoder.encode();
}
exports.encode = encodePng;
//# sourceMappingURL=index.js.map
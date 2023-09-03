"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeTga = exports.DecodeWarning = exports.DecodeError = void 0;
var assert_js_1 = require("../decode/assert.js");
Object.defineProperty(exports, "DecodeError", { enumerable: true, get: function () { return assert_js_1.DecodeError; } });
Object.defineProperty(exports, "DecodeWarning", { enumerable: true, get: function () { return assert_js_1.DecodeWarning; } });
async function decodeTga(data, options) {
    return (await Promise.resolve().then(() => require('../decode/decoder.js'))).decodeTga(data, options);
}
exports.decodeTga = decodeTga;

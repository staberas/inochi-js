"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByteStreamReader = void 0;
class ByteStreamReader {
    constructor(data, _le) {
        this.data = data;
        this._le = _le;
        this.offset = 0;
        this.view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    }
    readUint8() {
        return this.view.getUint8(this.offset++);
    }
    readUint16() {
        const value = this.view.getUint16(this.offset, this._le);
        this.offset += 2;
        return value;
    }
    readUint32() {
        const value = this.view.getUint32(this.offset, this._le);
        this.offset += 4;
        return value;
    }
}
exports.ByteStreamReader = ByteStreamReader;

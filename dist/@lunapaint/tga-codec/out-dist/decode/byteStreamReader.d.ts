import { IByteStreamReader } from '../shared/types.js';
export declare class ByteStreamReader implements IByteStreamReader {
    readonly data: Readonly<Uint8Array>;
    private readonly _le;
    offset: number;
    readonly view: DataView;
    constructor(data: Readonly<Uint8Array>, _le: boolean);
    readUint8(): number;
    readUint16(): number;
    readUint32(): number;
}

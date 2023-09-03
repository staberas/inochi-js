import { IDecodedTga, IDecodeTgaOptions } from '../shared/types.js';
export declare function decodeTga(data: Readonly<Uint8Array>, options?: IDecodeTgaOptions): Promise<IDecodedTga>;

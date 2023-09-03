import { IDecodedTga, ITgaDecodeContext, ITgaDetails, ITgaInitialDecodeContext } from '../shared/types.js';
export declare class DecodeError extends Error {
    readonly offset: number;
    readonly partiallyDecodedImage: Partial<Omit<IDecodedTga, 'details'> & {
        details: Partial<ITgaDetails>;
    }>;
    constructor(ctx: ITgaInitialDecodeContext | ITgaDecodeContext, message: string, offset: number);
}
export declare class DecodeWarning extends Error {
    readonly offset: number;
    constructor(message: string, offset: number);
}
export declare function handleWarning(ctx: ITgaInitialDecodeContext, warning: DecodeWarning): void;

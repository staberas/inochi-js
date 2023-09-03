export { BitDepth, ColorMapType, IDecodedTga, IDecodeTgaOptions, IImage32, ImageType, ITgaDetails, ITgaFooter, ITgaHeader, ScreenOrigin, } from '../../typings/api.js';
import { DecodeWarning, IDecodeTgaOptions, IDeveloperDirectoryEntry, IExtensionArea, IImage32, ITgaFooter, ITgaHeader } from '../../typings/api.js';
export interface ITgaBaseDecodeContext {
    image?: IImage32;
    hasAlpha: boolean;
    ambiguousAlpha: boolean;
    reader: IByteStreamReader;
    warnings: DecodeWarning[];
    options: IDecodeTgaOptions;
    header?: ITgaHeader;
    identificationField?: string;
    footer?: ITgaFooter;
    colorMap?: IReadPixelDelegate;
    extensionArea?: IExtensionArea;
    developerDirectory?: IDeveloperDirectoryEntry[];
}
export declare type IReadPixelDelegate = (imageData: Uint8Array, imageOffset: number, view: DataView, viewOffset: number) => number;
export interface ITgaInitialDecodeContext extends ITgaBaseDecodeContext {
    header?: ITgaHeader;
}
export interface ITgaDecodeContext extends ITgaBaseDecodeContext {
    header: ITgaHeader;
}
export interface IByteStreamReader {
    offset: number;
    readonly data: Readonly<Uint8Array>;
    readonly view: DataView;
    readUint8(): number;
    readUint16(): number;
    readUint32(): number;
}
export declare type ColorMapDepth = 15 | 16 | 24 | 32;

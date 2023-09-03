import { BitDepth, ColorMapDepth, ImageType } from '../shared/types.js';
export declare function isValidImageType(imageType: ImageType): imageType is ImageType;
export declare function isValidColorMapDepth(colorMapDepth: number): colorMapDepth is ColorMapDepth;
export declare function isValidBitDepth(bitDepth: number, imageType: ImageType): bitDepth is BitDepth;

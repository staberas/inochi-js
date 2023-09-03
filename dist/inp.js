/*
    Copyright © 2020, Inochi2D Project
    Distributed under the 2-Clause BSD License, see LICENSE file.
    
    Authors: Luna Nielsen
*/
import { deserializePuppet } from "./puppet.js";
import * as THREE from '../inochi2d.es.js';
import { Parser } from "binary-parser.js";
import { decode } from "fast-png.js";
import { decodeTga } from "@lunapaint/tga-codec.js";
export async function downloadFile(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    return uint8Array;
}
export async function inImport(filebuffer) {
    const textureparser = new Parser()
        .uint32("payloadLength")
        .uint8("type")
        .array("data", { type: "uint8", length: "payloadLength" });
    // Create parser
    const inpparser = new Parser()
        .string("magic", { length: 8, assert: "TRNSRTS\0" })
        .uint32("payloadLength")
        .string("payload", { length: "payloadLength" })
        .string("magic", { length: 8, assert: "TEX_SECT" })
        .uint32("textureCount")
        .array("textures", { type: textureparser, length: "textureCount" });
    // Parse INP file
    let parsed = inpparser.parse(filebuffer);
    let textureLoads = new Array(0);
    parsed.textures.forEach((texture) => {
        let t = texture.type;
        let data = new Uint8Array(texture.data);
        switch (t) {
            case 0:
                textureLoads.push(new Promise((complete, _) => {
                    // Load PNG file from memory stream
                    let png = decode(data);
                    let texture = new THREE.DataTexture(png.data, png.width, png.height);
                    texture.generateMipmaps = true;
                    texture.needsUpdate = true;
                    complete(texture);
                }));
                break;
            case 1:
                // Load TGA file from memory stream
                textureLoads.push(new Promise(async (complete, failure) => {
                    decodeTga(data, { detectAmbiguousAlphaChannel: true }).then(tga => {
                        let texture = new THREE.DataTexture(tga.image.data, tga.image.width, tga.image.height);
                        texture.generateMipmaps = true;
                        texture.needsUpdate = true;
                        complete(texture);
                    }).catch((reason) => {
                        failure(reason);
                    });
                }));
                break;
            default:
                throw "Could not decode texture data";
        }
    });
    return (async () => {
        // Wait for textures and parse puppet
        let textures = await Promise.all(textureLoads);
        let puppet = deserializePuppet(JSON.parse(parsed.payload), textures);
        // console.log(parsed.payload)
        // Apply textures
        puppet.textures = Array.from(textures);
        // Return puppet
        return puppet;
    })();
}
export async function inImportFromURL(url) {
    return await inImport(await (downloadFile(url)));
}

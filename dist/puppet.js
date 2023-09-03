/*
    Copyright © 2020, Inochi2D Project
    Distributed under the 2-Clause BSD License, see LICENSE file.
    
    Authors: Luna Nielsen
*/
import { Node } from './nodes/node.js';
import { deserializeNode as deserializeNode } from "./nodes/serialiser.js";
export const NO_THUMBNAIL = 4294967295;
export var PuppetAllowedUsers;
(function (PuppetAllowedUsers) {
    PuppetAllowedUsers["OnlyAuthor"] = "onlyAuthor";
    PuppetAllowedUsers["OnlyLicensee"] = "onlyLicensee";
    PuppetAllowedUsers["Everyone"] = "everyone";
})(PuppetAllowedUsers || (PuppetAllowedUsers = {}));
export var PuppetAllowedRedistribution;
(function (PuppetAllowedRedistribution) {
    PuppetAllowedRedistribution["Prohibited"] = "prohibited";
    PuppetAllowedRedistribution["ViralLicense"] = "viralLicense";
    PuppetAllowedRedistribution["CopyleftLicense"] = "copyleftLicense";
})(PuppetAllowedRedistribution || (PuppetAllowedRedistribution = {}));
export var PuppetAllowedModification;
(function (PuppetAllowedModification) {
    PuppetAllowedModification["Prohibited"] = "prohibited";
    PuppetAllowedModification["AllowPersonal"] = "allowPersonal";
    PuppetAllowedModification["AllowRedistribute"] = "allowRedistribute";
})(PuppetAllowedModification || (PuppetAllowedModification = {}));
export class PuppetUsageRights {
    allowedUsers = PuppetAllowedUsers.OnlyAuthor;
    allowViolence = false;
    allowSexual = false;
    allowCommercial = false;
    allowRedistribution = PuppetAllowedRedistribution.Prohibited;
    allowModification = PuppetAllowedModification.Prohibited;
    requireAttribution = false;
}
export class PuppetMeta {
    name = "";
    version = "1.0-alpha";
    rigger = "";
    artist = "";
    rights = new PuppetUsageRights();
    copyright = "";
    licenseURL = "";
    contact = "";
    reference = "";
    thumbnailId = NO_THUMBNAIL;
    preservePixels = false;
}
export class Puppet {
    meta = new PuppetMeta();
    textures = [];
    rootNode = new Node();
    // Non-serialisable
    nodes = [];
}
export function deserializePuppet(json, textures) {
    const puppet = new Puppet();
    puppet.meta = json.meta;
    puppet.textures = textures;
    puppet.rootNode = deserializeNode(puppet, json.nodes);
    puppet.rootNode.transform.scale.y *= -1; // Weird rotation moment!
    puppet.rootNode.update();
    return puppet;
}

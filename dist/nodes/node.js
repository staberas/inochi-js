/*
    Copyright © 2020, Inochi2D Project
    Distributed under the 2-Clause BSD License, see LICENSE file.
    
    Authors: Luna Nielsen
*/
import { Transform } from "../math/transform.js";
import * as THREE from "../inochi2d.es.js";
/**
 * Blending mode.
 */
export var BlendMode;
(function (BlendMode) {
    /**
     * Normal blending mode.
     */
    BlendMode[BlendMode["Normal"] = 0] = "Normal";
    /**
     * Multiply blending mode.
     */
    BlendMode[BlendMode["Multiply"] = 1] = "Multiply";
    /**
     * Color Dodge.
     */
    BlendMode[BlendMode["ColorDodge"] = 2] = "ColorDodge";
    /**
     * Linear Dodge.
     */
    BlendMode[BlendMode["LinearDodge"] = 3] = "LinearDodge";
    /**
     * Screen.
     */
    BlendMode[BlendMode["Screen"] = 4] = "Screen";
    /**
     * Clip to Lower.
     * Special blending mode that clips the drawable to a lower rendered area.
     */
    BlendMode[BlendMode["ClipToLower"] = 5] = "ClipToLower";
    /**
     * Slice from Lower.
     * Special blending mode that slices the drawable via a lower rendered area.
     * (Basically inverse ClipToLower.)
     */
    BlendMode[BlendMode["SliceFromLower"] = 6] = "SliceFromLower";
})(BlendMode || (BlendMode = {}));
/**
 * Represents the masking mode.
 */
export var MaskingMode;
(function (MaskingMode) {
    MaskingMode[MaskingMode["Mask"] = 0] = "Mask";
    MaskingMode[MaskingMode["Dodge"] = 1] = "Dodge";
})(MaskingMode || (MaskingMode = {}));
/**
 * Represents the joint binding data.
 */
export class JointBindingData {
    bound_to = -1;
    bind_data = [];
}
/**
 * Base type for all nodes.
 */
export class Node {
    // Serialised models
    type = "";
    uuid = -1;
    name;
    enabled = true;
    zsort = 0;
    transform = new Transform();
    children = [];
    // Non-serialisables
    puppet = null; // Puppet
    threeObj = new THREE.Object3D(); // three.JS Node for rendering.
    parent = null; // Track the parent for easy traversal.
    lockToRoot = false; // Whether to lock to root
    actualTransform = new Transform(); // Track absolute transform  
    actualZsort = 0; // Track absolute z-index
    /**
     * Calculates the transform of this node.
     */
    updateTransform() {
        // Update transform
        this.transform.update();
        // Update the absolute transform
        if (this.parent == null) {
            // No parent, use current transform
            this.actualTransform = this.transform;
            this.actualZsort = this.zsort;
        }
        else {
            // Otherwise, translate, rotate & scale current transform to the parent's
            const newTransform = new Transform();
            newTransform.rot = this.parent.actualTransform.rot.clone().add(this.transform.rot);
            newTransform.trans = this.parent.actualTransform.trans.clone().add(this.transform.trans);
            newTransform.scale = new THREE.Vector2(this.parent.actualTransform.scale.x * this.transform.scale.x, this.parent.actualTransform.scale.y * this.transform.scale.y);
            // Set the transform
            this.actualTransform = newTransform;
            this.actualZsort = this.parent.actualZsort + this.zsort;
        }
        // Update the three object transform
        this.threeObj.position.set(this.transform.trans.x, this.transform.trans.y, this.transform.trans.z);
        this.threeObj.scale.set(this.transform.scale.x, this.transform.scale.y, 1);
        this.threeObj.rotation.x = this.transform.rot.x;
        this.threeObj.rotation.y = this.transform.rot.y;
        this.threeObj.rotation.z = this.transform.rot.z;
        this.threeObj.renderOrder = -this.actualZsort;
    }
    /**
     * Called on render, populates a THREE.Object3D.
     */
    onCreateMesh() { }
    /**
     * Called on render, populates a THREE.Object3D materials.
     */
    onCreateMaterials() { }
    /**
     * Called on update.
     */
    update() {
        this.updateTransform();
    }
    /**
     * Called on render.
     */
    create() {
        this.onCreateMesh();
        this.onCreateMaterials();
    }
}
/**
 * Represents a path deform node.
 */
export class PathDeform extends Node {
    joints = [];
    bindings = [];
}

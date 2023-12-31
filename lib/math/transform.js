/*
    Copyright © 2020, Inochi2D Project
    Distributed under the 2-Clause BSD License, see LICENSE file.
    
    Authors: Luna Nielsen
*/
import { Euler, Matrix4, Vector2, Vector3 } from 'three';
/**
 * Represents a transformation in 2D space.
 */
export class Transform {
    trs = new Matrix4().identity();
    rot = new Vector3(0, 0, 0);
    scale = new Vector2(1, 1);
    trans = new Vector3(0, 0, 0);
    /**
     * Multiplies this transform with another transform and returns the result.
     * @param other - The transform to multiply with.
     * @returns A new Transform object representing the result of the multiplication.
     */
    multiply(other) {
        let tnew = new Transform();
        let strs = other.trs.multiply(this.trs);
        // Extract TRS using matrix operations.
        tnew.trans.setFromMatrixPosition(strs); // Extract translation
        tnew.rot.applyMatrix4(new Matrix4().extractRotation(strs)); // Extract rotation
        let scale = new Vector3().setFromMatrixScale(strs); // Extract scale
        tnew.scale.x = scale.x;
        tnew.scale.y = scale.y;
        tnew.trs = strs;
        return tnew;
    }
    /**
     * Updates the internal transformation matrix based on the current rotation, scale, and translation values.
     */
    update() {
        const mat4 = new Matrix4().identity();
        let translate = mat4.makeTranslation(this.trans.x, this.trans.y, this.trans.z); // Create translation matrix
        let rotation = mat4.makeRotationFromEuler(new Euler(this.rot.x, this.rot.y, this.rot.z, Euler.DefaultOrder)); // Create rotation matrix
        let scale = mat4.makeScale(this.scale.x, this.scale.y, 1); // Create scale matrix
        this.trs = scale.multiply(rotation).multiply(translate); // Combine matrices to form TRS
    }
    /**
     * Returns the transformation matrix representing this transform.
     * @returns The transformation matrix as a Matrix4 object.
     */
    matrix() {
        return this.trs;
    }
}
/**
 * Serializes the Transform object into a JSON string.
 * @param transform - The Transform object to serialize.
 * @returns The JSON string representing the serialized Transform object.
 */
export function serializeTransform(transform) {
    const data = {
        rot: transform.rot.toArray(),
        scale: transform.scale.toArray(),
        trans: transform.trans.toArray() // Convert trans to an array
    };
    return JSON.stringify(data);
}
/**
 * Deserializes a JSON string into a Transform object.
 * @param json - The JSON string to deserialize.
 * @returns A new Transform object representing the deserialized data.
 */
export function deserializeTransform(data) {
    const transform = new Transform();
    transform.rot.fromArray(data.rot); // Set rot from the array
    transform.scale.fromArray(data.scale); // Set scale from the array
    transform.trans.fromArray(data.trans); // Set trans from the array
    return transform;
}

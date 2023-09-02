/*
    Inochi2D Parameter

    Translated from work in Inox2D by Speykious
    
    Copyright © 2022, Inochi2D Project
    Distributed under the 2-Clause BSD License, see LICENSE file.
    
    Authors: Speykious
 */
import { Matrix4, Vector2 } from 'three';
var InterpolateMode;
(function (InterpolateMode) {
    InterpolateMode["Linear"] = "linear";
    InterpolateMode["Smoothstep"] = "smoothstep";
    InterpolateMode["Smootherstep"] = "smootherstep";
})(InterpolateMode || (InterpolateMode = {}));
export class Binding {
    node = 0;
    is_set = [];
    interpolate_mode = InterpolateMode.Linear;
    values = new BindingValues();
}
export class BindingValues {
    ZSort = [];
    TransformTX = [];
    TransformTY = [];
    TransformSX = [];
    TransformSY = [];
    TransformRX = [];
    TransformRY = [];
    TransformRZ = [];
    Deform = [];
}
export class AxisPoints {
    x = [];
    y = [];
}
export class PartOffsets {
    vert_offset = 0;
    vert_len = 0;
    trans_offset = new Matrix4();
}
/**
 * Represents a parameter that can animate nodes and affect meshes.
 */
export class Param {
    /**
     * The unique identifier of the parameter.
     */
    uuid = -1;
    /**
     * The name of the parameter.
     */
    name = "";
    /**
     * Indicates whether the parameter is a 2D vector or not.
     */
    is_vec2 = false;
    /**
     * The minimum value allowed for the parameter.
     */
    min = new Vector2();
    /**
     * The maximum value allowed for the parameter.
     */
    max = new Vector2();
    /**
     * The default values for the parameter.
     */
    defaults = new Vector2();
    /**
     * The axis points used for interpolation.
     */
    axis_points = new AxisPoints();
    /**
     * The bindings associated with the parameter.
     */
    bindings = [];
    /**
     * Applies the parameter's value to the associated nodes and meshes.
     * @param val - The value of the parameter.
     * @param node_offsets - The offsets of the nodes.
     * @param deform_buf - The deform buffer for mesh deformation.
     */
    apply(val, node_offsets, deform_buf) {
        throw new Error("Not implemented.");
    }
    getAxisPointIndexes(value, axisPoints) {
        const index = axisPoints.findIndex((point) => point >= value);
        if (index === -1)
            return [axisPoints.length - 2, axisPoints.length - 1];
        if (index === 0)
            return [index, index + 1];
        return [index - 1, index];
    }
    applyTransformOffset(binding, transform, property, axis, rangeIn, valNormed) {
        throw new Error("Not implemented.");
    }
    applyDeformOffset(binding, deform, rangeIn, valNormed) {
        throw new Error("Not implemented.");
    }
}

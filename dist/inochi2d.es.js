var ca = Object.defineProperty;
var pa = (i, t, e) => t in i ? ca(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var T = (i, t, e) => (pa(i, typeof t != "symbol" ? t + "" : t, e), e);
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const lr = "146";
const zt = "srgb", Jt = "srgb-linear";
class Pi {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const s = this._listeners;
    s[t] === void 0 && (s[t] = []), s[t].indexOf(e) === -1 && s[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0)
      return !1;
    const s = this._listeners;
    return s[t] !== void 0 && s[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[t];
    if (n !== void 0) {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0)
      return;
    const s = this._listeners[t.type];
    if (s !== void 0) {
      t.target = this;
      const n = s.slice(0);
      for (let r = 0, o = n.length; r < o; r++)
        n[r].call(this, t);
      t.target = null;
    }
  }
}
const W = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
function Je() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, s = Math.random() * 4294967295 | 0;
  return (W[i & 255] + W[i >> 8 & 255] + W[i >> 16 & 255] + W[i >> 24 & 255] + "-" + W[t & 255] + W[t >> 8 & 255] + "-" + W[t >> 16 & 15 | 64] + W[t >> 24 & 255] + "-" + W[e & 63 | 128] + W[e >> 8 & 255] + "-" + W[e >> 16 & 255] + W[e >> 24 & 255] + W[s & 255] + W[s >> 8 & 255] + W[s >> 16 & 255] + W[s >> 24 & 255]).toLowerCase();
}
function tt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function ma(i, t) {
  return (i % t + t) % t;
}
function ji(i, t, e) {
  return (1 - e) * i + e * t;
}
function ai(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function j(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class $ {
  constructor(t = 0, e = 0) {
    $.prototype.isVector2 = !0, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, s = this.y, n = t.elements;
    return this.x = n[0] * e + n[3] * s + n[6], this.y = n[1] * e + n[4] * s + n[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
  }
  clampLength(t, e) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(Math.max(t, Math.min(e, s)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, s = this.y - t.y;
    return e * e + s * s;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, s) {
    return this.x = t.x + (e.x - t.x) * s, this.y = t.y + (e.y - t.y) * s, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const s = Math.cos(e), n = Math.sin(e), r = this.x - t.x, o = this.y - t.y;
    return this.x = r * s - o * n + t.x, this.y = r * n + o * s + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ke {
  constructor() {
    Ke.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(t, e, s, n, r, o, a, d, h) {
    const l = this.elements;
    return l[0] = t, l[1] = n, l[2] = a, l[3] = e, l[4] = r, l[5] = d, l[6] = s, l[7] = o, l[8] = h, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(t) {
    const e = this.elements, s = t.elements;
    return e[0] = s[0], e[1] = s[1], e[2] = s[2], e[3] = s[3], e[4] = s[4], e[5] = s[5], e[6] = s[6], e[7] = s[7], e[8] = s[8], this;
  }
  extractBasis(t, e, s) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), s.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[4],
      e[8],
      e[1],
      e[5],
      e[9],
      e[2],
      e[6],
      e[10]
    ), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const s = t.elements, n = e.elements, r = this.elements, o = s[0], a = s[3], d = s[6], h = s[1], l = s[4], f = s[7], u = s[2], c = s[5], m = s[8], b = n[0], x = n[3], y = n[6], E = n[1], C = n[4], M = n[7], S = n[2], p = n[5], g = n[8];
    return r[0] = o * b + a * E + d * S, r[3] = o * x + a * C + d * p, r[6] = o * y + a * M + d * g, r[1] = h * b + l * E + f * S, r[4] = h * x + l * C + f * p, r[7] = h * y + l * M + f * g, r[2] = u * b + c * E + m * S, r[5] = u * x + c * C + m * p, r[8] = u * y + c * M + m * g, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], s = t[1], n = t[2], r = t[3], o = t[4], a = t[5], d = t[6], h = t[7], l = t[8];
    return e * o * l - e * a * h - s * r * l + s * a * d + n * r * h - n * o * d;
  }
  invert() {
    const t = this.elements, e = t[0], s = t[1], n = t[2], r = t[3], o = t[4], a = t[5], d = t[6], h = t[7], l = t[8], f = l * o - a * h, u = a * d - l * r, c = h * r - o * d, m = e * f + s * u + n * c;
    if (m === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / m;
    return t[0] = f * b, t[1] = (n * h - l * s) * b, t[2] = (a * s - n * o) * b, t[3] = u * b, t[4] = (l * e - n * d) * b, t[5] = (n * r - a * e) * b, t[6] = c * b, t[7] = (s * d - h * e) * b, t[8] = (o * e - s * r) * b, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, s, n, r, o, a) {
    const d = Math.cos(r), h = Math.sin(r);
    return this.set(
      s * d,
      s * h,
      -s * (d * o + h * a) + o + t,
      -n * h,
      n * d,
      -n * (-h * o + d * a) + a + e,
      0,
      0,
      1
    ), this;
  }
  scale(t, e) {
    const s = this.elements;
    return s[0] *= t, s[3] *= t, s[6] *= t, s[1] *= e, s[4] *= e, s[7] *= e, this;
  }
  rotate(t) {
    const e = Math.cos(t), s = Math.sin(t), n = this.elements, r = n[0], o = n[3], a = n[6], d = n[1], h = n[4], l = n[7];
    return n[0] = e * r + s * d, n[3] = e * o + s * h, n[6] = e * a + s * l, n[1] = -s * r + e * d, n[4] = -s * o + e * h, n[7] = -s * a + e * l, this;
  }
  translate(t, e) {
    const s = this.elements;
    return s[0] += t * s[2], s[3] += t * s[5], s[6] += t * s[8], s[1] += e * s[2], s[4] += e * s[5], s[7] += e * s[8], this;
  }
  equals(t) {
    const e = this.elements, s = t.elements;
    for (let n = 0; n < 9; n++)
      if (e[n] !== s[n])
        return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let s = 0; s < 9; s++)
      this.elements[s] = t[s + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const s = this.elements;
    return t[e] = s[0], t[e + 1] = s[1], t[e + 2] = s[2], t[e + 3] = s[3], t[e + 4] = s[4], t[e + 5] = s[5], t[e + 6] = s[6], t[e + 7] = s[7], t[e + 8] = s[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function ga(i) {
  for (let t = i.length - 1; t >= 0; --t)
    if (i[t] >= 65535)
      return !0;
  return !1;
}
function sn(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function ee(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Fi(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
const Gi = {
  [zt]: { [Jt]: ee },
  [Jt]: { [zt]: Fi }
}, ot = {
  legacyMode: !0,
  get workingColorSpace() {
    return Jt;
  },
  set workingColorSpace(i) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(i, t, e) {
    if (this.legacyMode || t === e || !t || !e)
      return i;
    if (Gi[t] && Gi[t][e] !== void 0) {
      const s = Gi[t][e];
      return i.r = s(i.r), i.g = s(i.g), i.b = s(i.b), i;
    }
    throw new Error("Unsupported color space conversion.");
  },
  fromWorkingColorSpace: function(i, t) {
    return this.convert(i, this.workingColorSpace, t);
  },
  toWorkingColorSpace: function(i, t) {
    return this.convert(i, t, this.workingColorSpace);
  }
}, dr = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, O = { r: 0, g: 0, b: 0 }, ht = { h: 0, s: 0, l: 0 }, oi = { h: 0, s: 0, l: 0 };
function Ji(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
function hi(i, t) {
  return t.r = i.r, t.g = i.g, t.b = i.b, t;
}
class De {
  constructor(t, e, s) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, e === void 0 && s === void 0 ? this.set(t) : this.setRGB(t, e, s);
  }
  set(t) {
    return t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t), this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = zt) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, ot.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, s, n = Jt) {
    return this.r = t, this.g = e, this.b = s, ot.toWorkingColorSpace(this, n), this;
  }
  setHSL(t, e, s, n = Jt) {
    if (t = ma(t, 1), e = tt(e, 0, 1), s = tt(s, 0, 1), e === 0)
      this.r = this.g = this.b = s;
    else {
      const r = s <= 0.5 ? s * (1 + e) : s + e - s * e, o = 2 * s - r;
      this.r = Ji(o, r, t + 1 / 3), this.g = Ji(o, r, t), this.b = Ji(o, r, t - 1 / 3);
    }
    return ot.toWorkingColorSpace(this, n), this;
  }
  setStyle(t, e = zt) {
    function s(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let n;
    if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
      let r;
      const o = n[1], a = n[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(255, parseInt(r[1], 10)) / 255, this.g = Math.min(255, parseInt(r[2], 10)) / 255, this.b = Math.min(255, parseInt(r[3], 10)) / 255, ot.toWorkingColorSpace(this, e), s(r[4]), this;
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return this.r = Math.min(100, parseInt(r[1], 10)) / 100, this.g = Math.min(100, parseInt(r[2], 10)) / 100, this.b = Math.min(100, parseInt(r[3], 10)) / 100, ot.toWorkingColorSpace(this, e), s(r[4]), this;
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
            const d = parseFloat(r[1]) / 360, h = parseFloat(r[2]) / 100, l = parseFloat(r[3]) / 100;
            return s(r[4]), this.setHSL(d, h, l, e);
          }
          break;
      }
    } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const r = n[1], o = r.length;
      if (o === 3)
        return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255, this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255, this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255, ot.toWorkingColorSpace(this, e), this;
      if (o === 6)
        return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255, this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255, this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255, ot.toWorkingColorSpace(this, e), this;
    }
    return t && t.length > 0 ? this.setColorName(t, e) : this;
  }
  setColorName(t, e = zt) {
    const s = dr[t.toLowerCase()];
    return s !== void 0 ? this.setHex(s, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = ee(t.r), this.g = ee(t.g), this.b = ee(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = Fi(t.r), this.g = Fi(t.g), this.b = Fi(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = zt) {
    return ot.fromWorkingColorSpace(hi(this, O), t), tt(O.r * 255, 0, 255) << 16 ^ tt(O.g * 255, 0, 255) << 8 ^ tt(O.b * 255, 0, 255) << 0;
  }
  getHexString(t = zt) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Jt) {
    ot.fromWorkingColorSpace(hi(this, O), e);
    const s = O.r, n = O.g, r = O.b, o = Math.max(s, n, r), a = Math.min(s, n, r);
    let d, h;
    const l = (a + o) / 2;
    if (a === o)
      d = 0, h = 0;
    else {
      const f = o - a;
      switch (h = l <= 0.5 ? f / (o + a) : f / (2 - o - a), o) {
        case s:
          d = (n - r) / f + (n < r ? 6 : 0);
          break;
        case n:
          d = (r - s) / f + 2;
          break;
        case r:
          d = (s - n) / f + 4;
          break;
      }
      d /= 6;
    }
    return t.h = d, t.s = h, t.l = l, t;
  }
  getRGB(t, e = Jt) {
    return ot.fromWorkingColorSpace(hi(this, O), e), t.r = O.r, t.g = O.g, t.b = O.b, t;
  }
  getStyle(t = zt) {
    return ot.fromWorkingColorSpace(hi(this, O), t), t !== zt ? `color(${t} ${O.r} ${O.g} ${O.b})` : `rgb(${O.r * 255 | 0},${O.g * 255 | 0},${O.b * 255 | 0})`;
  }
  offsetHSL(t, e, s) {
    return this.getHSL(ht), ht.h += t, ht.s += e, ht.l += s, this.setHSL(ht.h, ht.s, ht.l), this;
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, s) {
    return this.r = t.r + (e.r - t.r) * s, this.g = t.g + (e.g - t.g) * s, this.b = t.b + (e.b - t.b) * s, this;
  }
  lerpHSL(t, e) {
    this.getHSL(ht), t.getHSL(oi);
    const s = ji(ht.h, oi.h, e), n = ji(ht.s, oi.s, e), r = ji(ht.l, oi.l, e);
    return this.setHSL(s, n, r), this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
De.NAMES = dr;
let ae;
class ya {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      ae === void 0 && (ae = sn("canvas")), ae.width = t.width, ae.height = t.height;
      const s = ae.getContext("2d");
      t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height), e = ae;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = sn("canvas");
      e.width = t.width, e.height = t.height;
      const s = e.getContext("2d");
      s.drawImage(t, 0, 0, t.width, t.height);
      const n = s.getImageData(0, 0, t.width, t.height), r = n.data;
      for (let o = 0; o < r.length; o++)
        r[o] = ee(r[o] / 255) * 255;
      return s.putImageData(n, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let s = 0; s < e.length; s++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[s] = Math.floor(ee(e[s] / 255) * 255) : e[s] = ee(e[s]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
class _a {
  constructor(t = null) {
    this.isSource = !0, this.uuid = Je(), this.data = t, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const s = {
      uuid: this.uuid,
      url: ""
    }, n = this.data;
    if (n !== null) {
      let r;
      if (Array.isArray(n)) {
        r = [];
        for (let o = 0, a = n.length; o < a; o++)
          n[o].isDataTexture ? r.push(Ki(n[o].image)) : r.push(Ki(n[o]));
      } else
        r = Ki(n);
      s.url = r;
    }
    return e || (t.images[this.uuid] = s), s;
  }
}
function Ki(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? ya.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let ba = 0;
class we extends Pi {
  constructor(t = we.DEFAULT_IMAGE, e = we.DEFAULT_MAPPING, s = 1001, n = 1001, r = 1006, o = 1008, a = 1023, d = 1009, h = 1, l = 3e3) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: ba++ }), this.uuid = Je(), this.name = "", this.source = new _a(t), this.mipmaps = [], this.mapping = e, this.wrapS = s, this.wrapT = n, this.magFilter = r, this.minFilter = o, this.anisotropy = h, this.format = a, this.internalFormat = null, this.type = d, this.offset = new $(0, 0), this.repeat = new $(1, 1), this.center = new $(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ke(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = l, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(t) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const s = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return JSON.stringify(this.userData) !== "{}" && (s.userData = this.userData), e || (t.textures[this.uuid] = s), s;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== 300)
      return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case 1e3:
          t.x = t.x - Math.floor(t.x);
          break;
        case 1001:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case 1e3:
          t.y = t.y - Math.floor(t.y);
          break;
        case 1001:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
}
we.DEFAULT_IMAGE = null;
we.DEFAULT_MAPPING = 300;
class Qe {
  constructor(t = 0, e = 0, s = 0, n = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = s, this._w = n;
  }
  static slerpFlat(t, e, s, n, r, o, a) {
    let d = s[n + 0], h = s[n + 1], l = s[n + 2], f = s[n + 3];
    const u = r[o + 0], c = r[o + 1], m = r[o + 2], b = r[o + 3];
    if (a === 0) {
      t[e + 0] = d, t[e + 1] = h, t[e + 2] = l, t[e + 3] = f;
      return;
    }
    if (a === 1) {
      t[e + 0] = u, t[e + 1] = c, t[e + 2] = m, t[e + 3] = b;
      return;
    }
    if (f !== b || d !== u || h !== c || l !== m) {
      let x = 1 - a;
      const y = d * u + h * c + l * m + f * b, E = y >= 0 ? 1 : -1, C = 1 - y * y;
      if (C > Number.EPSILON) {
        const S = Math.sqrt(C), p = Math.atan2(S, y * E);
        x = Math.sin(x * p) / S, a = Math.sin(a * p) / S;
      }
      const M = a * E;
      if (d = d * x + u * M, h = h * x + c * M, l = l * x + m * M, f = f * x + b * M, x === 1 - a) {
        const S = 1 / Math.sqrt(d * d + h * h + l * l + f * f);
        d *= S, h *= S, l *= S, f *= S;
      }
    }
    t[e] = d, t[e + 1] = h, t[e + 2] = l, t[e + 3] = f;
  }
  static multiplyQuaternionsFlat(t, e, s, n, r, o) {
    const a = s[n], d = s[n + 1], h = s[n + 2], l = s[n + 3], f = r[o], u = r[o + 1], c = r[o + 2], m = r[o + 3];
    return t[e] = a * m + l * f + d * c - h * u, t[e + 1] = d * m + l * u + h * f - a * c, t[e + 2] = h * m + l * c + a * u - d * f, t[e + 3] = l * m - a * f - d * u - h * c, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, s, n) {
    return this._x = t, this._y = e, this._z = s, this._w = n, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e) {
    const s = t._x, n = t._y, r = t._z, o = t._order, a = Math.cos, d = Math.sin, h = a(s / 2), l = a(n / 2), f = a(r / 2), u = d(s / 2), c = d(n / 2), m = d(r / 2);
    switch (o) {
      case "XYZ":
        this._x = u * l * f + h * c * m, this._y = h * c * f - u * l * m, this._z = h * l * m + u * c * f, this._w = h * l * f - u * c * m;
        break;
      case "YXZ":
        this._x = u * l * f + h * c * m, this._y = h * c * f - u * l * m, this._z = h * l * m - u * c * f, this._w = h * l * f + u * c * m;
        break;
      case "ZXY":
        this._x = u * l * f - h * c * m, this._y = h * c * f + u * l * m, this._z = h * l * m + u * c * f, this._w = h * l * f - u * c * m;
        break;
      case "ZYX":
        this._x = u * l * f - h * c * m, this._y = h * c * f + u * l * m, this._z = h * l * m - u * c * f, this._w = h * l * f + u * c * m;
        break;
      case "YZX":
        this._x = u * l * f + h * c * m, this._y = h * c * f + u * l * m, this._z = h * l * m - u * c * f, this._w = h * l * f - u * c * m;
        break;
      case "XZY":
        this._x = u * l * f - h * c * m, this._y = h * c * f - u * l * m, this._z = h * l * m + u * c * f, this._w = h * l * f + u * c * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return e !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const s = e / 2, n = Math.sin(s);
    return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(s), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, s = e[0], n = e[4], r = e[8], o = e[1], a = e[5], d = e[9], h = e[2], l = e[6], f = e[10], u = s + a + f;
    if (u > 0) {
      const c = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / c, this._x = (l - d) * c, this._y = (r - h) * c, this._z = (o - n) * c;
    } else if (s > a && s > f) {
      const c = 2 * Math.sqrt(1 + s - a - f);
      this._w = (l - d) / c, this._x = 0.25 * c, this._y = (n + o) / c, this._z = (r + h) / c;
    } else if (a > f) {
      const c = 2 * Math.sqrt(1 + a - s - f);
      this._w = (r - h) / c, this._x = (n + o) / c, this._y = 0.25 * c, this._z = (d + l) / c;
    } else {
      const c = 2 * Math.sqrt(1 + f - s - a);
      this._w = (o - n) / c, this._x = (r + h) / c, this._y = (d + l) / c, this._z = 0.25 * c;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let s = t.dot(e) + 1;
    return s < Number.EPSILON ? (s = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = s) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = s)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = s), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(tt(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const s = this.angleTo(t);
    if (s === 0)
      return this;
    const n = Math.min(1, e / s);
    return this.slerp(t, n), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const s = t._x, n = t._y, r = t._z, o = t._w, a = e._x, d = e._y, h = e._z, l = e._w;
    return this._x = s * l + o * a + n * h - r * d, this._y = n * l + o * d + r * a - s * h, this._z = r * l + o * h + s * d - n * a, this._w = o * l - s * a - n * d - r * h, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0)
      return this;
    if (e === 1)
      return this.copy(t);
    const s = this._x, n = this._y, r = this._z, o = this._w;
    let a = o * t._w + s * t._x + n * t._y + r * t._z;
    if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1)
      return this._w = o, this._x = s, this._y = n, this._z = r, this;
    const d = 1 - a * a;
    if (d <= Number.EPSILON) {
      const c = 1 - e;
      return this._w = c * o + e * this._w, this._x = c * s + e * this._x, this._y = c * n + e * this._y, this._z = c * r + e * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const h = Math.sqrt(d), l = Math.atan2(h, a), f = Math.sin((1 - e) * l) / h, u = Math.sin(e * l) / h;
    return this._w = o * f + this._w * u, this._x = s * f + this._x * u, this._y = n * f + this._y * u, this._z = r * f + this._z * u, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, s) {
    return this.copy(t).slerp(e, s);
  }
  random() {
    const t = Math.random(), e = Math.sqrt(1 - t), s = Math.sqrt(t), n = 2 * Math.PI * Math.random(), r = 2 * Math.PI * Math.random();
    return this.set(
      e * Math.cos(n),
      s * Math.sin(r),
      s * Math.cos(r),
      e * Math.sin(n)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class v {
  constructor(t = 0, e = 0, s = 0) {
    v.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = s;
  }
  set(t, e, s) {
    return s === void 0 && (s = this.z), this.x = t, this.y = e, this.z = s, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(nn.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(nn.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, s = this.y, n = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * s + r[6] * n, this.y = r[1] * e + r[4] * s + r[7] * n, this.z = r[2] * e + r[5] * s + r[8] * n, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, s = this.y, n = this.z, r = t.elements, o = 1 / (r[3] * e + r[7] * s + r[11] * n + r[15]);
    return this.x = (r[0] * e + r[4] * s + r[8] * n + r[12]) * o, this.y = (r[1] * e + r[5] * s + r[9] * n + r[13]) * o, this.z = (r[2] * e + r[6] * s + r[10] * n + r[14]) * o, this;
  }
  applyQuaternion(t) {
    const e = this.x, s = this.y, n = this.z, r = t.x, o = t.y, a = t.z, d = t.w, h = d * e + o * n - a * s, l = d * s + a * e - r * n, f = d * n + r * s - o * e, u = -r * e - o * s - a * n;
    return this.x = h * d + u * -r + l * -a - f * -o, this.y = l * d + u * -o + f * -r - h * -a, this.z = f * d + u * -a + h * -o - l * -r, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, s = this.y, n = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * s + r[8] * n, this.y = r[1] * e + r[5] * s + r[9] * n, this.z = r[2] * e + r[6] * s + r[10] * n, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
  }
  clampLength(t, e) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(Math.max(t, Math.min(e, s)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, s) {
    return this.x = t.x + (e.x - t.x) * s, this.y = t.y + (e.y - t.y) * s, this.z = t.z + (e.z - t.z) * s, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const s = t.x, n = t.y, r = t.z, o = e.x, a = e.y, d = e.z;
    return this.x = n * d - r * a, this.y = r * o - s * d, this.z = s * a - n * o, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0)
      return this.set(0, 0, 0);
    const s = t.dot(this) / e;
    return this.copy(t).multiplyScalar(s);
  }
  projectOnPlane(t) {
    return Qi.copy(this).projectOnVector(t), this.sub(Qi);
  }
  reflect(t) {
    return this.sub(Qi.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0)
      return Math.PI / 2;
    const s = this.dot(t) / e;
    return Math.acos(tt(s, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, s = this.y - t.y, n = this.z - t.z;
    return e * e + s * s + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, s) {
    const n = Math.sin(e) * t;
    return this.x = n * Math.sin(s), this.y = Math.cos(e) * t, this.z = n * Math.cos(s), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, s) {
    return this.x = t * Math.sin(e), this.y = s, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), s = this.setFromMatrixColumn(t, 1).length(), n = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = s, this.z = n, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = (Math.random() - 0.5) * 2, e = Math.random() * Math.PI * 2, s = Math.sqrt(1 - t ** 2);
    return this.x = s * Math.cos(e), this.y = s * Math.sin(e), this.z = t, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Qi = /* @__PURE__ */ new v(), nn = /* @__PURE__ */ new Qe();
class ti {
  constructor(t = new v(1 / 0, 1 / 0, 1 / 0), e = new v(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    let e = 1 / 0, s = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0;
    for (let d = 0, h = t.length; d < h; d += 3) {
      const l = t[d], f = t[d + 1], u = t[d + 2];
      l < e && (e = l), f < s && (s = f), u < n && (n = u), l > r && (r = l), f > o && (o = f), u > a && (a = u);
    }
    return this.min.set(e, s, n), this.max.set(r, o, a), this;
  }
  setFromBufferAttribute(t) {
    let e = 1 / 0, s = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0, a = -1 / 0;
    for (let d = 0, h = t.count; d < h; d++) {
      const l = t.getX(d), f = t.getY(d), u = t.getZ(d);
      l < e && (e = l), f < s && (s = f), u < n && (n = u), l > r && (r = l), f > o && (o = f), u > a && (a = u);
    }
    return this.min.set(e, s, n), this.max.set(r, o, a), this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, s = t.length; e < s; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const s = qt.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(s), this.max.copy(t).add(s), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const s = t.geometry;
    if (s !== void 0)
      if (e && s.attributes != null && s.attributes.position !== void 0) {
        const r = s.attributes.position;
        for (let o = 0, a = r.count; o < a; o++)
          qt.fromBufferAttribute(r, o).applyMatrix4(t.matrixWorld), this.expandByPoint(qt);
      } else
        s.boundingBox === null && s.computeBoundingBox(), ts.copy(s.boundingBox), ts.applyMatrix4(t.matrixWorld), this.union(ts);
    const n = t.children;
    for (let r = 0, o = n.length; r < o; r++)
      this.expandByObject(n[r], e);
    return this;
  }
  containsPoint(t) {
    return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z);
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z);
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, qt), qt.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, s;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, s = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, s = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, s += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, s += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, s += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, s += t.normal.z * this.min.z), e <= -t.constant && s >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Ce), li.subVectors(this.max, Ce), oe.subVectors(t.a, Ce), he.subVectors(t.b, Ce), le.subVectors(t.c, Ce), $t.subVectors(he, oe), Ut.subVectors(le, he), Xt.subVectors(oe, le);
    let e = [
      0,
      -$t.z,
      $t.y,
      0,
      -Ut.z,
      Ut.y,
      0,
      -Xt.z,
      Xt.y,
      $t.z,
      0,
      -$t.x,
      Ut.z,
      0,
      -Ut.x,
      Xt.z,
      0,
      -Xt.x,
      -$t.y,
      $t.x,
      0,
      -Ut.y,
      Ut.x,
      0,
      -Xt.y,
      Xt.x,
      0
    ];
    return !es(e, oe, he, le, li) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !es(e, oe, he, le, li)) ? !1 : (di.crossVectors($t, Ut), e = [di.x, di.y, di.z], es(e, oe, he, le, li));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return qt.copy(t).clamp(this.min, this.max).sub(t).length();
  }
  getBoundingSphere(t) {
    return this.getCenter(t.center), t.radius = this.getSize(qt).length() * 0.5, t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (Mt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Mt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Mt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Mt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Mt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Mt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Mt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Mt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Mt), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Mt = [
  /* @__PURE__ */ new v(),
  /* @__PURE__ */ new v(),
  /* @__PURE__ */ new v(),
  /* @__PURE__ */ new v(),
  /* @__PURE__ */ new v(),
  /* @__PURE__ */ new v(),
  /* @__PURE__ */ new v(),
  /* @__PURE__ */ new v()
], qt = /* @__PURE__ */ new v(), ts = /* @__PURE__ */ new ti(), oe = /* @__PURE__ */ new v(), he = /* @__PURE__ */ new v(), le = /* @__PURE__ */ new v(), $t = /* @__PURE__ */ new v(), Ut = /* @__PURE__ */ new v(), Xt = /* @__PURE__ */ new v(), Ce = /* @__PURE__ */ new v(), li = /* @__PURE__ */ new v(), di = /* @__PURE__ */ new v(), Yt = /* @__PURE__ */ new v();
function es(i, t, e, s, n) {
  for (let r = 0, o = i.length - 3; r <= o; r += 3) {
    Yt.fromArray(i, r);
    const a = n.x * Math.abs(Yt.x) + n.y * Math.abs(Yt.y) + n.z * Math.abs(Yt.z), d = t.dot(Yt), h = e.dot(Yt), l = s.dot(Yt);
    if (Math.max(-Math.max(d, h, l), Math.min(d, h, l)) > a)
      return !1;
  }
  return !0;
}
const xa = /* @__PURE__ */ new ti(), ze = /* @__PURE__ */ new v(), is = /* @__PURE__ */ new v();
class ur {
  constructor(t = new v(), e = -1) {
    this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const s = this.center;
    e !== void 0 ? s.copy(e) : xa.setFromPoints(t).getCenter(s);
    let n = 0;
    for (let r = 0, o = t.length; r < o; r++)
      n = Math.max(n, s.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(n), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const s = this.center.distanceToSquared(t);
    return e.copy(t), s > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    ze.subVectors(t, this.center);
    const e = ze.lengthSq();
    if (e > this.radius * this.radius) {
      const s = Math.sqrt(e), n = (s - this.radius) * 0.5;
      this.center.addScaledVector(ze, n / s), this.radius += n;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (is.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(ze.copy(t.center).add(is)), this.expandByPoint(ze.copy(t.center).sub(is))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const At = /* @__PURE__ */ new v(), ss = /* @__PURE__ */ new v(), ui = /* @__PURE__ */ new v(), Rt = /* @__PURE__ */ new v(), ns = /* @__PURE__ */ new v(), fi = /* @__PURE__ */ new v(), rs = /* @__PURE__ */ new v();
class wa {
  constructor(t = new v(), e = new v(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.direction).multiplyScalar(t).add(this.origin);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, At)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const s = e.dot(this.direction);
    return s < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(s).add(this.origin);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = At.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (At.copy(this.direction).multiplyScalar(e).add(this.origin), At.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, s, n) {
    ss.copy(t).add(e).multiplyScalar(0.5), ui.copy(e).sub(t).normalize(), Rt.copy(this.origin).sub(ss);
    const r = t.distanceTo(e) * 0.5, o = -this.direction.dot(ui), a = Rt.dot(this.direction), d = -Rt.dot(ui), h = Rt.lengthSq(), l = Math.abs(1 - o * o);
    let f, u, c, m;
    if (l > 0)
      if (f = o * d - a, u = o * a - d, m = r * l, f >= 0)
        if (u >= -m)
          if (u <= m) {
            const b = 1 / l;
            f *= b, u *= b, c = f * (f + o * u + 2 * a) + u * (o * f + u + 2 * d) + h;
          } else
            u = r, f = Math.max(0, -(o * u + a)), c = -f * f + u * (u + 2 * d) + h;
        else
          u = -r, f = Math.max(0, -(o * u + a)), c = -f * f + u * (u + 2 * d) + h;
      else
        u <= -m ? (f = Math.max(0, -(-o * r + a)), u = f > 0 ? -r : Math.min(Math.max(-r, -d), r), c = -f * f + u * (u + 2 * d) + h) : u <= m ? (f = 0, u = Math.min(Math.max(-r, -d), r), c = u * (u + 2 * d) + h) : (f = Math.max(0, -(o * r + a)), u = f > 0 ? r : Math.min(Math.max(-r, -d), r), c = -f * f + u * (u + 2 * d) + h);
    else
      u = o > 0 ? -r : r, f = Math.max(0, -(o * u + a)), c = -f * f + u * (u + 2 * d) + h;
    return s && s.copy(this.direction).multiplyScalar(f).add(this.origin), n && n.copy(ui).multiplyScalar(u).add(ss), c;
  }
  intersectSphere(t, e) {
    At.subVectors(t.center, this.origin);
    const s = At.dot(this.direction), n = At.dot(At) - s * s, r = t.radius * t.radius;
    if (n > r)
      return null;
    const o = Math.sqrt(r - n), a = s - o, d = s + o;
    return a < 0 && d < 0 ? null : a < 0 ? this.at(d, e) : this.at(a, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const s = -(this.origin.dot(t.normal) + t.constant) / e;
    return s >= 0 ? s : null;
  }
  intersectPlane(t, e) {
    const s = this.distanceToPlane(t);
    return s === null ? null : this.at(s, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let s, n, r, o, a, d;
    const h = 1 / this.direction.x, l = 1 / this.direction.y, f = 1 / this.direction.z, u = this.origin;
    return h >= 0 ? (s = (t.min.x - u.x) * h, n = (t.max.x - u.x) * h) : (s = (t.max.x - u.x) * h, n = (t.min.x - u.x) * h), l >= 0 ? (r = (t.min.y - u.y) * l, o = (t.max.y - u.y) * l) : (r = (t.max.y - u.y) * l, o = (t.min.y - u.y) * l), s > o || r > n || ((r > s || isNaN(s)) && (s = r), (o < n || isNaN(n)) && (n = o), f >= 0 ? (a = (t.min.z - u.z) * f, d = (t.max.z - u.z) * f) : (a = (t.max.z - u.z) * f, d = (t.min.z - u.z) * f), s > d || a > n) || ((a > s || s !== s) && (s = a), (d < n || n !== n) && (n = d), n < 0) ? null : this.at(s >= 0 ? s : n, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, At) !== null;
  }
  intersectTriangle(t, e, s, n, r) {
    ns.subVectors(e, t), fi.subVectors(s, t), rs.crossVectors(ns, fi);
    let o = this.direction.dot(rs), a;
    if (o > 0) {
      if (n)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    Rt.subVectors(this.origin, t);
    const d = a * this.direction.dot(fi.crossVectors(Rt, fi));
    if (d < 0)
      return null;
    const h = a * this.direction.dot(ns.cross(Rt));
    if (h < 0 || d + h > o)
      return null;
    const l = -a * Rt.dot(rs);
    return l < 0 ? null : this.at(l / o, r);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Y {
  constructor() {
    Y.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ];
  }
  set(t, e, s, n, r, o, a, d, h, l, f, u, c, m, b, x) {
    const y = this.elements;
    return y[0] = t, y[4] = e, y[8] = s, y[12] = n, y[1] = r, y[5] = o, y[9] = a, y[13] = d, y[2] = h, y[6] = l, y[10] = f, y[14] = u, y[3] = c, y[7] = m, y[11] = b, y[15] = x, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Y().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, s = t.elements;
    return e[0] = s[0], e[1] = s[1], e[2] = s[2], e[3] = s[3], e[4] = s[4], e[5] = s[5], e[6] = s[6], e[7] = s[7], e[8] = s[8], e[9] = s[9], e[10] = s[10], e[11] = s[11], e[12] = s[12], e[13] = s[13], e[14] = s[14], e[15] = s[15], this;
  }
  copyPosition(t) {
    const e = this.elements, s = t.elements;
    return e[12] = s[12], e[13] = s[13], e[14] = s[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[3],
      e[6],
      0,
      e[1],
      e[4],
      e[7],
      0,
      e[2],
      e[5],
      e[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(t, e, s) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), s.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, s) {
    return this.set(
      t.x,
      e.x,
      s.x,
      0,
      t.y,
      e.y,
      s.y,
      0,
      t.z,
      e.z,
      s.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const e = this.elements, s = t.elements, n = 1 / de.setFromMatrixColumn(t, 0).length(), r = 1 / de.setFromMatrixColumn(t, 1).length(), o = 1 / de.setFromMatrixColumn(t, 2).length();
    return e[0] = s[0] * n, e[1] = s[1] * n, e[2] = s[2] * n, e[3] = 0, e[4] = s[4] * r, e[5] = s[5] * r, e[6] = s[6] * r, e[7] = 0, e[8] = s[8] * o, e[9] = s[9] * o, e[10] = s[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, s = t.x, n = t.y, r = t.z, o = Math.cos(s), a = Math.sin(s), d = Math.cos(n), h = Math.sin(n), l = Math.cos(r), f = Math.sin(r);
    if (t.order === "XYZ") {
      const u = o * l, c = o * f, m = a * l, b = a * f;
      e[0] = d * l, e[4] = -d * f, e[8] = h, e[1] = c + m * h, e[5] = u - b * h, e[9] = -a * d, e[2] = b - u * h, e[6] = m + c * h, e[10] = o * d;
    } else if (t.order === "YXZ") {
      const u = d * l, c = d * f, m = h * l, b = h * f;
      e[0] = u + b * a, e[4] = m * a - c, e[8] = o * h, e[1] = o * f, e[5] = o * l, e[9] = -a, e[2] = c * a - m, e[6] = b + u * a, e[10] = o * d;
    } else if (t.order === "ZXY") {
      const u = d * l, c = d * f, m = h * l, b = h * f;
      e[0] = u - b * a, e[4] = -o * f, e[8] = m + c * a, e[1] = c + m * a, e[5] = o * l, e[9] = b - u * a, e[2] = -o * h, e[6] = a, e[10] = o * d;
    } else if (t.order === "ZYX") {
      const u = o * l, c = o * f, m = a * l, b = a * f;
      e[0] = d * l, e[4] = m * h - c, e[8] = u * h + b, e[1] = d * f, e[5] = b * h + u, e[9] = c * h - m, e[2] = -h, e[6] = a * d, e[10] = o * d;
    } else if (t.order === "YZX") {
      const u = o * d, c = o * h, m = a * d, b = a * h;
      e[0] = d * l, e[4] = b - u * f, e[8] = m * f + c, e[1] = f, e[5] = o * l, e[9] = -a * l, e[2] = -h * l, e[6] = c * f + m, e[10] = u - b * f;
    } else if (t.order === "XZY") {
      const u = o * d, c = o * h, m = a * d, b = a * h;
      e[0] = d * l, e[4] = -f, e[8] = h * l, e[1] = u * f + b, e[5] = o * l, e[9] = c * f - m, e[2] = m * f - c, e[6] = a * l, e[10] = b * f + u;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Ma, t, Aa);
  }
  lookAt(t, e, s) {
    const n = this.elements;
    return G.subVectors(t, e), G.lengthSq() === 0 && (G.z = 1), G.normalize(), Bt.crossVectors(s, G), Bt.lengthSq() === 0 && (Math.abs(s.z) === 1 ? G.x += 1e-4 : G.z += 1e-4, G.normalize(), Bt.crossVectors(s, G)), Bt.normalize(), ci.crossVectors(G, Bt), n[0] = Bt.x, n[4] = ci.x, n[8] = G.x, n[1] = Bt.y, n[5] = ci.y, n[9] = G.y, n[2] = Bt.z, n[6] = ci.z, n[10] = G.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const s = t.elements, n = e.elements, r = this.elements, o = s[0], a = s[4], d = s[8], h = s[12], l = s[1], f = s[5], u = s[9], c = s[13], m = s[2], b = s[6], x = s[10], y = s[14], E = s[3], C = s[7], M = s[11], S = s[15], p = n[0], g = n[4], A = n[8], w = n[12], _ = n[1], k = n[5], z = n[9], F = n[13], I = n[2], R = n[6], q = n[10], xt = n[14], rt = n[3], at = n[7], wt = n[11], ct = n[15];
    return r[0] = o * p + a * _ + d * I + h * rt, r[4] = o * g + a * k + d * R + h * at, r[8] = o * A + a * z + d * q + h * wt, r[12] = o * w + a * F + d * xt + h * ct, r[1] = l * p + f * _ + u * I + c * rt, r[5] = l * g + f * k + u * R + c * at, r[9] = l * A + f * z + u * q + c * wt, r[13] = l * w + f * F + u * xt + c * ct, r[2] = m * p + b * _ + x * I + y * rt, r[6] = m * g + b * k + x * R + y * at, r[10] = m * A + b * z + x * q + y * wt, r[14] = m * w + b * F + x * xt + y * ct, r[3] = E * p + C * _ + M * I + S * rt, r[7] = E * g + C * k + M * R + S * at, r[11] = E * A + C * z + M * q + S * wt, r[15] = E * w + C * F + M * xt + S * ct, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], s = t[4], n = t[8], r = t[12], o = t[1], a = t[5], d = t[9], h = t[13], l = t[2], f = t[6], u = t[10], c = t[14], m = t[3], b = t[7], x = t[11], y = t[15];
    return m * (+r * d * f - n * h * f - r * a * u + s * h * u + n * a * c - s * d * c) + b * (+e * d * c - e * h * u + r * o * u - n * o * c + n * h * l - r * d * l) + x * (+e * h * f - e * a * c - r * o * f + s * o * c + r * a * l - s * h * l) + y * (-n * a * l - e * d * f + e * a * u + n * o * f - s * o * u + s * d * l);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, s) {
    const n = this.elements;
    return t.isVector3 ? (n[12] = t.x, n[13] = t.y, n[14] = t.z) : (n[12] = t, n[13] = e, n[14] = s), this;
  }
  invert() {
    const t = this.elements, e = t[0], s = t[1], n = t[2], r = t[3], o = t[4], a = t[5], d = t[6], h = t[7], l = t[8], f = t[9], u = t[10], c = t[11], m = t[12], b = t[13], x = t[14], y = t[15], E = f * x * h - b * u * h + b * d * c - a * x * c - f * d * y + a * u * y, C = m * u * h - l * x * h - m * d * c + o * x * c + l * d * y - o * u * y, M = l * b * h - m * f * h + m * a * c - o * b * c - l * a * y + o * f * y, S = m * f * d - l * b * d - m * a * u + o * b * u + l * a * x - o * f * x, p = e * E + s * C + n * M + r * S;
    if (p === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / p;
    return t[0] = E * g, t[1] = (b * u * r - f * x * r - b * n * c + s * x * c + f * n * y - s * u * y) * g, t[2] = (a * x * r - b * d * r + b * n * h - s * x * h - a * n * y + s * d * y) * g, t[3] = (f * d * r - a * u * r - f * n * h + s * u * h + a * n * c - s * d * c) * g, t[4] = C * g, t[5] = (l * x * r - m * u * r + m * n * c - e * x * c - l * n * y + e * u * y) * g, t[6] = (m * d * r - o * x * r - m * n * h + e * x * h + o * n * y - e * d * y) * g, t[7] = (o * u * r - l * d * r + l * n * h - e * u * h - o * n * c + e * d * c) * g, t[8] = M * g, t[9] = (m * f * r - l * b * r - m * s * c + e * b * c + l * s * y - e * f * y) * g, t[10] = (o * b * r - m * a * r + m * s * h - e * b * h - o * s * y + e * a * y) * g, t[11] = (l * a * r - o * f * r - l * s * h + e * f * h + o * s * c - e * a * c) * g, t[12] = S * g, t[13] = (l * b * n - m * f * n + m * s * u - e * b * u - l * s * x + e * f * x) * g, t[14] = (m * a * n - o * b * n - m * s * d + e * b * d + o * s * x - e * a * x) * g, t[15] = (o * f * n - l * a * n + l * s * d - e * f * d - o * s * u + e * a * u) * g, this;
  }
  scale(t) {
    const e = this.elements, s = t.x, n = t.y, r = t.z;
    return e[0] *= s, e[4] *= n, e[8] *= r, e[1] *= s, e[5] *= n, e[9] *= r, e[2] *= s, e[6] *= n, e[10] *= r, e[3] *= s, e[7] *= n, e[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], s = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, s, n));
  }
  makeTranslation(t, e, s) {
    return this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      e,
      0,
      0,
      1,
      s,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), s = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      e,
      -s,
      0,
      0,
      s,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), s = Math.sin(t);
    return this.set(
      e,
      0,
      s,
      0,
      0,
      1,
      0,
      0,
      -s,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), s = Math.sin(t);
    return this.set(
      e,
      -s,
      0,
      0,
      s,
      e,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(t, e) {
    const s = Math.cos(e), n = Math.sin(e), r = 1 - s, o = t.x, a = t.y, d = t.z, h = r * o, l = r * a;
    return this.set(
      h * o + s,
      h * a - n * d,
      h * d + n * a,
      0,
      h * a + n * d,
      l * a + s,
      l * d - n * o,
      0,
      h * d - n * a,
      l * d + n * o,
      r * d * d + s,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e, s) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      s,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(t, e, s, n, r, o) {
    return this.set(
      1,
      s,
      r,
      0,
      t,
      1,
      o,
      0,
      e,
      n,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(t, e, s) {
    const n = this.elements, r = e._x, o = e._y, a = e._z, d = e._w, h = r + r, l = o + o, f = a + a, u = r * h, c = r * l, m = r * f, b = o * l, x = o * f, y = a * f, E = d * h, C = d * l, M = d * f, S = s.x, p = s.y, g = s.z;
    return n[0] = (1 - (b + y)) * S, n[1] = (c + M) * S, n[2] = (m - C) * S, n[3] = 0, n[4] = (c - M) * p, n[5] = (1 - (u + y)) * p, n[6] = (x + E) * p, n[7] = 0, n[8] = (m + C) * g, n[9] = (x - E) * g, n[10] = (1 - (u + b)) * g, n[11] = 0, n[12] = t.x, n[13] = t.y, n[14] = t.z, n[15] = 1, this;
  }
  decompose(t, e, s) {
    const n = this.elements;
    let r = de.set(n[0], n[1], n[2]).length();
    const o = de.set(n[4], n[5], n[6]).length(), a = de.set(n[8], n[9], n[10]).length();
    this.determinant() < 0 && (r = -r), t.x = n[12], t.y = n[13], t.z = n[14], lt.copy(this);
    const h = 1 / r, l = 1 / o, f = 1 / a;
    return lt.elements[0] *= h, lt.elements[1] *= h, lt.elements[2] *= h, lt.elements[4] *= l, lt.elements[5] *= l, lt.elements[6] *= l, lt.elements[8] *= f, lt.elements[9] *= f, lt.elements[10] *= f, e.setFromRotationMatrix(lt), s.x = r, s.y = o, s.z = a, this;
  }
  makePerspective(t, e, s, n, r, o) {
    const a = this.elements, d = 2 * r / (e - t), h = 2 * r / (s - n), l = (e + t) / (e - t), f = (s + n) / (s - n), u = -(o + r) / (o - r), c = -2 * o * r / (o - r);
    return a[0] = d, a[4] = 0, a[8] = l, a[12] = 0, a[1] = 0, a[5] = h, a[9] = f, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = u, a[14] = c, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
  }
  makeOrthographic(t, e, s, n, r, o) {
    const a = this.elements, d = 1 / (e - t), h = 1 / (s - n), l = 1 / (o - r), f = (e + t) * d, u = (s + n) * h, c = (o + r) * l;
    return a[0] = 2 * d, a[4] = 0, a[8] = 0, a[12] = -f, a[1] = 0, a[5] = 2 * h, a[9] = 0, a[13] = -u, a[2] = 0, a[6] = 0, a[10] = -2 * l, a[14] = -c, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, s = t.elements;
    for (let n = 0; n < 16; n++)
      if (e[n] !== s[n])
        return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let s = 0; s < 16; s++)
      this.elements[s] = t[s + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const s = this.elements;
    return t[e] = s[0], t[e + 1] = s[1], t[e + 2] = s[2], t[e + 3] = s[3], t[e + 4] = s[4], t[e + 5] = s[5], t[e + 6] = s[6], t[e + 7] = s[7], t[e + 8] = s[8], t[e + 9] = s[9], t[e + 10] = s[10], t[e + 11] = s[11], t[e + 12] = s[12], t[e + 13] = s[13], t[e + 14] = s[14], t[e + 15] = s[15], t;
  }
}
const de = /* @__PURE__ */ new v(), lt = /* @__PURE__ */ new Y(), Ma = /* @__PURE__ */ new v(0, 0, 0), Aa = /* @__PURE__ */ new v(1, 1, 1), Bt = /* @__PURE__ */ new v(), ci = /* @__PURE__ */ new v(), G = /* @__PURE__ */ new v(), rn = /* @__PURE__ */ new Y(), an = /* @__PURE__ */ new Qe();
class ie {
  constructor(t = 0, e = 0, s = 0, n = ie.DefaultOrder) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = s, this._order = n;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, s, n = this._order) {
    return this._x = t, this._y = e, this._z = s, this._order = n, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, s = !0) {
    const n = t.elements, r = n[0], o = n[4], a = n[8], d = n[1], h = n[5], l = n[9], f = n[2], u = n[6], c = n[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(tt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-l, c), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(u, h), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-tt(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._y = Math.atan2(a, c), this._z = Math.atan2(d, h)) : (this._y = Math.atan2(-f, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(tt(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(-f, c), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(d, r));
        break;
      case "ZYX":
        this._y = Math.asin(-tt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(u, c), this._z = Math.atan2(d, r)) : (this._x = 0, this._z = Math.atan2(-o, h));
        break;
      case "YZX":
        this._z = Math.asin(tt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-f, r)) : (this._x = 0, this._y = Math.atan2(a, c));
        break;
      case "XZY":
        this._z = Math.asin(-tt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(u, h), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-l, c), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, s === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, s) {
    return rn.makeRotationFromQuaternion(t), this.setFromRotationMatrix(rn, e, s);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return an.setFromEuler(this), this.setFromQuaternion(an, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
  }
}
ie.DefaultOrder = "XYZ";
ie.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class va {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let ka = 0;
const on = /* @__PURE__ */ new v(), ue = /* @__PURE__ */ new Qe(), vt = /* @__PURE__ */ new Y(), pi = /* @__PURE__ */ new v(), Te = /* @__PURE__ */ new v(), Sa = /* @__PURE__ */ new v(), Ea = /* @__PURE__ */ new Qe(), hn = /* @__PURE__ */ new v(1, 0, 0), ln = /* @__PURE__ */ new v(0, 1, 0), dn = /* @__PURE__ */ new v(0, 0, 1), Ca = { type: "added" }, un = { type: "removed" };
class gt extends Pi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: ka++ }), this.uuid = Je(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = gt.DefaultUp.clone();
    const t = new v(), e = new ie(), s = new Qe(), n = new v(1, 1, 1);
    function r() {
      s.setFromEuler(e, !1);
    }
    function o() {
      e.setFromQuaternion(s, void 0, !1);
    }
    e._onChange(r), s._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: s
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      modelViewMatrix: {
        value: new Y()
      },
      normalMatrix: {
        value: new Ke()
      }
    }), this.matrix = new Y(), this.matrixWorld = new Y(), this.matrixAutoUpdate = gt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = gt.DefaultMatrixWorldAutoUpdate, this.layers = new va(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return ue.setFromAxisAngle(t, e), this.quaternion.multiply(ue), this;
  }
  rotateOnWorldAxis(t, e) {
    return ue.setFromAxisAngle(t, e), this.quaternion.premultiply(ue), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(hn, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(ln, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(dn, t);
  }
  translateOnAxis(t, e) {
    return on.copy(t).applyQuaternion(this.quaternion), this.position.add(on.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(hn, t);
  }
  translateY(t) {
    return this.translateOnAxis(ln, t);
  }
  translateZ(t) {
    return this.translateOnAxis(dn, t);
  }
  localToWorld(t) {
    return t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return t.applyMatrix4(vt.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, s) {
    t.isVector3 ? pi.copy(t) : pi.set(t, e, s);
    const n = this.parent;
    this.updateWorldMatrix(!0, !1), Te.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? vt.lookAt(Te, pi, this.up) : vt.lookAt(pi, Te, this.up), this.quaternion.setFromRotationMatrix(vt), n && (vt.extractRotation(n.matrixWorld), ue.setFromRotationMatrix(vt), this.quaternion.premultiply(ue.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.parent !== null && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(Ca)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let s = 0; s < arguments.length; s++)
        this.remove(arguments[s]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(un)), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    for (let t = 0; t < this.children.length; t++) {
      const e = this.children[t];
      e.parent = null, e.dispatchEvent(un);
    }
    return this.children.length = 0, this;
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), vt.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), vt.multiply(t.parent.matrixWorld)), t.applyMatrix4(vt), this.add(t), t.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e)
      return this;
    for (let s = 0, n = this.children.length; s < n; s++) {
      const o = this.children[s].getObjectByProperty(t, e);
      if (o !== void 0)
        return o;
    }
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Te, t, Sa), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Te, Ea, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let s = 0, n = e.length; s < n; s++)
      e[s].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1)
      return;
    t(this);
    const e = this.children;
    for (let s = 0, n = e.length; s < n; s++)
      e[s].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let s = 0, n = e.length; s < n; s++) {
      const r = e[s];
      (r.matrixWorldAutoUpdate === !0 || t === !0) && r.updateMatrixWorld(t);
    }
  }
  updateWorldMatrix(t, e) {
    const s = this.parent;
    if (t === !0 && s !== null && s.matrixWorldAutoUpdate === !0 && s.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), e === !0) {
      const n = this.children;
      for (let r = 0, o = n.length; r < o; r++) {
        const a = n[r];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", s = {};
    e && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, s.metadata = {
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const n = {};
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.castShadow === !0 && (n.castShadow = !0), this.receiveShadow === !0 && (n.receiveShadow = !0), this.visible === !1 && (n.visible = !1), this.frustumCulled === !1 && (n.frustumCulled = !1), this.renderOrder !== 0 && (n.renderOrder = this.renderOrder), JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), this.matrixAutoUpdate === !1 && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (n.instanceColor = this.instanceColor.toJSON()));
    function r(a, d) {
      return a[d.uuid] === void 0 && (a[d.uuid] = d.toJSON(t)), d.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (n.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      n.geometry = r(t.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const d = a.shapes;
        if (Array.isArray(d))
          for (let h = 0, l = d.length; h < l; h++) {
            const f = d[h];
            r(t.shapes, f);
          }
        else
          r(t.shapes, d);
      }
    }
    if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let d = 0, h = this.material.length; d < h; d++)
          a.push(r(t.materials, this.material[d]));
        n.material = a;
      } else
        n.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      n.children = [];
      for (let a = 0; a < this.children.length; a++)
        n.children.push(this.children[a].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const d = this.animations[a];
        n.animations.push(r(t.animations, d));
      }
    }
    if (e) {
      const a = o(t.geometries), d = o(t.materials), h = o(t.textures), l = o(t.images), f = o(t.shapes), u = o(t.skeletons), c = o(t.animations), m = o(t.nodes);
      a.length > 0 && (s.geometries = a), d.length > 0 && (s.materials = d), h.length > 0 && (s.textures = h), l.length > 0 && (s.images = l), f.length > 0 && (s.shapes = f), u.length > 0 && (s.skeletons = u), c.length > 0 && (s.animations = c), m.length > 0 && (s.nodes = m);
    }
    return s.object = n, s;
    function o(a) {
      const d = [];
      for (const h in a) {
        const l = a[h];
        delete l.metadata, d.push(l);
      }
      return d;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
      for (let s = 0; s < t.children.length; s++) {
        const n = t.children[s];
        this.add(n.clone());
      }
    return this;
  }
}
gt.DefaultUp = /* @__PURE__ */ new v(0, 1, 0);
gt.DefaultMatrixAutoUpdate = !0;
gt.DefaultMatrixWorldAutoUpdate = !0;
const dt = /* @__PURE__ */ new v(), kt = /* @__PURE__ */ new v(), as = /* @__PURE__ */ new v(), St = /* @__PURE__ */ new v(), fe = /* @__PURE__ */ new v(), ce = /* @__PURE__ */ new v(), fn = /* @__PURE__ */ new v(), os = /* @__PURE__ */ new v(), hs = /* @__PURE__ */ new v(), ls = /* @__PURE__ */ new v();
class Nt {
  constructor(t = new v(), e = new v(), s = new v()) {
    this.a = t, this.b = e, this.c = s;
  }
  static getNormal(t, e, s, n) {
    n.subVectors(s, e), dt.subVectors(t, e), n.cross(dt);
    const r = n.lengthSq();
    return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0);
  }
  static getBarycoord(t, e, s, n, r) {
    dt.subVectors(n, e), kt.subVectors(s, e), as.subVectors(t, e);
    const o = dt.dot(dt), a = dt.dot(kt), d = dt.dot(as), h = kt.dot(kt), l = kt.dot(as), f = o * h - a * a;
    if (f === 0)
      return r.set(-2, -1, -1);
    const u = 1 / f, c = (h * d - a * l) * u, m = (o * l - a * d) * u;
    return r.set(1 - c - m, m, c);
  }
  static containsPoint(t, e, s, n) {
    return this.getBarycoord(t, e, s, n, St), St.x >= 0 && St.y >= 0 && St.x + St.y <= 1;
  }
  static getUV(t, e, s, n, r, o, a, d) {
    return this.getBarycoord(t, e, s, n, St), d.set(0, 0), d.addScaledVector(r, St.x), d.addScaledVector(o, St.y), d.addScaledVector(a, St.z), d;
  }
  static isFrontFacing(t, e, s, n) {
    return dt.subVectors(s, e), kt.subVectors(t, e), dt.cross(kt).dot(n) < 0;
  }
  set(t, e, s) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(s), this;
  }
  setFromPointsAndIndices(t, e, s, n) {
    return this.a.copy(t[e]), this.b.copy(t[s]), this.c.copy(t[n]), this;
  }
  setFromAttributeAndIndices(t, e, s, n) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, s), this.c.fromBufferAttribute(t, n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return dt.subVectors(this.c, this.b), kt.subVectors(this.a, this.b), dt.cross(kt).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Nt.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Nt.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getUV(t, e, s, n, r) {
    return Nt.getUV(t, this.a, this.b, this.c, e, s, n, r);
  }
  containsPoint(t) {
    return Nt.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Nt.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const s = this.a, n = this.b, r = this.c;
    let o, a;
    fe.subVectors(n, s), ce.subVectors(r, s), os.subVectors(t, s);
    const d = fe.dot(os), h = ce.dot(os);
    if (d <= 0 && h <= 0)
      return e.copy(s);
    hs.subVectors(t, n);
    const l = fe.dot(hs), f = ce.dot(hs);
    if (l >= 0 && f <= l)
      return e.copy(n);
    const u = d * f - l * h;
    if (u <= 0 && d >= 0 && l <= 0)
      return o = d / (d - l), e.copy(s).addScaledVector(fe, o);
    ls.subVectors(t, r);
    const c = fe.dot(ls), m = ce.dot(ls);
    if (m >= 0 && c <= m)
      return e.copy(r);
    const b = c * h - d * m;
    if (b <= 0 && h >= 0 && m <= 0)
      return a = h / (h - m), e.copy(s).addScaledVector(ce, a);
    const x = l * m - c * f;
    if (x <= 0 && f - l >= 0 && c - m >= 0)
      return fn.subVectors(r, n), a = (f - l) / (f - l + (c - m)), e.copy(n).addScaledVector(fn, a);
    const y = 1 / (x + b + u);
    return o = b * y, a = u * y, e.copy(s).addScaledVector(fe, o).addScaledVector(ce, a);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
let za = 0;
class Zs extends Pi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: za++ }), this.uuid = Je(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const s = t[e];
        if (s === void 0) {
          console.warn("THREE.Material: '" + e + "' parameter is undefined.");
          continue;
        }
        const n = this[e];
        if (n === void 0) {
          console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.");
          continue;
        }
        n && n.isColor ? n.set(s) : n && n.isVector3 && s && s.isVector3 ? n.copy(s) : this[e] = s;
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = {
      textures: {},
      images: {}
    });
    const s = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.color && this.color.isColor && (s.color = this.color.getHex()), this.roughness !== void 0 && (s.roughness = this.roughness), this.metalness !== void 0 && (s.metalness = this.metalness), this.sheen !== void 0 && (s.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (s.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (s.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (s.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (s.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (s.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (s.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (s.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (s.shininess = this.shininess), this.clearcoat !== void 0 && (s.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (s.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (s.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (s.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (s.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, s.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (s.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (s.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (s.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (s.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (s.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.map && this.map.isTexture && (s.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (s.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (s.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (s.lightMap = this.lightMap.toJSON(t).uuid, s.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (s.aoMap = this.aoMap.toJSON(t).uuid, s.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (s.bumpMap = this.bumpMap.toJSON(t).uuid, s.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (s.normalMap = this.normalMap.toJSON(t).uuid, s.normalMapType = this.normalMapType, s.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (s.displacementMap = this.displacementMap.toJSON(t).uuid, s.displacementScale = this.displacementScale, s.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (s.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (s.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (s.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (s.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (s.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (s.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (s.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (s.combine = this.combine)), this.envMapIntensity !== void 0 && (s.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (s.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (s.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (s.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (s.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (s.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (s.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (s.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (s.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (s.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (s.size = this.size), this.shadowSide !== null && (s.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (s.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (s.blending = this.blending), this.side !== 0 && (s.side = this.side), this.vertexColors && (s.vertexColors = !0), this.opacity < 1 && (s.opacity = this.opacity), this.transparent === !0 && (s.transparent = this.transparent), s.depthFunc = this.depthFunc, s.depthTest = this.depthTest, s.depthWrite = this.depthWrite, s.colorWrite = this.colorWrite, s.stencilWrite = this.stencilWrite, s.stencilWriteMask = this.stencilWriteMask, s.stencilFunc = this.stencilFunc, s.stencilRef = this.stencilRef, s.stencilFuncMask = this.stencilFuncMask, s.stencilFail = this.stencilFail, s.stencilZFail = this.stencilZFail, s.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (s.rotation = this.rotation), this.polygonOffset === !0 && (s.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (s.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (s.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (s.linewidth = this.linewidth), this.dashSize !== void 0 && (s.dashSize = this.dashSize), this.gapSize !== void 0 && (s.gapSize = this.gapSize), this.scale !== void 0 && (s.scale = this.scale), this.dithering === !0 && (s.dithering = !0), this.alphaTest > 0 && (s.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (s.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (s.premultipliedAlpha = this.premultipliedAlpha), this.wireframe === !0 && (s.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (s.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (s.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (s.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (s.flatShading = this.flatShading), this.visible === !1 && (s.visible = !1), this.toneMapped === !1 && (s.toneMapped = !1), this.fog === !1 && (s.fog = !1), JSON.stringify(this.userData) !== "{}" && (s.userData = this.userData);
    function n(r) {
      const o = [];
      for (const a in r) {
        const d = r[a];
        delete d.metadata, o.push(d);
      }
      return o;
    }
    if (e) {
      const r = n(t.textures), o = n(t.images);
      r.length > 0 && (s.textures = r), o.length > 0 && (s.images = o);
    }
    return s;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let s = null;
    if (e !== null) {
      const n = e.length;
      s = new Array(n);
      for (let r = 0; r !== n; ++r)
        s[r] = e[r].clone();
    }
    return this.clippingPlanes = s, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
}
class Ns extends Zs {
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new De(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const D = /* @__PURE__ */ new v(), mi = /* @__PURE__ */ new $();
class Pt {
  constructor(t, e, s) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = s === !0, this.usage = 35044, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this;
  }
  copyAt(t, e, s) {
    t *= this.itemSize, s *= e.itemSize;
    for (let n = 0, r = this.itemSize; n < r; n++)
      this.array[t + n] = e.array[s + n];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, s = this.count; e < s; e++)
        mi.fromBufferAttribute(this, e), mi.applyMatrix3(t), this.setXY(e, mi.x, mi.y);
    else if (this.itemSize === 3)
      for (let e = 0, s = this.count; e < s; e++)
        D.fromBufferAttribute(this, e), D.applyMatrix3(t), this.setXYZ(e, D.x, D.y, D.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, s = this.count; e < s; e++)
      D.fromBufferAttribute(this, e), D.applyMatrix4(t), this.setXYZ(e, D.x, D.y, D.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, s = this.count; e < s; e++)
      D.fromBufferAttribute(this, e), D.applyNormalMatrix(t), this.setXYZ(e, D.x, D.y, D.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, s = this.count; e < s; e++)
      D.fromBufferAttribute(this, e), D.transformDirection(t), this.setXYZ(e, D.x, D.y, D.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = ai(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = j(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = ai(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = j(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = ai(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = j(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = ai(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = j(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, s) {
    return t *= this.itemSize, this.normalized && (e = j(e, this.array), s = j(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = s, this;
  }
  setXYZ(t, e, s, n) {
    return t *= this.itemSize, this.normalized && (e = j(e, this.array), s = j(s, this.array), n = j(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = s, this.array[t + 2] = n, this;
  }
  setXYZW(t, e, s, n, r) {
    return t *= this.itemSize, this.normalized && (e = j(e, this.array), s = j(s, this.array), n = j(n, this.array), r = j(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = s, this.array[t + 2] = n, this.array[t + 3] = r, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== 35044 && (t.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (t.updateRange = this.updateRange), t;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class Ta extends Pt {
  constructor(t, e, s) {
    super(new Uint16Array(t), e, s);
  }
}
class Fa extends Pt {
  constructor(t, e, s) {
    super(new Uint32Array(t), e, s);
  }
}
class Na extends Pt {
  constructor(t, e, s) {
    super(new Float32Array(t), e, s);
  }
}
let $a = 0;
const it = /* @__PURE__ */ new Y(), ds = /* @__PURE__ */ new gt(), pe = /* @__PURE__ */ new v(), J = /* @__PURE__ */ new ti(), Fe = /* @__PURE__ */ new ti(), L = /* @__PURE__ */ new v();
class Zi extends Pi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: $a++ }), this.uuid = Je(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (ga(t) ? Fa : Ta)(t, 1) : this.index = t, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, s = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: s
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
    const s = this.attributes.normal;
    if (s !== void 0) {
      const r = new Ke().getNormalMatrix(t);
      s.applyNormalMatrix(r), s.needsUpdate = !0;
    }
    const n = this.attributes.tangent;
    return n !== void 0 && (n.transformDirection(t), n.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return it.makeRotationFromQuaternion(t), this.applyMatrix4(it), this;
  }
  rotateX(t) {
    return it.makeRotationX(t), this.applyMatrix4(it), this;
  }
  rotateY(t) {
    return it.makeRotationY(t), this.applyMatrix4(it), this;
  }
  rotateZ(t) {
    return it.makeRotationZ(t), this.applyMatrix4(it), this;
  }
  translate(t, e, s) {
    return it.makeTranslation(t, e, s), this.applyMatrix4(it), this;
  }
  scale(t, e, s) {
    return it.makeScale(t, e, s), this.applyMatrix4(it), this;
  }
  lookAt(t) {
    return ds.lookAt(t), ds.updateMatrix(), this.applyMatrix4(ds.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(pe).negate(), this.translate(pe.x, pe.y, pe.z), this;
  }
  setFromPoints(t) {
    const e = [];
    for (let s = 0, n = t.length; s < n; s++) {
      const r = t[s];
      e.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Na(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ti());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new v(-1 / 0, -1 / 0, -1 / 0),
        new v(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let s = 0, n = e.length; s < n; s++) {
          const r = e[s];
          J.setFromBufferAttribute(r), this.morphTargetsRelative ? (L.addVectors(this.boundingBox.min, J.min), this.boundingBox.expandByPoint(L), L.addVectors(this.boundingBox.max, J.max), this.boundingBox.expandByPoint(L)) : (this.boundingBox.expandByPoint(J.min), this.boundingBox.expandByPoint(J.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ur());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new v(), 1 / 0);
      return;
    }
    if (t) {
      const s = this.boundingSphere.center;
      if (J.setFromBufferAttribute(t), e)
        for (let r = 0, o = e.length; r < o; r++) {
          const a = e[r];
          Fe.setFromBufferAttribute(a), this.morphTargetsRelative ? (L.addVectors(J.min, Fe.min), J.expandByPoint(L), L.addVectors(J.max, Fe.max), J.expandByPoint(L)) : (J.expandByPoint(Fe.min), J.expandByPoint(Fe.max));
        }
      J.getCenter(s);
      let n = 0;
      for (let r = 0, o = t.count; r < o; r++)
        L.fromBufferAttribute(t, r), n = Math.max(n, s.distanceToSquared(L));
      if (e)
        for (let r = 0, o = e.length; r < o; r++) {
          const a = e[r], d = this.morphTargetsRelative;
          for (let h = 0, l = a.count; h < l; h++)
            L.fromBufferAttribute(a, h), d && (pe.fromBufferAttribute(t, h), L.add(pe)), n = Math.max(n, s.distanceToSquared(L));
        }
      this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const s = t.array, n = e.position.array, r = e.normal.array, o = e.uv.array, a = n.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Pt(new Float32Array(4 * a), 4));
    const d = this.getAttribute("tangent").array, h = [], l = [];
    for (let _ = 0; _ < a; _++)
      h[_] = new v(), l[_] = new v();
    const f = new v(), u = new v(), c = new v(), m = new $(), b = new $(), x = new $(), y = new v(), E = new v();
    function C(_, k, z) {
      f.fromArray(n, _ * 3), u.fromArray(n, k * 3), c.fromArray(n, z * 3), m.fromArray(o, _ * 2), b.fromArray(o, k * 2), x.fromArray(o, z * 2), u.sub(f), c.sub(f), b.sub(m), x.sub(m);
      const F = 1 / (b.x * x.y - x.x * b.y);
      !isFinite(F) || (y.copy(u).multiplyScalar(x.y).addScaledVector(c, -b.y).multiplyScalar(F), E.copy(c).multiplyScalar(b.x).addScaledVector(u, -x.x).multiplyScalar(F), h[_].add(y), h[k].add(y), h[z].add(y), l[_].add(E), l[k].add(E), l[z].add(E));
    }
    let M = this.groups;
    M.length === 0 && (M = [{
      start: 0,
      count: s.length
    }]);
    for (let _ = 0, k = M.length; _ < k; ++_) {
      const z = M[_], F = z.start, I = z.count;
      for (let R = F, q = F + I; R < q; R += 3)
        C(
          s[R + 0],
          s[R + 1],
          s[R + 2]
        );
    }
    const S = new v(), p = new v(), g = new v(), A = new v();
    function w(_) {
      g.fromArray(r, _ * 3), A.copy(g);
      const k = h[_];
      S.copy(k), S.sub(g.multiplyScalar(g.dot(k))).normalize(), p.crossVectors(A, k);
      const F = p.dot(l[_]) < 0 ? -1 : 1;
      d[_ * 4] = S.x, d[_ * 4 + 1] = S.y, d[_ * 4 + 2] = S.z, d[_ * 4 + 3] = F;
    }
    for (let _ = 0, k = M.length; _ < k; ++_) {
      const z = M[_], F = z.start, I = z.count;
      for (let R = F, q = F + I; R < q; R += 3)
        w(s[R + 0]), w(s[R + 1]), w(s[R + 2]);
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let s = this.getAttribute("normal");
      if (s === void 0)
        s = new Pt(new Float32Array(e.count * 3), 3), this.setAttribute("normal", s);
      else
        for (let u = 0, c = s.count; u < c; u++)
          s.setXYZ(u, 0, 0, 0);
      const n = new v(), r = new v(), o = new v(), a = new v(), d = new v(), h = new v(), l = new v(), f = new v();
      if (t)
        for (let u = 0, c = t.count; u < c; u += 3) {
          const m = t.getX(u + 0), b = t.getX(u + 1), x = t.getX(u + 2);
          n.fromBufferAttribute(e, m), r.fromBufferAttribute(e, b), o.fromBufferAttribute(e, x), l.subVectors(o, r), f.subVectors(n, r), l.cross(f), a.fromBufferAttribute(s, m), d.fromBufferAttribute(s, b), h.fromBufferAttribute(s, x), a.add(l), d.add(l), h.add(l), s.setXYZ(m, a.x, a.y, a.z), s.setXYZ(b, d.x, d.y, d.z), s.setXYZ(x, h.x, h.y, h.z);
        }
      else
        for (let u = 0, c = e.count; u < c; u += 3)
          n.fromBufferAttribute(e, u + 0), r.fromBufferAttribute(e, u + 1), o.fromBufferAttribute(e, u + 2), l.subVectors(o, r), f.subVectors(n, r), l.cross(f), s.setXYZ(u + 0, l.x, l.y, l.z), s.setXYZ(u + 1, l.x, l.y, l.z), s.setXYZ(u + 2, l.x, l.y, l.z);
      this.normalizeNormals(), s.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, s = t.count; e < s; e++)
      L.fromBufferAttribute(t, e), L.normalize(), t.setXYZ(e, L.x, L.y, L.z);
  }
  toNonIndexed() {
    function t(a, d) {
      const h = a.array, l = a.itemSize, f = a.normalized, u = new h.constructor(d.length * l);
      let c = 0, m = 0;
      for (let b = 0, x = d.length; b < x; b++) {
        a.isInterleavedBufferAttribute ? c = d[b] * a.data.stride + a.offset : c = d[b] * l;
        for (let y = 0; y < l; y++)
          u[m++] = h[c++];
      }
      return new Pt(u, l, f);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Zi(), s = this.index.array, n = this.attributes;
    for (const a in n) {
      const d = n[a], h = t(d, s);
      e.setAttribute(a, h);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const d = [], h = r[a];
      for (let l = 0, f = h.length; l < f; l++) {
        const u = h[l], c = t(u, s);
        d.push(c);
      }
      e.morphAttributes[a] = d;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, d = o.length; a < d; a++) {
      const h = o[a];
      e.addGroup(h.start, h.count, h.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const d = this.parameters;
      for (const h in d)
        d[h] !== void 0 && (t[h] = d[h]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const s = this.attributes;
    for (const d in s) {
      const h = s[d];
      t.data.attributes[d] = h.toJSON(t.data);
    }
    const n = {};
    let r = !1;
    for (const d in this.morphAttributes) {
      const h = this.morphAttributes[d], l = [];
      for (let f = 0, u = h.length; f < u; f++) {
        const c = h[f];
        l.push(c.toJSON(t.data));
      }
      l.length > 0 && (n[d] = l, r = !0);
    }
    r && (t.data.morphAttributes = n, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (t.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const s = t.index;
    s !== null && this.setIndex(s.clone(e));
    const n = t.attributes;
    for (const h in n) {
      const l = n[h];
      this.setAttribute(h, l.clone(e));
    }
    const r = t.morphAttributes;
    for (const h in r) {
      const l = [], f = r[h];
      for (let u = 0, c = f.length; u < c; u++)
        l.push(f[u].clone(e));
      this.morphAttributes[h] = l;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const o = t.groups;
    for (let h = 0, l = o.length; h < l; h++) {
      const f = o[h];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const a = t.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const d = t.boundingSphere;
    return d !== null && (this.boundingSphere = d.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, t.parameters !== void 0 && (this.parameters = Object.assign({}, t.parameters)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const cn = /* @__PURE__ */ new Y(), me = /* @__PURE__ */ new wa(), us = /* @__PURE__ */ new ur(), It = /* @__PURE__ */ new v(), Dt = /* @__PURE__ */ new v(), Ot = /* @__PURE__ */ new v(), fs = /* @__PURE__ */ new v(), cs = /* @__PURE__ */ new v(), ps = /* @__PURE__ */ new v(), gi = /* @__PURE__ */ new v(), yi = /* @__PURE__ */ new v(), _i = /* @__PURE__ */ new v(), bi = /* @__PURE__ */ new $(), xi = /* @__PURE__ */ new $(), wi = /* @__PURE__ */ new $(), ms = /* @__PURE__ */ new v(), Mi = /* @__PURE__ */ new v();
class $i extends gt {
  constructor(t = new Zi(), e = new Ns()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, s = Object.keys(e);
    if (s.length > 0) {
      const n = e[s[0]];
      if (n !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = n.length; r < o; r++) {
          const a = n[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  raycast(t, e) {
    const s = this.geometry, n = this.material, r = this.matrixWorld;
    if (n === void 0 || (s.boundingSphere === null && s.computeBoundingSphere(), us.copy(s.boundingSphere), us.applyMatrix4(r), t.ray.intersectsSphere(us) === !1) || (cn.copy(r).invert(), me.copy(t.ray).applyMatrix4(cn), s.boundingBox !== null && me.intersectsBox(s.boundingBox) === !1))
      return;
    let o;
    const a = s.index, d = s.attributes.position, h = s.morphAttributes.position, l = s.morphTargetsRelative, f = s.attributes.uv, u = s.attributes.uv2, c = s.groups, m = s.drawRange;
    if (a !== null)
      if (Array.isArray(n))
        for (let b = 0, x = c.length; b < x; b++) {
          const y = c[b], E = n[y.materialIndex], C = Math.max(y.start, m.start), M = Math.min(a.count, Math.min(y.start + y.count, m.start + m.count));
          for (let S = C, p = M; S < p; S += 3) {
            const g = a.getX(S), A = a.getX(S + 1), w = a.getX(S + 2);
            o = Ai(this, E, t, me, d, h, l, f, u, g, A, w), o && (o.faceIndex = Math.floor(S / 3), o.face.materialIndex = y.materialIndex, e.push(o));
          }
        }
      else {
        const b = Math.max(0, m.start), x = Math.min(a.count, m.start + m.count);
        for (let y = b, E = x; y < E; y += 3) {
          const C = a.getX(y), M = a.getX(y + 1), S = a.getX(y + 2);
          o = Ai(this, n, t, me, d, h, l, f, u, C, M, S), o && (o.faceIndex = Math.floor(y / 3), e.push(o));
        }
      }
    else if (d !== void 0)
      if (Array.isArray(n))
        for (let b = 0, x = c.length; b < x; b++) {
          const y = c[b], E = n[y.materialIndex], C = Math.max(y.start, m.start), M = Math.min(d.count, Math.min(y.start + y.count, m.start + m.count));
          for (let S = C, p = M; S < p; S += 3) {
            const g = S, A = S + 1, w = S + 2;
            o = Ai(this, E, t, me, d, h, l, f, u, g, A, w), o && (o.faceIndex = Math.floor(S / 3), o.face.materialIndex = y.materialIndex, e.push(o));
          }
        }
      else {
        const b = Math.max(0, m.start), x = Math.min(d.count, m.start + m.count);
        for (let y = b, E = x; y < E; y += 3) {
          const C = y, M = y + 1, S = y + 2;
          o = Ai(this, n, t, me, d, h, l, f, u, C, M, S), o && (o.faceIndex = Math.floor(y / 3), e.push(o));
        }
      }
  }
}
function Ua(i, t, e, s, n, r, o, a) {
  let d;
  if (t.side === 1 ? d = s.intersectTriangle(o, r, n, !0, a) : d = s.intersectTriangle(n, r, o, t.side !== 2, a), d === null)
    return null;
  Mi.copy(a), Mi.applyMatrix4(i.matrixWorld);
  const h = e.ray.origin.distanceTo(Mi);
  return h < e.near || h > e.far ? null : {
    distance: h,
    point: Mi.clone(),
    object: i
  };
}
function Ai(i, t, e, s, n, r, o, a, d, h, l, f) {
  It.fromBufferAttribute(n, h), Dt.fromBufferAttribute(n, l), Ot.fromBufferAttribute(n, f);
  const u = i.morphTargetInfluences;
  if (r && u) {
    gi.set(0, 0, 0), yi.set(0, 0, 0), _i.set(0, 0, 0);
    for (let m = 0, b = r.length; m < b; m++) {
      const x = u[m], y = r[m];
      x !== 0 && (fs.fromBufferAttribute(y, h), cs.fromBufferAttribute(y, l), ps.fromBufferAttribute(y, f), o ? (gi.addScaledVector(fs, x), yi.addScaledVector(cs, x), _i.addScaledVector(ps, x)) : (gi.addScaledVector(fs.sub(It), x), yi.addScaledVector(cs.sub(Dt), x), _i.addScaledVector(ps.sub(Ot), x)));
    }
    It.add(gi), Dt.add(yi), Ot.add(_i);
  }
  i.isSkinnedMesh && (i.boneTransform(h, It), i.boneTransform(l, Dt), i.boneTransform(f, Ot));
  const c = Ua(i, t, e, s, It, Dt, Ot, ms);
  if (c) {
    a && (bi.fromBufferAttribute(a, h), xi.fromBufferAttribute(a, l), wi.fromBufferAttribute(a, f), c.uv = Nt.getUV(ms, It, Dt, Ot, bi, xi, wi, new $())), d && (bi.fromBufferAttribute(d, h), xi.fromBufferAttribute(d, l), wi.fromBufferAttribute(d, f), c.uv2 = Nt.getUV(ms, It, Dt, Ot, bi, xi, wi, new $()));
    const m = {
      a: h,
      b: l,
      c: f,
      normal: new v(),
      materialIndex: 0
    };
    Nt.getNormal(It, Dt, Ot, m.normal), c.face = m;
  }
  return c;
}
class pn extends we {
  constructor(t = null, e = 1, s = 1, n, r, o, a, d, h = 1003, l = 1003, f, u) {
    super(null, o, a, d, h, l, n, r, f, u), this.isDataTexture = !0, this.image = { data: t, width: e, height: s }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Ra extends Zs {
  constructor(t) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new De(16777215), this.specular = new De(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new De(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new $(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class Ba extends Zs {
  constructor(t) {
    super(), this.isMeshNormalMaterial = !0, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new $(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.flatShading = t.flatShading, this;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: lr
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = lr);
class _e {
  constructor() {
    T(this, "trs", new Y().identity());
    T(this, "rot", new v(0, 0, 0));
    T(this, "scale", new $(1, 1));
    T(this, "trans", new v(0, 0, 0));
  }
  multiply(t) {
    let e = new _e(), s = t.trs.multiply(this.trs);
    e.trans.setFromMatrixPosition(s), e.rot.applyMatrix4(new Y().extractRotation(s));
    let n = new v().setFromMatrixScale(s);
    return e.scale.x = n.x, e.scale.y = n.y, e.trs = s, e;
  }
  update() {
    const t = new Y().identity();
    let e = t.makeTranslation(this.trans.x, this.trans.y, this.trans.z), s = t.makeRotationFromEuler(new ie(this.rot.x, this.rot.y, this.rot.z, ie.DefaultOrder)), n = t.makeScale(this.scale.x, this.scale.y, 1);
    this.trs = n.multiply(s).multiply(e);
  }
  matrix() {
    return this.trs;
  }
}
function Ia(i) {
  const t = new _e();
  return t.rot.fromArray(i.rot), t.scale.fromArray(i.scale), t.trans.fromArray(i.trans), t;
}
var Z;
(function(i) {
  i[i.Normal = 0] = "Normal", i[i.Multiply = 1] = "Multiply", i[i.ColorDodge = 2] = "ColorDodge", i[i.LinearDodge = 3] = "LinearDodge", i[i.Screen = 4] = "Screen", i[i.ClipToLower = 5] = "ClipToLower", i[i.SliceFromLower = 6] = "SliceFromLower";
})(Z || (Z = {}));
var $s;
(function(i) {
  i[i.Mask = 0] = "Mask", i[i.Dodge = 1] = "Dodge";
})($s || ($s = {}));
class ei {
  constructor() {
    T(this, "type", "");
    T(this, "uuid", -1);
    T(this, "name");
    T(this, "enabled", !0);
    T(this, "zsort", 0);
    T(this, "transform", new _e());
    T(this, "children", []);
    T(this, "puppet", null);
    T(this, "threeObj", new gt());
    T(this, "parent", null);
    T(this, "lockToRoot", !1);
    T(this, "actualTransform", new _e());
    T(this, "actualZsort", 0);
  }
  updateTransform() {
    if (this.transform.update(), this.parent == null)
      this.actualTransform = this.transform, this.actualZsort = this.zsort;
    else {
      const t = new _e();
      t.rot = this.parent.actualTransform.rot.clone().add(this.transform.rot), t.trans = this.parent.actualTransform.trans.clone().add(this.transform.trans), t.scale = new $(this.parent.actualTransform.scale.x * this.transform.scale.x, this.parent.actualTransform.scale.y * this.transform.scale.y), this.actualTransform = t, this.actualZsort = this.parent.actualZsort + this.zsort;
    }
    this.threeObj.position.set(this.transform.trans.x, this.transform.trans.y, this.transform.trans.z), this.threeObj.scale.set(this.transform.scale.x, this.transform.scale.y, 1), this.threeObj.rotation.x = this.transform.rot.x, this.threeObj.rotation.y = this.transform.rot.y, this.threeObj.rotation.z = this.transform.rot.z, this.threeObj.renderOrder = -this.actualZsort;
  }
  onCreateMesh() {
  }
  onCreateMaterials() {
  }
  update() {
    this.updateTransform();
  }
  create() {
    this.onCreateMesh(), this.onCreateMaterials();
  }
}
class Da extends ei {
  constructor() {
    super(...arguments);
    T(this, "joints", []);
    T(this, "bindings", []);
  }
}
class be {
  constructor() {
    T(this, "vertices");
    T(this, "uvs");
    T(this, "indices");
    T(this, "origin");
    T(this, "gridAxes");
    this.vertices = [], this.indices = [], this.origin = new $(0, 0);
  }
  add(t, e) {
    this.vertices.push(t), this.uvs && this.uvs.push(e);
  }
  clearConnections() {
    this.indices.length = 0;
  }
  connect(t, e) {
    this.indices.push(t, e);
  }
  find(t) {
    for (let e = 0; e < this.vertices.length; e++)
      if (this.vertices[e].equals(t))
        return e;
    return -1;
  }
  isReady() {
    return this.indices.length !== 0 && this.indices.length % 3 === 0;
  }
  canTriangulate() {
    return this.isReady();
  }
  fixWinding() {
    if (!!this.isReady())
      for (let t = 0; t < this.indices.length; t += 3) {
        const e = t, s = this.vertices[this.indices[e + 0]], n = this.vertices[this.indices[e + 1]], r = this.vertices[this.indices[e + 2]];
        if ((n.x - s.x) * (r.y - s.y) - (n.y - s.y) * (r.x - s.x) < 0) {
          const a = this.indices[e + 1];
          this.indices[e + 1] = this.indices[e + 2], this.indices[e + 2] = a;
        }
      }
  }
  connectionsAtPoint(t) {
    let e = 0;
    for (const s of this.indices)
      s === t && e++;
    return e;
  }
  copy() {
    const t = new be();
    return t.vertices = this.vertices.slice(), this.uvs && (t.uvs = this.uvs.slice()), t.indices = this.indices.slice(), t.origin = new $(this.origin.x, this.origin.y), t;
  }
  static createQuadMesh(t, e, s = new $(6, 6), n = new $(0, 0)) {
    s.x = Math.max(2, s.x), s.y = Math.max(2, s.y);
    const r = new be(), o = /* @__PURE__ */ new Map(), a = t.x / s.x, d = t.y / s.y, h = e.z / s.x, l = e.w / s.y;
    for (let u = 0; u < s.y + 1; u++) {
      r.gridAxes || (r.gridAxes = [[]]), r.gridAxes[0].push(u * d - n.y);
      for (let c = 0; c < s.x + 1; c++) {
        r.gridAxes[1] || (r.gridAxes[1] = []), r.gridAxes[1].push(c * a - n.x);
        const m = new $(c * a - n.x, u * d - n.y), b = new $(
          e.x + c * h,
          e.y + u * l
        );
        r.vertices.push(m), r.uvs && r.uvs.push(b), o.set([c, u], r.vertices.length - 1);
      }
    }
    const f = new $(
      Math.floor(s.x / 2),
      Math.floor(s.y / 2)
    );
    for (let u = 0; u < s.y; u++)
      for (let c = 0; c < s.x; c++) {
        const m = [c, u], b = [c, u + 1], x = [c + 1, u], y = [c + 1, u + 1];
        c < f.x && u < f.y || c >= f.x && u >= f.y ? r.indices.push(
          o.get(m),
          o.get(x),
          o.get(y),
          o.get(m),
          o.get(y),
          o.get(b)
        ) : r.indices.push(
          o.get(m),
          o.get(b),
          o.get(x),
          o.get(b),
          o.get(x),
          o.get(y)
        );
      }
    return r;
  }
  isGrid() {
    return this.gridAxes !== void 0 && this.gridAxes.length === 2 && this.gridAxes[0].length > 2 && this.gridAxes[1].length > 2;
  }
  clearGridIsDirty() {
    if (this.gridAxes === void 0 || this.gridAxes[0].length === 0 || this.gridAxes[1].length === 0)
      return !1;
    const t = () => (this.gridAxes[0].length = 0, this.gridAxes[1].length = 0, !0);
    if (this.vertices.length !== this.gridAxes[0].length * this.gridAxes[1].length)
      return t();
    let e = 0;
    for (const s of this.gridAxes[0])
      for (const n of this.gridAxes[1]) {
        if (!new $(n, s).equals(this.vertices[e]))
          return t();
        e += 1;
      }
    return !1;
  }
  regenerateGrid() {
    if (this.gridAxes === void 0 || this.gridAxes[0].length < 2 || this.gridAxes[1].length < 2)
      return !1;
    this.vertices.length = 0, this.uvs && (this.uvs.length = 0), this.indices.length = 0;
    const t = /* @__PURE__ */ new Map(), e = this.gridAxes[0][0], s = this.gridAxes[0][this.gridAxes[0].length - 1], n = this.gridAxes[1][0], r = this.gridAxes[1][this.gridAxes[1].length - 1], o = s - e, a = r - n;
    for (let h = 0; h < this.gridAxes[0].length; h++)
      for (let l = 0; l < this.gridAxes[1].length; l++) {
        const f = this.gridAxes[1][l], u = this.gridAxes[0][h], c = new $(f, u), m = new $((f - n) / o, (u - e) / a);
        this.vertices.push(c), this.uvs && this.uvs.push(m), t.set([l, h], this.vertices.length - 1);
      }
    const d = new $(n + o / 2, e + a / 2);
    for (let h = 0; h < this.gridAxes[0].length - 1; h++) {
      const l = this.gridAxes[0][h];
      for (let f = 0; f < this.gridAxes[1].length - 1; f++) {
        const u = this.gridAxes[1][f], c = f, m = h, b = [c, m], x = [c, m + 1], y = [c + 1, m], E = [c + 1, m + 1];
        u < d.x && l < d.y || u >= d.x && l >= d.y ? this.indices.push(
          t.get(b),
          t.get(y),
          t.get(E),
          t.get(b),
          t.get(E),
          t.get(x)
        ) : this.indices.push(
          t.get(b),
          t.get(x),
          t.get(y),
          t.get(x),
          t.get(y),
          t.get(E)
        );
      }
    }
    return !0;
  }
  serialize() {
    const t = {
      verts: this.vertices.map((e) => [e.x, e.y]),
      indices: this.indices,
      origin: this.origin.toArray()
    };
    return this.uvs && this.uvs.length > 0 && (t.uvs = this.uvs.map((e) => [e.x, e.y])), this.gridAxes && this.gridAxes.length === 2 && (t.grid_axes = this.gridAxes), t;
  }
  static deserialize(t) {
    const e = new be();
    if (t.verts && Array.isArray(t.verts))
      for (let s = 0; s < t.verts.length; s += 2) {
        const n = t.verts[s], r = t.verts[s + 1];
        typeof n == "number" && typeof r == "number" ? e.vertices.push(new $(n, r)) : console.error("Unexpected values for vert coordinates:", n, r);
      }
    if (t.uvs && Array.isArray(t.uvs)) {
      e.uvs = [];
      for (let s = 0; s < t.uvs.length; s += 2) {
        const n = t.uvs[s], r = t.uvs[s + 1];
        typeof n == "number" && typeof r == "number" ? e.uvs.push(new $(n, r)) : console.error("Unexpected values for uv coordinates:", n, r);
      }
    }
    return t.indices && Array.isArray(t.indices) && (e.indices = t.indices), t.origin && Array.isArray(t.origin) && e.origin.fromArray(t.origin), t.grid_axes && Array.isArray(t.grid_axes) && (e.gridAxes = t.grid_axes), e;
  }
}
const fr = [
  { _blendmode: Z.Normal, _constant: 1 },
  { _blendmode: Z.Screen, _constant: 4 },
  { _blendmode: Z.ColorDodge, _constant: 4 },
  { _blendmode: Z.Multiply, _constant: 4 }
];
function cr(i, t, e, s) {
  i.create(), i.update(), e.add(i.threeObj);
  for (let n of i.children)
    cr(n, t, i.threeObj);
  return i.threeObj;
}
function Oa(i, t, e, s) {
  let n = cr(i.rootNode, t, t, i.textures);
  t.add(n);
  const r = function() {
    requestAnimationFrame(r), s.render(t, e);
  };
  return r(), {
    rootNode: n,
    animate: r
  };
}
const td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  blend_modes: fr,
  renderPuppet: Oa
}, Symbol.toStringTag, { value: "Module" }));
class La {
  constructor() {
    T(this, "source", -1);
    T(this, "mode", Z.ClipToLower);
  }
}
class pr extends ei {
  constructor() {
    super(...arguments);
    T(this, "mesh", new be());
    T(this, "masks", []);
  }
  onCreateMesh() {
    super.onCreateMesh();
    const e = new Zi(), s = [], n = 3;
    for (let r of this.mesh.vertices) {
      const o = this.mesh.origin ? this.mesh.origin : new $(0, 0);
      s.push(r.x + o.x, r.y + o.y, 0);
    }
    if (e.setAttribute("position", new Pt(new Float32Array(s), n)), this.mesh.uvs) {
      const r = [];
      this.mesh.uvs.map((a) => {
        r.push(a.x, a.y);
      }), e.setAttribute("uv", new Pt(new Float32Array(r), 2));
    }
    e.setIndex(this.mesh.indices), this.threeObj = new $i(e, new Ba());
  }
  onCreateMaterials() {
    this.threeObj instanceof $i && this.threeObj.material && (this.enabled || (this.threeObj.material.opacity = 0), this.threeObj.material.alphaTest = 0.7), super.onCreateMaterials();
  }
}
class Va extends pr {
  onCreateMaterials() {
    if (this.threeObj instanceof $i) {
      console.log("mask material xd");
      const t = new Ra({ color: "white" });
      t.depthWrite = !1, t.stencilWrite = !0, t.stencilRef = this.uuid, t.stencilFunc = 519, t.stencilZPass = 7681, this.threeObj.material = t;
    }
    super.onCreateMaterials();
  }
}
class Pa extends pr {
  constructor() {
    super(...arguments);
    T(this, "textures", []);
    T(this, "opacity", 1);
    T(this, "mask_mode", $s.Mask);
    T(this, "mask_threshold", 0);
    T(this, "masked_by", []);
    T(this, "blend_mode", Z.Normal);
  }
  onCreateMaterials() {
    const e = this.textures.map((s) => this.puppet.textures[s]);
    if (this.threeObj instanceof $i) {
      let s, n = fr.find((o) => o._blendmode === this.blend_mode);
      n === void 0 && (n = { _blendmode: Z.Normal, _constant: 1 });
      const { _constant: r } = n;
      if (e) {
        const o = e[0];
        s = new Ns({ transparent: !0, blending: r, map: o, depthWrite: !1 }), s.stencilWrite = !0, this.masks.length > 0 ? (s.stencilRef = this.masks.map((a) => a.source)[0], s.stencilFunc = 514, s.stencilFail = 7680, s.stencilZFail = 7680, s.stencilZPass = 7680) : (s.depthWrite = !1, s.stencilWrite = !0, s.stencilRef = this.uuid, s.stencilFunc = 519, s.stencilZPass = 7681, s.stencilFail = 7681, s.stencilZFail = 7681, s.stencilZPass = 7681);
      } else
        s = new Ns({ color: "pink", transparent: !0, blending: r });
      this.threeObj.material = s;
    }
    super.onCreateMaterials();
  }
}
function Ws(i, t, e) {
  return e.puppet = i, e.type = t.type, e.uuid = t.uuid, e.name = t.name, e.enabled = t.enabled !== void 0 ? t.enabled : e.enabled, e.zsort = t.zsort !== void 0 ? t.zsort : e.zsort, e.transform = t.transform !== void 0 ? Ia(t.transform) : e.transform, e.children = t.children !== void 0 ? t.children.map((s) => gr(i, s, e)) : e.children, e.lockToRoot = t.children !== void 0 ? t.lockToRoot : e.lockToRoot, e;
}
function mr(i, t, e) {
  return e = Ws(i, t, e), e.mesh = be.deserialize(t.mesh), e.masks = t.masks !== void 0 ? t.masks.map((s) => {
    const n = new La();
    if (s.mode)
      switch (t.blend_mode) {
        case "Mask":
          n.mode = Z.ClipToLower;
          break;
        case "Dodge":
          n.mode = Z.SliceFromLower;
          break;
        default:
          n.mode = Z.Normal;
      }
    return n.source = s.source, n;
  }) : e.children, e;
}
function Za(i, t) {
  let e = new Pa();
  if (e = mr(i, t, e), e.textures = t.textures, e.opacity = t.opacity, e.mask_mode = t.mask_mode, e.mask_threshold = t.mask_threshold, e.masked_by = t.masked_by, t.blend_mode)
    switch (t.blend_mode) {
      case "Multiply":
        e.blend_mode = Z.Multiply;
        break;
      case "ColorDodge":
        e.blend_mode = Z.ColorDodge;
        break;
      case "LinearDodge":
        e.blend_mode = Z.LinearDodge;
        break;
      case "Screen":
        e.blend_mode = Z.Screen;
        break;
      default:
        e.blend_mode = Z.Normal;
    }
  return e;
}
function Wa(i, t) {
  let e = new Va();
  return e = mr(i, t, e), console.log("Serialised a mask"), e;
}
function Ha(i, t) {
  let e = new Da();
  return e = Ws(i, t, e), e.joints = t.joints, e.bindings = t.bindings, e;
}
function qa(i, t) {
  let e = new ei();
  return e = Ws(i, t, e), e;
}
function gr(i, t, e = null) {
  let s = new ei();
  switch (t.type) {
    case "Part":
      s = Za(i, t);
      break;
    case "Mask":
      s = Wa(i, t);
      break;
    case "PathDeform":
      s = Ha(i, t);
      break;
    default:
      s = qa(i, t);
      break;
  }
  return s.parent = e, i.nodes.push(s), s;
}
const yr = 4294967295;
var Ui;
(function(i) {
  i.OnlyAuthor = "onlyAuthor", i.OnlyLicensee = "onlyLicensee", i.Everyone = "everyone";
})(Ui || (Ui = {}));
var Ri;
(function(i) {
  i.Prohibited = "prohibited", i.ViralLicense = "viralLicense", i.CopyleftLicense = "copyleftLicense";
})(Ri || (Ri = {}));
var Bi;
(function(i) {
  i.Prohibited = "prohibited", i.AllowPersonal = "allowPersonal", i.AllowRedistribute = "allowRedistribute";
})(Bi || (Bi = {}));
class _r {
  constructor() {
    T(this, "allowedUsers", Ui.OnlyAuthor);
    T(this, "allowViolence", !1);
    T(this, "allowSexual", !1);
    T(this, "allowCommercial", !1);
    T(this, "allowRedistribution", Ri.Prohibited);
    T(this, "allowModification", Bi.Prohibited);
    T(this, "requireAttribution", !1);
  }
}
class br {
  constructor() {
    T(this, "name", "");
    T(this, "version", "1.0-alpha");
    T(this, "rigger", "");
    T(this, "artist", "");
    T(this, "rights", new _r());
    T(this, "copyright", "");
    T(this, "licenseURL", "");
    T(this, "contact", "");
    T(this, "reference", "");
    T(this, "thumbnailId", yr);
    T(this, "preservePixels", !1);
  }
}
class xr {
  constructor() {
    T(this, "meta", new br());
    T(this, "textures", []);
    T(this, "rootNode", new ei());
    T(this, "nodes", []);
  }
}
function wr(i, t) {
  const e = new xr();
  return e.meta = i.meta, e.textures = t, e.rootNode = gr(e, i.nodes), e.rootNode.transform.scale.y *= -1, e.rootNode.update(), e;
}
const ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NO_THUMBNAIL: yr,
  get PuppetAllowedUsers() {
    return Ui;
  },
  get PuppetAllowedRedistribution() {
    return Ri;
  },
  get PuppetAllowedModification() {
    return Bi;
  },
  PuppetUsageRights: _r,
  PuppetMeta: br,
  Puppet: xr,
  deserializePuppet: wr
}, Symbol.toStringTag, { value: "Module" }));
class Xa {
  constructor(t, e) {
    this.code = "", this.scopes = [["vars"]], this.bitFields = [], this.tmpVariableCount = 0, this.references = /* @__PURE__ */ new Map(), this.imports = [], this.reverseImports = /* @__PURE__ */ new Map(), this.useContextVariables = !1, this.importPath = t, this.useContextVariables = e;
  }
  generateVariable(t) {
    const e = [...this.scopes[this.scopes.length - 1]];
    return t && e.push(t), e.join(".");
  }
  generateOption(t) {
    switch (typeof t) {
      case "number":
        return t.toString();
      case "string":
        return this.generateVariable(t);
      case "function":
        return `${this.addImport(t)}.call(${this.generateVariable()}, vars)`;
    }
  }
  generateError(t) {
    this.pushCode(`throw new Error(${t});`);
  }
  generateTmpVariable() {
    return "$tmp" + this.tmpVariableCount++;
  }
  pushCode(t) {
    this.code += t + `
`;
  }
  pushPath(t) {
    t && this.scopes[this.scopes.length - 1].push(t);
  }
  popPath(t) {
    t && this.scopes[this.scopes.length - 1].pop();
  }
  pushScope(t) {
    this.scopes.push([t]);
  }
  popScope() {
    this.scopes.pop();
  }
  addImport(t) {
    if (!this.importPath)
      return `(${t})`;
    let e = this.reverseImports.get(t);
    return e || (e = this.imports.push(t) - 1, this.reverseImports.set(t, e)), `${this.importPath}[${e}]`;
  }
  addReference(t) {
    this.references.has(t) || this.references.set(t, { resolved: !1, requested: !1 });
  }
  markResolved(t) {
    const e = this.references.get(t);
    e && (e.resolved = !0);
  }
  markRequested(t) {
    t.forEach((e) => {
      const s = this.references.get(e);
      s && (s.requested = !0);
    });
  }
  getUnresolvedReferences() {
    return Array.from(this.references).filter(([t, e]) => !e.resolved && !e.requested).map(([t, e]) => t);
  }
}
const ut = /* @__PURE__ */ new Map(), jt = "___parser_", ft = {
  uint8: 1,
  uint16le: 2,
  uint16be: 2,
  uint32le: 4,
  uint32be: 4,
  int8: 1,
  int16le: 2,
  int16be: 2,
  int32le: 4,
  int32be: 4,
  int64be: 8,
  int64le: 8,
  uint64be: 8,
  uint64le: 8,
  floatle: 4,
  floatbe: 4,
  doublele: 8,
  doublebe: 8
}, vi = {
  uint8: "Uint8",
  uint16le: "Uint16",
  uint16be: "Uint16",
  uint32le: "Uint32",
  uint32be: "Uint32",
  int8: "Int8",
  int16le: "Int16",
  int16be: "Int16",
  int32le: "Int32",
  int32be: "Int32",
  int64be: "BigInt64",
  int64le: "BigInt64",
  uint64be: "BigUint64",
  uint64le: "BigUint64",
  floatle: "Float32",
  floatbe: "Float32",
  doublele: "Float64",
  doublebe: "Float64"
}, ki = {
  uint8: !1,
  uint16le: !0,
  uint16be: !1,
  uint32le: !0,
  uint32be: !1,
  int8: !1,
  int16le: !0,
  int16be: !1,
  int32le: !0,
  int32be: !1,
  int64be: !1,
  int64le: !0,
  uint64be: !1,
  uint64le: !0,
  floatle: !0,
  floatbe: !1,
  doublele: !0,
  doublebe: !1
};
class K {
  constructor() {
    this.varName = "", this.type = "", this.options = {}, this.endian = "be", this.useContextVariables = !1;
  }
  static start() {
    return new K();
  }
  primitiveGenerateN(t, e) {
    const s = vi[t], n = ki[t];
    e.pushCode(`${e.generateVariable(this.varName)} = dataView.get${s}(offset, ${n});`), e.pushCode(`offset += ${ft[t]};`);
  }
  primitiveN(t, e, s) {
    return this.setNextParser(t, e, s);
  }
  useThisEndian(t) {
    return t + this.endian.toLowerCase();
  }
  uint8(t, e = {}) {
    return this.primitiveN("uint8", t, e);
  }
  uint16(t, e = {}) {
    return this.primitiveN(this.useThisEndian("uint16"), t, e);
  }
  uint16le(t, e = {}) {
    return this.primitiveN("uint16le", t, e);
  }
  uint16be(t, e = {}) {
    return this.primitiveN("uint16be", t, e);
  }
  uint32(t, e = {}) {
    return this.primitiveN(this.useThisEndian("uint32"), t, e);
  }
  uint32le(t, e = {}) {
    return this.primitiveN("uint32le", t, e);
  }
  uint32be(t, e = {}) {
    return this.primitiveN("uint32be", t, e);
  }
  int8(t, e = {}) {
    return this.primitiveN("int8", t, e);
  }
  int16(t, e = {}) {
    return this.primitiveN(this.useThisEndian("int16"), t, e);
  }
  int16le(t, e = {}) {
    return this.primitiveN("int16le", t, e);
  }
  int16be(t, e = {}) {
    return this.primitiveN("int16be", t, e);
  }
  int32(t, e = {}) {
    return this.primitiveN(this.useThisEndian("int32"), t, e);
  }
  int32le(t, e = {}) {
    return this.primitiveN("int32le", t, e);
  }
  int32be(t, e = {}) {
    return this.primitiveN("int32be", t, e);
  }
  bigIntVersionCheck() {
    if (!DataView.prototype.getBigInt64)
      throw new Error("BigInt64 is unsupported on this runtime");
  }
  int64(t, e = {}) {
    return this.bigIntVersionCheck(), this.primitiveN(this.useThisEndian("int64"), t, e);
  }
  int64be(t, e = {}) {
    return this.bigIntVersionCheck(), this.primitiveN("int64be", t, e);
  }
  int64le(t, e = {}) {
    return this.bigIntVersionCheck(), this.primitiveN("int64le", t, e);
  }
  uint64(t, e = {}) {
    return this.bigIntVersionCheck(), this.primitiveN(this.useThisEndian("uint64"), t, e);
  }
  uint64be(t, e = {}) {
    return this.bigIntVersionCheck(), this.primitiveN("uint64be", t, e);
  }
  uint64le(t, e = {}) {
    return this.bigIntVersionCheck(), this.primitiveN("uint64le", t, e);
  }
  floatle(t, e = {}) {
    return this.primitiveN("floatle", t, e);
  }
  floatbe(t, e = {}) {
    return this.primitiveN("floatbe", t, e);
  }
  doublele(t, e = {}) {
    return this.primitiveN("doublele", t, e);
  }
  doublebe(t, e = {}) {
    return this.primitiveN("doublebe", t, e);
  }
  bitN(t, e, s) {
    return s.length = t, this.setNextParser("bit", e, s);
  }
  bit1(t, e = {}) {
    return this.bitN(1, t, e);
  }
  bit2(t, e = {}) {
    return this.bitN(2, t, e);
  }
  bit3(t, e = {}) {
    return this.bitN(3, t, e);
  }
  bit4(t, e = {}) {
    return this.bitN(4, t, e);
  }
  bit5(t, e = {}) {
    return this.bitN(5, t, e);
  }
  bit6(t, e = {}) {
    return this.bitN(6, t, e);
  }
  bit7(t, e = {}) {
    return this.bitN(7, t, e);
  }
  bit8(t, e = {}) {
    return this.bitN(8, t, e);
  }
  bit9(t, e = {}) {
    return this.bitN(9, t, e);
  }
  bit10(t, e = {}) {
    return this.bitN(10, t, e);
  }
  bit11(t, e = {}) {
    return this.bitN(11, t, e);
  }
  bit12(t, e = {}) {
    return this.bitN(12, t, e);
  }
  bit13(t, e = {}) {
    return this.bitN(13, t, e);
  }
  bit14(t, e = {}) {
    return this.bitN(14, t, e);
  }
  bit15(t, e = {}) {
    return this.bitN(15, t, e);
  }
  bit16(t, e = {}) {
    return this.bitN(16, t, e);
  }
  bit17(t, e = {}) {
    return this.bitN(17, t, e);
  }
  bit18(t, e = {}) {
    return this.bitN(18, t, e);
  }
  bit19(t, e = {}) {
    return this.bitN(19, t, e);
  }
  bit20(t, e = {}) {
    return this.bitN(20, t, e);
  }
  bit21(t, e = {}) {
    return this.bitN(21, t, e);
  }
  bit22(t, e = {}) {
    return this.bitN(22, t, e);
  }
  bit23(t, e = {}) {
    return this.bitN(23, t, e);
  }
  bit24(t, e = {}) {
    return this.bitN(24, t, e);
  }
  bit25(t, e = {}) {
    return this.bitN(25, t, e);
  }
  bit26(t, e = {}) {
    return this.bitN(26, t, e);
  }
  bit27(t, e = {}) {
    return this.bitN(27, t, e);
  }
  bit28(t, e = {}) {
    return this.bitN(28, t, e);
  }
  bit29(t, e = {}) {
    return this.bitN(29, t, e);
  }
  bit30(t, e = {}) {
    return this.bitN(30, t, e);
  }
  bit31(t, e = {}) {
    return this.bitN(31, t, e);
  }
  bit32(t, e = {}) {
    return this.bitN(32, t, e);
  }
  namely(t) {
    return ut.set(t, this), this.alias = t, this;
  }
  skip(t, e = {}) {
    return this.seek(t, e);
  }
  seek(t, e = {}) {
    if (e.assert)
      throw new Error("assert option on seek is not allowed.");
    return this.setNextParser("seek", "", { length: t });
  }
  string(t, e) {
    if (!e.zeroTerminated && !e.length && !e.greedy)
      throw new Error("One of length, zeroTerminated, or greedy must be defined for string.");
    if ((e.zeroTerminated || e.length) && e.greedy)
      throw new Error("greedy is mutually exclusive with length and zeroTerminated for string.");
    if (e.stripNull && !(e.length || e.greedy))
      throw new Error("length or greedy must be defined if stripNull is enabled.");
    return e.encoding = e.encoding || "utf8", this.setNextParser("string", t, e);
  }
  buffer(t, e) {
    if (!e.length && !e.readUntil)
      throw new Error("length or readUntil must be defined for buffer.");
    return this.setNextParser("buffer", t, e);
  }
  wrapped(t, e) {
    if (typeof e != "object" && typeof t == "object" && (e = t, t = ""), !e || !e.wrapper || !e.type)
      throw new Error("Both wrapper and type must be defined for wrapped.");
    if (!e.length && !e.readUntil)
      throw new Error("length or readUntil must be defined for wrapped.");
    return this.setNextParser("wrapper", t, e);
  }
  array(t, e) {
    if (!e.readUntil && !e.length && !e.lengthInBytes)
      throw new Error("One of readUntil, length and lengthInBytes must be defined for array.");
    if (!e.type)
      throw new Error("type is required for array.");
    if (typeof e.type == "string" && !ut.has(e.type) && !(e.type in ft))
      throw new Error(`Array element type "${e.type}" is unkown.`);
    return this.setNextParser("array", t, e);
  }
  choice(t, e) {
    if (typeof e != "object" && typeof t == "object" && (e = t, t = ""), !e)
      throw new Error("tag and choices are are required for choice.");
    if (!e.tag)
      throw new Error("tag is requird for choice.");
    if (!e.choices)
      throw new Error("choices is required for choice.");
    for (const s in e.choices) {
      const n = parseInt(s, 10), r = e.choices[n];
      if (isNaN(n))
        throw new Error(`Choice key "${s}" is not a number.`);
      if (typeof r == "string" && !ut.has(r) && !(r in ft))
        throw new Error(`Choice type "${r}" is unkown.`);
    }
    return this.setNextParser("choice", t, e);
  }
  nest(t, e) {
    if (typeof e != "object" && typeof t == "object" && (e = t, t = ""), !e || !e.type)
      throw new Error("type is required for nest.");
    if (!(e.type instanceof K) && !ut.has(e.type))
      throw new Error("type must be a known parser name or a Parser object.");
    if (!(e.type instanceof K) && !t)
      throw new Error("type must be a Parser object if the variable name is omitted.");
    return this.setNextParser("nest", t, e);
  }
  pointer(t, e) {
    if (!e.offset)
      throw new Error("offset is required for pointer.");
    if (!e.type)
      throw new Error("type is required for pointer.");
    if (typeof e.type == "string" && !(e.type in ft) && !ut.has(e.type))
      throw new Error(`Pointer type "${e.type}" is unkown.`);
    return this.setNextParser("pointer", t, e);
  }
  saveOffset(t, e = {}) {
    return this.setNextParser("saveOffset", t, e);
  }
  endianness(t) {
    switch (t.toLowerCase()) {
      case "little":
        this.endian = "le";
        break;
      case "big":
        this.endian = "be";
        break;
      default:
        throw new Error('endianness must be one of "little" or "big"');
    }
    return this;
  }
  endianess(t) {
    return this.endianness(t);
  }
  useContextVars(t = !0) {
    return this.useContextVariables = t, this;
  }
  create(t) {
    if (!(t instanceof Function))
      throw new Error("Constructor must be a Function object.");
    return this.constructorFn = t, this;
  }
  getContext(t) {
    const e = new Xa(t, this.useContextVariables);
    return e.pushCode("var dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.length);"), this.alias ? (this.addAliasedCode(e), e.pushCode(`return ${jt + this.alias}(0).result;`)) : this.addRawCode(e), e;
  }
  getCode() {
    const t = "imports";
    return this.getContext(t).code;
  }
  addRawCode(t) {
    t.pushCode("var offset = 0;"), t.pushCode(`var vars = ${this.constructorFn ? "new constructorFn()" : "{}"};`), t.pushCode("vars.$parent = null;"), t.pushCode("vars.$root = vars;"), this.generate(t), this.resolveReferences(t), t.pushCode("delete vars.$parent;"), t.pushCode("delete vars.$root;"), t.pushCode("return vars;");
  }
  addAliasedCode(t) {
    return t.pushCode(`function ${jt + this.alias}(offset, context) {`), t.pushCode(`var vars = ${this.constructorFn ? "new constructorFn()" : "{}"};`), t.pushCode("var ctx = Object.assign({$parent: null, $root: vars}, context || {});"), t.pushCode("vars = Object.assign(vars, ctx);"), this.generate(t), t.markResolved(this.alias), this.resolveReferences(t), t.pushCode("Object.keys(ctx).forEach(function (item) { delete vars[item]; });"), t.pushCode("return { offset: offset, result: vars };"), t.pushCode("}"), t;
  }
  resolveReferences(t) {
    const e = t.getUnresolvedReferences();
    t.markRequested(e), e.forEach((s) => {
      var n;
      (n = ut.get(s)) === null || n === void 0 || n.addAliasedCode(t);
    });
  }
  compile() {
    const t = "imports", e = this.getContext(t);
    this.compiled = new Function(t, "TextDecoder", `return function (buffer, constructorFn) { ${e.code} };`)(e.imports, TextDecoder);
  }
  sizeOf() {
    let t = NaN;
    if (Object.keys(ft).indexOf(this.type) >= 0)
      t = ft[this.type];
    else if (this.type === "string" && typeof this.options.length == "number")
      t = this.options.length;
    else if (this.type === "buffer" && typeof this.options.length == "number")
      t = this.options.length;
    else if (this.type === "array" && typeof this.options.length == "number") {
      let e = NaN;
      typeof this.options.type == "string" ? e = ft[this.options.type] : this.options.type instanceof K && (e = this.options.type.sizeOf()), t = this.options.length * e;
    } else
      this.type === "seek" ? t = this.options.length : this.type === "nest" ? t = this.options.type.sizeOf() : this.type || (t = 0);
    return this.next && (t += this.next.sizeOf()), t;
  }
  parse(t) {
    return this.compiled || this.compile(), this.compiled(t, this.constructorFn);
  }
  setNextParser(t, e, s) {
    const n = new K();
    return n.type = t, n.varName = e, n.options = s, n.endian = this.endian, this.head ? this.head.next = n : this.next = n, this.head = n, this;
  }
  generate(t) {
    if (this.type) {
      switch (this.type) {
        case "uint8":
        case "uint16le":
        case "uint16be":
        case "uint32le":
        case "uint32be":
        case "int8":
        case "int16le":
        case "int16be":
        case "int32le":
        case "int32be":
        case "int64be":
        case "int64le":
        case "uint64be":
        case "uint64le":
        case "floatle":
        case "floatbe":
        case "doublele":
        case "doublebe":
          this.primitiveGenerateN(this.type, t);
          break;
        case "bit":
          this.generateBit(t);
          break;
        case "string":
          this.generateString(t);
          break;
        case "buffer":
          this.generateBuffer(t);
          break;
        case "seek":
          this.generateSeek(t);
          break;
        case "nest":
          this.generateNest(t);
          break;
        case "array":
          this.generateArray(t);
          break;
        case "choice":
          this.generateChoice(t);
          break;
        case "pointer":
          this.generatePointer(t);
          break;
        case "saveOffset":
          this.generateSaveOffset(t);
          break;
        case "wrapper":
          this.generateWrapper(t);
          break;
      }
      this.type !== "bit" && this.generateAssert(t);
    }
    const e = t.generateVariable(this.varName);
    return this.options.formatter && this.type !== "bit" && this.generateFormatter(t, e, this.options.formatter), this.generateNext(t);
  }
  generateAssert(t) {
    if (!this.options.assert)
      return;
    const e = t.generateVariable(this.varName);
    switch (typeof this.options.assert) {
      case "function":
        {
          const s = t.addImport(this.options.assert);
          t.pushCode(`if (!${s}.call(vars, ${e})) {`);
        }
        break;
      case "number":
        t.pushCode(`if (${this.options.assert} !== ${e}) {`);
        break;
      case "string":
        t.pushCode(`if (${JSON.stringify(this.options.assert)} !== ${e}) {`);
        break;
      default:
        throw new Error("assert option must be a string, number or a function.");
    }
    t.generateError(`"Assertion error: ${e} is " + ${JSON.stringify(this.options.assert.toString())}`), t.pushCode("}");
  }
  generateNext(t) {
    return this.next && (t = this.next.generate(t)), t;
  }
  generateBit(t) {
    const e = JSON.parse(JSON.stringify(this));
    if (e.options = this.options, e.generateAssert = this.generateAssert.bind(this), e.generateFormatter = this.generateFormatter.bind(this), e.varName = t.generateVariable(e.varName), t.bitFields.push(e), !this.next || this.next && ["bit", "nest"].indexOf(this.next.type) < 0) {
      const s = t.generateTmpVariable();
      t.pushCode(`var ${s} = 0;`);
      const n = (l = 0) => {
        let f = 0;
        for (let u = l; u < t.bitFields.length; u++) {
          const c = t.bitFields[u].options.length;
          if (f + c > 32)
            break;
          f += c;
        }
        return f;
      }, r = (l) => (l <= 8 ? (t.pushCode(`${s} = dataView.getUint8(offset);`), l = 8) : l <= 16 ? (t.pushCode(`${s} = dataView.getUint16(offset);`), l = 16) : l <= 24 ? (t.pushCode(`${s} = (dataView.getUint16(offset) << 8) | dataView.getUint8(offset + 2);`), l = 24) : (t.pushCode(`${s} = dataView.getUint32(offset);`), l = 32), t.pushCode(`offset += ${l / 8};`), l);
      let o = 0;
      const a = this.endian === "be";
      let d = 0, h = 0;
      t.bitFields.forEach((l, f) => {
        let u = l.options.length;
        if (u > h) {
          if (h) {
            const b = -1 >>> 32 - h;
            t.pushCode(`${l.varName} = (${s} & 0x${b.toString(16)}) << ${u - h};`), u -= h;
          }
          o = 0, h = d = r(n(f) - h);
        }
        const c = a ? d - o - u : o, m = -1 >>> 32 - u;
        t.pushCode(`${l.varName} ${u < l.options.length ? "|=" : "="} ${s} >> ${c} & 0x${m.toString(16)};`), l.options.length === 32 && t.pushCode(`${l.varName} >>>= 0`), l.options.assert && l.generateAssert(t), l.options.formatter && l.generateFormatter(t, l.varName, l.options.formatter), o += u, h -= u;
      }), t.bitFields = [];
    }
  }
  generateSeek(t) {
    const e = t.generateOption(this.options.length);
    t.pushCode(`offset += ${e};`);
  }
  generateString(t) {
    const e = t.generateVariable(this.varName), s = t.generateTmpVariable(), n = this.options.encoding, r = n.toLowerCase() === "hex", o = 'b => b.toString(16).padStart(2, "0")';
    if (this.options.length && this.options.zeroTerminated) {
      const a = this.options.length;
      t.pushCode(`var ${s} = offset;`), t.pushCode(`while(dataView.getUint8(offset++) !== 0 && offset - ${s} < ${a});`);
      const d = `offset - ${s} < ${a} ? offset - 1 : offset`;
      t.pushCode(r ? `${e} = Array.from(buffer.subarray(${s}, ${d}), ${o}).join('');` : `${e} = new TextDecoder('${n}').decode(buffer.subarray(${s}, ${d}));`);
    } else if (this.options.length) {
      const a = t.generateOption(this.options.length);
      t.pushCode(r ? `${e} = Array.from(buffer.subarray(offset, offset + ${a}), ${o}).join('');` : `${e} = new TextDecoder('${n}').decode(buffer.subarray(offset, offset + ${a}));`), t.pushCode(`offset += ${a};`);
    } else
      this.options.zeroTerminated ? (t.pushCode(`var ${s} = offset;`), t.pushCode("while(dataView.getUint8(offset++) !== 0);"), t.pushCode(r ? `${e} = Array.from(buffer.subarray(${s}, offset - 1), ${o}).join('');` : `${e} = new TextDecoder('${n}').decode(buffer.subarray(${s}, offset - 1));`)) : this.options.greedy && (t.pushCode(`var ${s} = offset;`), t.pushCode("while(buffer.length > offset++);"), t.pushCode(r ? `${e} = Array.from(buffer.subarray(${s}, offset), ${o}).join('');` : `${e} = new TextDecoder('${n}').decode(buffer.subarray(${s}, offset));`));
    this.options.stripNull && t.pushCode(`${e} = ${e}.replace(/\\x00+$/g, '')`);
  }
  generateBuffer(t) {
    const e = t.generateVariable(this.varName);
    if (typeof this.options.readUntil == "function") {
      const s = this.options.readUntil, n = t.generateTmpVariable(), r = t.generateTmpVariable();
      t.pushCode(`var ${n} = offset;`), t.pushCode(`var ${r} = 0;`), t.pushCode("while (offset < buffer.length) {"), t.pushCode(`${r} = dataView.getUint8(offset);`);
      const o = t.addImport(s);
      t.pushCode(`if (${o}.call(${t.generateVariable()}, ${r}, buffer.subarray(offset))) break;`), t.pushCode("offset += 1;"), t.pushCode("}"), t.pushCode(`${e} = buffer.subarray(${n}, offset);`);
    } else if (this.options.readUntil === "eof")
      t.pushCode(`${e} = buffer.subarray(offset);`);
    else {
      const s = t.generateOption(this.options.length);
      t.pushCode(`${e} = buffer.subarray(offset, offset + ${s});`), t.pushCode(`offset += ${s};`);
    }
    this.options.clone && t.pushCode(`${e} = buffer.constructor.from(${e});`);
  }
  generateArray(t) {
    const e = t.generateOption(this.options.length), s = t.generateOption(this.options.lengthInBytes), n = this.options.type, r = t.generateTmpVariable(), o = t.generateVariable(this.varName), a = t.generateTmpVariable(), d = this.options.key, h = typeof d == "string";
    if (h ? t.pushCode(`${o} = {};`) : t.pushCode(`${o} = [];`), typeof this.options.readUntil == "function" ? t.pushCode("do {") : this.options.readUntil === "eof" ? t.pushCode(`for (var ${r} = 0; offset < buffer.length; ${r}++) {`) : s !== void 0 ? t.pushCode(`for (var ${r} = offset + ${s}; offset < ${r}; ) {`) : t.pushCode(`for (var ${r} = ${e}; ${r} > 0; ${r}--) {`), typeof n == "string")
      if (ut.get(n)) {
        const l = t.generateTmpVariable();
        if (t.pushCode(`var ${l} = ${jt + n}(offset, {`), t.useContextVariables) {
          const f = t.generateVariable();
          t.pushCode(`$parent: ${f},`), t.pushCode(`$root: ${f}.$root,`), !this.options.readUntil && s === void 0 && t.pushCode(`$index: ${e} - ${r},`);
        }
        t.pushCode("});"), t.pushCode(`var ${a} = ${l}.result; offset = ${l}.offset;`), n !== this.alias && t.addReference(n);
      } else {
        const l = vi[n], f = ki[n];
        t.pushCode(`var ${a} = dataView.get${l}(offset, ${f});`), t.pushCode(`offset += ${ft[n]};`);
      }
    else if (n instanceof K) {
      t.pushCode(`var ${a} = {};`);
      const l = t.generateVariable();
      t.pushScope(a), t.useContextVariables && (t.pushCode(`${a}.$parent = ${l};`), t.pushCode(`${a}.$root = ${l}.$root;`), !this.options.readUntil && s === void 0 && t.pushCode(`${a}.$index = ${e} - ${r};`)), n.generate(t), t.useContextVariables && (t.pushCode(`delete ${a}.$parent;`), t.pushCode(`delete ${a}.$root;`), t.pushCode(`delete ${a}.$index;`)), t.popScope();
    }
    if (h ? t.pushCode(`${o}[${a}.${d}] = ${a};`) : t.pushCode(`${o}.push(${a});`), t.pushCode("}"), typeof this.options.readUntil == "function") {
      const l = this.options.readUntil, f = t.addImport(l);
      t.pushCode(`while (!${f}.call(${t.generateVariable()}, ${a}, buffer.subarray(offset)));`);
    }
  }
  generateChoiceCase(t, e, s) {
    if (typeof s == "string") {
      const n = t.generateVariable(this.varName);
      if (ut.has(s)) {
        const r = t.generateTmpVariable();
        t.pushCode(`var ${r} = ${jt + s}(offset, {`), t.useContextVariables && (t.pushCode(`$parent: ${n}.$parent,`), t.pushCode(`$root: ${n}.$root,`)), t.pushCode("});"), t.pushCode(`${n} = ${r}.result; offset = ${r}.offset;`), s !== this.alias && t.addReference(s);
      } else {
        const r = vi[s], o = ki[s];
        t.pushCode(`${n} = dataView.get${r}(offset, ${o});`), t.pushCode(`offset += ${ft[s]}`);
      }
    } else
      s instanceof K && (t.pushPath(e), s.generate(t), t.popPath(e));
  }
  generateChoice(t) {
    const e = t.generateOption(this.options.tag), s = t.generateVariable(this.varName);
    if (this.varName && (t.pushCode(`${s} = {};`), t.useContextVariables)) {
      const n = t.generateVariable();
      t.pushCode(`${s}.$parent = ${n};`), t.pushCode(`${s}.$root = ${n}.$root;`);
    }
    t.pushCode(`switch(${e}) {`);
    for (const n in this.options.choices) {
      const r = parseInt(n, 10), o = this.options.choices[r];
      t.pushCode(`case ${r}:`), this.generateChoiceCase(t, this.varName, o), t.pushCode("break;");
    }
    t.pushCode("default:"), this.options.defaultChoice ? this.generateChoiceCase(t, this.varName, this.options.defaultChoice) : t.generateError(`"Met undefined tag value " + ${e} + " at choice"`), t.pushCode("}"), this.varName && t.useContextVariables && (t.pushCode(`delete ${s}.$parent;`), t.pushCode(`delete ${s}.$root;`));
  }
  generateNest(t) {
    const e = t.generateVariable(this.varName);
    if (this.options.type instanceof K) {
      if (this.varName && (t.pushCode(`${e} = {};`), t.useContextVariables)) {
        const s = t.generateVariable();
        t.pushCode(`${e}.$parent = ${s};`), t.pushCode(`${e}.$root = ${s}.$root;`);
      }
      t.pushPath(this.varName), this.options.type.generate(t), t.popPath(this.varName), this.varName && t.useContextVariables && t.useContextVariables && (t.pushCode(`delete ${e}.$parent;`), t.pushCode(`delete ${e}.$root;`));
    } else if (ut.has(this.options.type)) {
      const s = t.generateTmpVariable();
      if (t.pushCode(`var ${s} = ${jt + this.options.type}(offset, {`), t.useContextVariables) {
        const n = t.generateVariable();
        t.pushCode(`$parent: ${n},`), t.pushCode(`$root: ${n}.$root,`);
      }
      t.pushCode("});"), t.pushCode(`${e} = ${s}.result; offset = ${s}.offset;`), this.options.type !== this.alias && t.addReference(this.options.type);
    }
  }
  generateWrapper(t) {
    const e = t.generateVariable(this.varName), s = t.generateTmpVariable();
    if (typeof this.options.readUntil == "function") {
      const d = this.options.readUntil, h = t.generateTmpVariable(), l = t.generateTmpVariable();
      t.pushCode(`var ${h} = offset;`), t.pushCode(`var ${l} = 0;`), t.pushCode("while (offset < buffer.length) {"), t.pushCode(`${l} = dataView.getUint8(offset);`);
      const f = t.addImport(d);
      t.pushCode(`if (${f}.call(${t.generateVariable()}, ${l}, buffer.subarray(offset))) break;`), t.pushCode("offset += 1;"), t.pushCode("}"), t.pushCode(`${s} = buffer.subarray(${h}, offset);`);
    } else if (this.options.readUntil === "eof")
      t.pushCode(`${s} = buffer.subarray(offset);`);
    else {
      const d = t.generateOption(this.options.length);
      t.pushCode(`${s} = buffer.subarray(offset, offset + ${d});`), t.pushCode(`offset += ${d};`);
    }
    this.options.clone && t.pushCode(`${s} = buffer.constructor.from(${s});`);
    const n = t.generateTmpVariable(), r = t.generateTmpVariable(), o = t.generateTmpVariable(), a = t.addImport(this.options.wrapper);
    if (t.pushCode(`${s} = ${a}.call(this, ${s}).subarray(0);`), t.pushCode(`var ${n} = buffer;`), t.pushCode(`var ${r} = offset;`), t.pushCode(`var ${o} = dataView;`), t.pushCode(`buffer = ${s};`), t.pushCode("offset = 0;"), t.pushCode("dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.length);"), this.options.type instanceof K)
      this.varName && t.pushCode(`${e} = {};`), t.pushPath(this.varName), this.options.type.generate(t), t.popPath(this.varName);
    else if (ut.has(this.options.type)) {
      const d = t.generateTmpVariable();
      t.pushCode(`var ${d} = ${jt + this.options.type}(0);`), t.pushCode(`${e} = ${d}.result;`), this.options.type !== this.alias && t.addReference(this.options.type);
    }
    t.pushCode(`buffer = ${n};`), t.pushCode(`dataView = ${o};`), t.pushCode(`offset = ${r};`);
  }
  generateFormatter(t, e, s) {
    if (typeof s == "function") {
      const n = t.addImport(s);
      t.pushCode(`${e} = ${n}.call(${t.generateVariable()}, ${e});`);
    }
  }
  generatePointer(t) {
    const e = this.options.type, s = t.generateOption(this.options.offset), n = t.generateTmpVariable(), r = t.generateVariable(this.varName);
    if (t.pushCode(`var ${n} = offset;`), t.pushCode(`offset = ${s};`), this.options.type instanceof K) {
      if (t.pushCode(`${r} = {};`), t.useContextVariables) {
        const o = t.generateVariable();
        t.pushCode(`${r}.$parent = ${o};`), t.pushCode(`${r}.$root = ${o}.$root;`);
      }
      t.pushPath(this.varName), this.options.type.generate(t), t.popPath(this.varName), t.useContextVariables && (t.pushCode(`delete ${r}.$parent;`), t.pushCode(`delete ${r}.$root;`));
    } else if (ut.has(this.options.type)) {
      const o = t.generateTmpVariable();
      if (t.pushCode(`var ${o} = ${jt + this.options.type}(offset, {`), t.useContextVariables) {
        const a = t.generateVariable();
        t.pushCode(`$parent: ${a},`), t.pushCode(`$root: ${a}.$root,`);
      }
      t.pushCode("});"), t.pushCode(`${r} = ${o}.result; offset = ${o}.offset;`), this.options.type !== this.alias && t.addReference(this.options.type);
    } else if (Object.keys(ft).indexOf(this.options.type) >= 0) {
      const o = vi[e], a = ki[e];
      t.pushCode(`${r} = dataView.get${o}(offset, ${a});`), t.pushCode(`offset += ${ft[e]};`);
    }
    t.pushCode(`offset = ${n};`);
  }
  generateSaveOffset(t) {
    const e = t.generateVariable(this.varName);
    t.pushCode(`${e} = offset`);
  }
}
(function(i) {
  if (i.TextEncoder && i.TextDecoder)
    return !1;
  function t(s = "utf-8") {
    if (s !== "utf-8")
      throw new RangeError(`Failed to construct 'TextEncoder': The encoding label provided ('${s}') is invalid.`);
  }
  Object.defineProperty(t.prototype, "encoding", {
    value: "utf-8"
  }), t.prototype.encode = function(s, n = { stream: !1 }) {
    if (n.stream)
      throw new Error("Failed to encode: the 'stream' option is unsupported.");
    let r = 0;
    const o = s.length;
    let a = 0, d = Math.max(32, o + (o >> 1) + 7), h = new Uint8Array(d >> 3 << 3);
    for (; r < o; ) {
      let l = s.charCodeAt(r++);
      if (l >= 55296 && l <= 56319) {
        if (r < o) {
          const f = s.charCodeAt(r);
          (f & 64512) === 56320 && (++r, l = ((l & 1023) << 10) + (f & 1023) + 65536);
        }
        if (l >= 55296 && l <= 56319)
          continue;
      }
      if (a + 4 > h.length) {
        d += 8, d *= 1 + r / s.length * 2, d = d >> 3 << 3;
        const f = new Uint8Array(d);
        f.set(h), h = f;
      }
      if ((l & 4294967168) === 0) {
        h[a++] = l;
        continue;
      } else if ((l & 4294965248) === 0)
        h[a++] = l >> 6 & 31 | 192;
      else if ((l & 4294901760) === 0)
        h[a++] = l >> 12 & 15 | 224, h[a++] = l >> 6 & 63 | 128;
      else if ((l & 4292870144) === 0)
        h[a++] = l >> 18 & 7 | 240, h[a++] = l >> 12 & 63 | 128, h[a++] = l >> 6 & 63 | 128;
      else
        continue;
      h[a++] = l & 63 | 128;
    }
    return h.slice(0, a);
  };
  function e(s = "utf-8", n = { fatal: !1 }) {
    if (s !== "utf-8")
      throw new RangeError(`Failed to construct 'TextDecoder': The encoding label provided ('${s}') is invalid.`);
    if (n.fatal)
      throw new Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
  }
  Object.defineProperty(e.prototype, "encoding", {
    value: "utf-8"
  }), Object.defineProperty(e.prototype, "fatal", { value: !1 }), Object.defineProperty(e.prototype, "ignoreBOM", {
    value: !1
  }), e.prototype.decode = function(s, n = { stream: !1 }) {
    if (n.stream)
      throw new Error("Failed to decode: the 'stream' option is unsupported.");
    const r = new Uint8Array(s);
    let o = 0;
    const a = r.length, d = [];
    for (; o < a; ) {
      const h = r[o++];
      if (h === 0)
        break;
      if ((h & 128) === 0)
        d.push(h);
      else if ((h & 224) === 192) {
        const l = r[o++] & 63;
        d.push((h & 31) << 6 | l);
      } else if ((h & 240) === 224) {
        const l = r[o++] & 63, f = r[o++] & 63;
        d.push((h & 31) << 12 | l << 6 | f);
      } else if ((h & 248) === 240) {
        const l = r[o++] & 63, f = r[o++] & 63, u = r[o++] & 63;
        let c = (h & 7) << 18 | l << 12 | f << 6 | u;
        c > 65535 && (c -= 65536, d.push(c >>> 10 & 1023 | 55296), c = 56320 | c & 1023), d.push(c);
      }
    }
    return String.fromCharCode.apply(null, d);
  }, i.TextEncoder = t, i.TextDecoder = e;
})(typeof window < "u" ? window : typeof self < "u" ? self : globalThis);
function mn(i, t = "utf8") {
  return new TextDecoder(t).decode(i);
}
const Ya = new TextEncoder();
function ja(i) {
  return Ya.encode(i);
}
const Ga = 1024 * 8, Ja = (() => {
  const i = new Uint8Array(4), t = new Uint32Array(i.buffer);
  return !((t[0] = 1) & i[0]);
})(), gs = {
  int8: globalThis.Int8Array,
  uint8: globalThis.Uint8Array,
  int16: globalThis.Int16Array,
  uint16: globalThis.Uint16Array,
  int32: globalThis.Int32Array,
  uint32: globalThis.Uint32Array,
  uint64: globalThis.BigUint64Array,
  int64: globalThis.BigInt64Array,
  float32: globalThis.Float32Array,
  float64: globalThis.Float64Array
};
class Hs {
  constructor(t = Ga, e = {}) {
    let s = !1;
    typeof t == "number" ? t = new ArrayBuffer(t) : (s = !0, this.lastWrittenByte = t.byteLength);
    const n = e.offset ? e.offset >>> 0 : 0, r = t.byteLength - n;
    let o = n;
    (ArrayBuffer.isView(t) || t instanceof Hs) && (t.byteLength !== t.buffer.byteLength && (o = t.byteOffset + n), t = t.buffer), s ? this.lastWrittenByte = r : this.lastWrittenByte = 0, this.buffer = t, this.length = r, this.byteLength = r, this.byteOffset = o, this.offset = 0, this.littleEndian = !0, this._data = new DataView(this.buffer, o, r), this._mark = 0, this._marks = [];
  }
  available(t = 1) {
    return this.offset + t <= this.length;
  }
  isLittleEndian() {
    return this.littleEndian;
  }
  setLittleEndian() {
    return this.littleEndian = !0, this;
  }
  isBigEndian() {
    return !this.littleEndian;
  }
  setBigEndian() {
    return this.littleEndian = !1, this;
  }
  skip(t = 1) {
    return this.offset += t, this;
  }
  back(t = 1) {
    return this.offset -= t, this;
  }
  seek(t) {
    return this.offset = t, this;
  }
  mark() {
    return this._mark = this.offset, this;
  }
  reset() {
    return this.offset = this._mark, this;
  }
  pushMark() {
    return this._marks.push(this.offset), this;
  }
  popMark() {
    const t = this._marks.pop();
    if (t === void 0)
      throw new Error("Mark stack empty");
    return this.seek(t), this;
  }
  rewind() {
    return this.offset = 0, this;
  }
  ensureAvailable(t = 1) {
    if (!this.available(t)) {
      const s = (this.offset + t) * 2, n = new Uint8Array(s);
      n.set(new Uint8Array(this.buffer)), this.buffer = n.buffer, this.length = this.byteLength = s, this._data = new DataView(this.buffer);
    }
    return this;
  }
  readBoolean() {
    return this.readUint8() !== 0;
  }
  readInt8() {
    return this._data.getInt8(this.offset++);
  }
  readUint8() {
    return this._data.getUint8(this.offset++);
  }
  readByte() {
    return this.readUint8();
  }
  readBytes(t = 1) {
    return this.readArray(t, "uint8");
  }
  readArray(t, e) {
    const s = gs[e].BYTES_PER_ELEMENT * t, n = this.byteOffset + this.offset, r = this.buffer.slice(n, n + s);
    if (this.littleEndian === Ja && e !== "uint8" && e !== "int8") {
      const a = new Uint8Array(this.buffer.slice(n, n + s));
      a.reverse();
      const d = new gs[e](a.buffer);
      return this.offset += s, d.reverse(), d;
    }
    const o = new gs[e](r);
    return this.offset += s, o;
  }
  readInt16() {
    const t = this._data.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, t;
  }
  readUint16() {
    const t = this._data.getUint16(this.offset, this.littleEndian);
    return this.offset += 2, t;
  }
  readInt32() {
    const t = this._data.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, t;
  }
  readUint32() {
    const t = this._data.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, t;
  }
  readFloat32() {
    const t = this._data.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, t;
  }
  readFloat64() {
    const t = this._data.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, t;
  }
  readBigInt64() {
    const t = this._data.getBigInt64(this.offset, this.littleEndian);
    return this.offset += 8, t;
  }
  readBigUint64() {
    const t = this._data.getBigUint64(this.offset, this.littleEndian);
    return this.offset += 8, t;
  }
  readChar() {
    return String.fromCharCode(this.readInt8());
  }
  readChars(t = 1) {
    let e = "";
    for (let s = 0; s < t; s++)
      e += this.readChar();
    return e;
  }
  readUtf8(t = 1) {
    return mn(this.readBytes(t));
  }
  decodeText(t = 1, e = "utf-8") {
    return mn(this.readBytes(t), e);
  }
  writeBoolean(t) {
    return this.writeUint8(t ? 255 : 0), this;
  }
  writeInt8(t) {
    return this.ensureAvailable(1), this._data.setInt8(this.offset++, t), this._updateLastWrittenByte(), this;
  }
  writeUint8(t) {
    return this.ensureAvailable(1), this._data.setUint8(this.offset++, t), this._updateLastWrittenByte(), this;
  }
  writeByte(t) {
    return this.writeUint8(t);
  }
  writeBytes(t) {
    this.ensureAvailable(t.length);
    for (let e = 0; e < t.length; e++)
      this._data.setUint8(this.offset++, t[e]);
    return this._updateLastWrittenByte(), this;
  }
  writeInt16(t) {
    return this.ensureAvailable(2), this._data.setInt16(this.offset, t, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  writeUint16(t) {
    return this.ensureAvailable(2), this._data.setUint16(this.offset, t, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  writeInt32(t) {
    return this.ensureAvailable(4), this._data.setInt32(this.offset, t, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  writeUint32(t) {
    return this.ensureAvailable(4), this._data.setUint32(this.offset, t, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  writeFloat32(t) {
    return this.ensureAvailable(4), this._data.setFloat32(this.offset, t, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  writeFloat64(t) {
    return this.ensureAvailable(8), this._data.setFloat64(this.offset, t, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  writeBigInt64(t) {
    return this.ensureAvailable(8), this._data.setBigInt64(this.offset, t, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  writeBigUint64(t) {
    return this.ensureAvailable(8), this._data.setBigUint64(this.offset, t, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  writeChar(t) {
    return this.writeUint8(t.charCodeAt(0));
  }
  writeChars(t) {
    for (let e = 0; e < t.length; e++)
      this.writeUint8(t.charCodeAt(e));
    return this;
  }
  writeUtf8(t) {
    return this.writeBytes(ja(t));
  }
  toArray() {
    return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
  }
  _updateLastWrittenByte() {
    this.offset > this.lastWrittenByte && (this.lastWrittenByte = this.offset);
  }
}
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const Ka = 4, gn = 0, yn = 1, Qa = 2;
function ke(i) {
  let t = i.length;
  for (; --t >= 0; )
    i[t] = 0;
}
const to = 0, Mr = 1, eo = 2, io = 3, so = 258, qs = 29, ii = 256, Ze = ii + 1 + qs, xe = 30, Xs = 19, Ar = 2 * Ze + 1, Kt = 15, ys = 16, no = 7, Ys = 256, vr = 16, kr = 17, Sr = 18, Us = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]), Ni = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]), ro = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]), Er = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), ao = 512, Tt = new Array((Ze + 2) * 2);
ke(Tt);
const Oe = new Array(xe * 2);
ke(Oe);
const We = new Array(ao);
ke(We);
const He = new Array(so - io + 1);
ke(He);
const js = new Array(qs);
ke(js);
const Ii = new Array(xe);
ke(Ii);
function _s(i, t, e, s, n) {
  this.static_tree = i, this.extra_bits = t, this.extra_base = e, this.elems = s, this.max_length = n, this.has_stree = i && i.length;
}
let Cr, zr, Tr;
function bs(i, t) {
  this.dyn_tree = i, this.max_code = 0, this.stat_desc = t;
}
const Fr = (i) => i < 256 ? We[i] : We[256 + (i >>> 7)], qe = (i, t) => {
  i.pending_buf[i.pending++] = t & 255, i.pending_buf[i.pending++] = t >>> 8 & 255;
}, X = (i, t, e) => {
  i.bi_valid > ys - e ? (i.bi_buf |= t << i.bi_valid & 65535, qe(i, i.bi_buf), i.bi_buf = t >> ys - i.bi_valid, i.bi_valid += e - ys) : (i.bi_buf |= t << i.bi_valid & 65535, i.bi_valid += e);
}, mt = (i, t, e) => {
  X(i, e[t * 2], e[t * 2 + 1]);
}, Nr = (i, t) => {
  let e = 0;
  do
    e |= i & 1, i >>>= 1, e <<= 1;
  while (--t > 0);
  return e >>> 1;
}, oo = (i) => {
  i.bi_valid === 16 ? (qe(i, i.bi_buf), i.bi_buf = 0, i.bi_valid = 0) : i.bi_valid >= 8 && (i.pending_buf[i.pending++] = i.bi_buf & 255, i.bi_buf >>= 8, i.bi_valid -= 8);
}, ho = (i, t) => {
  const e = t.dyn_tree, s = t.max_code, n = t.stat_desc.static_tree, r = t.stat_desc.has_stree, o = t.stat_desc.extra_bits, a = t.stat_desc.extra_base, d = t.stat_desc.max_length;
  let h, l, f, u, c, m, b = 0;
  for (u = 0; u <= Kt; u++)
    i.bl_count[u] = 0;
  for (e[i.heap[i.heap_max] * 2 + 1] = 0, h = i.heap_max + 1; h < Ar; h++)
    l = i.heap[h], u = e[e[l * 2 + 1] * 2 + 1] + 1, u > d && (u = d, b++), e[l * 2 + 1] = u, !(l > s) && (i.bl_count[u]++, c = 0, l >= a && (c = o[l - a]), m = e[l * 2], i.opt_len += m * (u + c), r && (i.static_len += m * (n[l * 2 + 1] + c)));
  if (b !== 0) {
    do {
      for (u = d - 1; i.bl_count[u] === 0; )
        u--;
      i.bl_count[u]--, i.bl_count[u + 1] += 2, i.bl_count[d]--, b -= 2;
    } while (b > 0);
    for (u = d; u !== 0; u--)
      for (l = i.bl_count[u]; l !== 0; )
        f = i.heap[--h], !(f > s) && (e[f * 2 + 1] !== u && (i.opt_len += (u - e[f * 2 + 1]) * e[f * 2], e[f * 2 + 1] = u), l--);
  }
}, $r = (i, t, e) => {
  const s = new Array(Kt + 1);
  let n = 0, r, o;
  for (r = 1; r <= Kt; r++)
    n = n + e[r - 1] << 1, s[r] = n;
  for (o = 0; o <= t; o++) {
    let a = i[o * 2 + 1];
    a !== 0 && (i[o * 2] = Nr(s[a]++, a));
  }
}, lo = () => {
  let i, t, e, s, n;
  const r = new Array(Kt + 1);
  for (e = 0, s = 0; s < qs - 1; s++)
    for (js[s] = e, i = 0; i < 1 << Us[s]; i++)
      He[e++] = s;
  for (He[e - 1] = s, n = 0, s = 0; s < 16; s++)
    for (Ii[s] = n, i = 0; i < 1 << Ni[s]; i++)
      We[n++] = s;
  for (n >>= 7; s < xe; s++)
    for (Ii[s] = n << 7, i = 0; i < 1 << Ni[s] - 7; i++)
      We[256 + n++] = s;
  for (t = 0; t <= Kt; t++)
    r[t] = 0;
  for (i = 0; i <= 143; )
    Tt[i * 2 + 1] = 8, i++, r[8]++;
  for (; i <= 255; )
    Tt[i * 2 + 1] = 9, i++, r[9]++;
  for (; i <= 279; )
    Tt[i * 2 + 1] = 7, i++, r[7]++;
  for (; i <= 287; )
    Tt[i * 2 + 1] = 8, i++, r[8]++;
  for ($r(Tt, Ze + 1, r), i = 0; i < xe; i++)
    Oe[i * 2 + 1] = 5, Oe[i * 2] = Nr(i, 5);
  Cr = new _s(Tt, Us, ii + 1, Ze, Kt), zr = new _s(Oe, Ni, 0, xe, Kt), Tr = new _s(new Array(0), ro, 0, Xs, no);
}, Ur = (i) => {
  let t;
  for (t = 0; t < Ze; t++)
    i.dyn_ltree[t * 2] = 0;
  for (t = 0; t < xe; t++)
    i.dyn_dtree[t * 2] = 0;
  for (t = 0; t < Xs; t++)
    i.bl_tree[t * 2] = 0;
  i.dyn_ltree[Ys * 2] = 1, i.opt_len = i.static_len = 0, i.sym_next = i.matches = 0;
}, Rr = (i) => {
  i.bi_valid > 8 ? qe(i, i.bi_buf) : i.bi_valid > 0 && (i.pending_buf[i.pending++] = i.bi_buf), i.bi_buf = 0, i.bi_valid = 0;
}, _n = (i, t, e, s) => {
  const n = t * 2, r = e * 2;
  return i[n] < i[r] || i[n] === i[r] && s[t] <= s[e];
}, xs = (i, t, e) => {
  const s = i.heap[e];
  let n = e << 1;
  for (; n <= i.heap_len && (n < i.heap_len && _n(t, i.heap[n + 1], i.heap[n], i.depth) && n++, !_n(t, s, i.heap[n], i.depth)); )
    i.heap[e] = i.heap[n], e = n, n <<= 1;
  i.heap[e] = s;
}, bn = (i, t, e) => {
  let s, n, r = 0, o, a;
  if (i.sym_next !== 0)
    do
      s = i.pending_buf[i.sym_buf + r++] & 255, s += (i.pending_buf[i.sym_buf + r++] & 255) << 8, n = i.pending_buf[i.sym_buf + r++], s === 0 ? mt(i, n, t) : (o = He[n], mt(i, o + ii + 1, t), a = Us[o], a !== 0 && (n -= js[o], X(i, n, a)), s--, o = Fr(s), mt(i, o, e), a = Ni[o], a !== 0 && (s -= Ii[o], X(i, s, a)));
    while (r < i.sym_next);
  mt(i, Ys, t);
}, Rs = (i, t) => {
  const e = t.dyn_tree, s = t.stat_desc.static_tree, n = t.stat_desc.has_stree, r = t.stat_desc.elems;
  let o, a, d = -1, h;
  for (i.heap_len = 0, i.heap_max = Ar, o = 0; o < r; o++)
    e[o * 2] !== 0 ? (i.heap[++i.heap_len] = d = o, i.depth[o] = 0) : e[o * 2 + 1] = 0;
  for (; i.heap_len < 2; )
    h = i.heap[++i.heap_len] = d < 2 ? ++d : 0, e[h * 2] = 1, i.depth[h] = 0, i.opt_len--, n && (i.static_len -= s[h * 2 + 1]);
  for (t.max_code = d, o = i.heap_len >> 1; o >= 1; o--)
    xs(i, e, o);
  h = r;
  do
    o = i.heap[1], i.heap[1] = i.heap[i.heap_len--], xs(i, e, 1), a = i.heap[1], i.heap[--i.heap_max] = o, i.heap[--i.heap_max] = a, e[h * 2] = e[o * 2] + e[a * 2], i.depth[h] = (i.depth[o] >= i.depth[a] ? i.depth[o] : i.depth[a]) + 1, e[o * 2 + 1] = e[a * 2 + 1] = h, i.heap[1] = h++, xs(i, e, 1);
  while (i.heap_len >= 2);
  i.heap[--i.heap_max] = i.heap[1], ho(i, t), $r(e, d, i.bl_count);
}, xn = (i, t, e) => {
  let s, n = -1, r, o = t[0 * 2 + 1], a = 0, d = 7, h = 4;
  for (o === 0 && (d = 138, h = 3), t[(e + 1) * 2 + 1] = 65535, s = 0; s <= e; s++)
    r = o, o = t[(s + 1) * 2 + 1], !(++a < d && r === o) && (a < h ? i.bl_tree[r * 2] += a : r !== 0 ? (r !== n && i.bl_tree[r * 2]++, i.bl_tree[vr * 2]++) : a <= 10 ? i.bl_tree[kr * 2]++ : i.bl_tree[Sr * 2]++, a = 0, n = r, o === 0 ? (d = 138, h = 3) : r === o ? (d = 6, h = 3) : (d = 7, h = 4));
}, wn = (i, t, e) => {
  let s, n = -1, r, o = t[0 * 2 + 1], a = 0, d = 7, h = 4;
  for (o === 0 && (d = 138, h = 3), s = 0; s <= e; s++)
    if (r = o, o = t[(s + 1) * 2 + 1], !(++a < d && r === o)) {
      if (a < h)
        do
          mt(i, r, i.bl_tree);
        while (--a !== 0);
      else
        r !== 0 ? (r !== n && (mt(i, r, i.bl_tree), a--), mt(i, vr, i.bl_tree), X(i, a - 3, 2)) : a <= 10 ? (mt(i, kr, i.bl_tree), X(i, a - 3, 3)) : (mt(i, Sr, i.bl_tree), X(i, a - 11, 7));
      a = 0, n = r, o === 0 ? (d = 138, h = 3) : r === o ? (d = 6, h = 3) : (d = 7, h = 4);
    }
}, uo = (i) => {
  let t;
  for (xn(i, i.dyn_ltree, i.l_desc.max_code), xn(i, i.dyn_dtree, i.d_desc.max_code), Rs(i, i.bl_desc), t = Xs - 1; t >= 3 && i.bl_tree[Er[t] * 2 + 1] === 0; t--)
    ;
  return i.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
}, fo = (i, t, e, s) => {
  let n;
  for (X(i, t - 257, 5), X(i, e - 1, 5), X(i, s - 4, 4), n = 0; n < s; n++)
    X(i, i.bl_tree[Er[n] * 2 + 1], 3);
  wn(i, i.dyn_ltree, t - 1), wn(i, i.dyn_dtree, e - 1);
}, co = (i) => {
  let t = 4093624447, e;
  for (e = 0; e <= 31; e++, t >>>= 1)
    if (t & 1 && i.dyn_ltree[e * 2] !== 0)
      return gn;
  if (i.dyn_ltree[9 * 2] !== 0 || i.dyn_ltree[10 * 2] !== 0 || i.dyn_ltree[13 * 2] !== 0)
    return yn;
  for (e = 32; e < ii; e++)
    if (i.dyn_ltree[e * 2] !== 0)
      return yn;
  return gn;
};
let Mn = !1;
const po = (i) => {
  Mn || (lo(), Mn = !0), i.l_desc = new bs(i.dyn_ltree, Cr), i.d_desc = new bs(i.dyn_dtree, zr), i.bl_desc = new bs(i.bl_tree, Tr), i.bi_buf = 0, i.bi_valid = 0, Ur(i);
}, Br = (i, t, e, s) => {
  X(i, (to << 1) + (s ? 1 : 0), 3), Rr(i), qe(i, e), qe(i, ~e), e && i.pending_buf.set(i.window.subarray(t, t + e), i.pending), i.pending += e;
}, mo = (i) => {
  X(i, Mr << 1, 3), mt(i, Ys, Tt), oo(i);
}, go = (i, t, e, s) => {
  let n, r, o = 0;
  i.level > 0 ? (i.strm.data_type === Qa && (i.strm.data_type = co(i)), Rs(i, i.l_desc), Rs(i, i.d_desc), o = uo(i), n = i.opt_len + 3 + 7 >>> 3, r = i.static_len + 3 + 7 >>> 3, r <= n && (n = r)) : n = r = e + 5, e + 4 <= n && t !== -1 ? Br(i, t, e, s) : i.strategy === Ka || r === n ? (X(i, (Mr << 1) + (s ? 1 : 0), 3), bn(i, Tt, Oe)) : (X(i, (eo << 1) + (s ? 1 : 0), 3), fo(i, i.l_desc.max_code + 1, i.d_desc.max_code + 1, o + 1), bn(i, i.dyn_ltree, i.dyn_dtree)), Ur(i), s && Rr(i);
}, yo = (i, t, e) => (i.pending_buf[i.sym_buf + i.sym_next++] = t, i.pending_buf[i.sym_buf + i.sym_next++] = t >> 8, i.pending_buf[i.sym_buf + i.sym_next++] = e, t === 0 ? i.dyn_ltree[e * 2]++ : (i.matches++, t--, i.dyn_ltree[(He[e] + ii + 1) * 2]++, i.dyn_dtree[Fr(t) * 2]++), i.sym_next === i.sym_end);
var _o = po, bo = Br, xo = go, wo = yo, Mo = mo, Ao = {
  _tr_init: _o,
  _tr_stored_block: bo,
  _tr_flush_block: xo,
  _tr_tally: wo,
  _tr_align: Mo
};
const vo = (i, t, e, s) => {
  let n = i & 65535 | 0, r = i >>> 16 & 65535 | 0, o = 0;
  for (; e !== 0; ) {
    o = e > 2e3 ? 2e3 : e, e -= o;
    do
      n = n + t[s++] | 0, r = r + n | 0;
    while (--o);
    n %= 65521, r %= 65521;
  }
  return n | r << 16 | 0;
};
var Xe = vo;
const ko = () => {
  let i, t = [];
  for (var e = 0; e < 256; e++) {
    i = e;
    for (var s = 0; s < 8; s++)
      i = i & 1 ? 3988292384 ^ i >>> 1 : i >>> 1;
    t[e] = i;
  }
  return t;
}, So = new Uint32Array(ko()), Eo = (i, t, e, s) => {
  const n = So, r = s + e;
  i ^= -1;
  for (let o = s; o < r; o++)
    i = i >>> 8 ^ n[(i ^ t[o]) & 255];
  return i ^ -1;
};
var V = Eo, Me = {
  2: "need dictionary",
  1: "stream end",
  0: "",
  "-1": "file error",
  "-2": "stream error",
  "-3": "data error",
  "-4": "insufficient memory",
  "-5": "buffer error",
  "-6": "incompatible version"
}, si = {
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  Z_BINARY: 0,
  Z_TEXT: 1,
  Z_UNKNOWN: 2,
  Z_DEFLATED: 8
};
const { _tr_init: Co, _tr_stored_block: Bs, _tr_flush_block: zo, _tr_tally: Zt, _tr_align: To } = Ao, {
  Z_NO_FLUSH: Wt,
  Z_PARTIAL_FLUSH: Fo,
  Z_FULL_FLUSH: No,
  Z_FINISH: st,
  Z_BLOCK: An,
  Z_OK: P,
  Z_STREAM_END: vn,
  Z_STREAM_ERROR: yt,
  Z_DATA_ERROR: $o,
  Z_BUF_ERROR: ws,
  Z_DEFAULT_COMPRESSION: Uo,
  Z_FILTERED: Ro,
  Z_HUFFMAN_ONLY: Si,
  Z_RLE: Bo,
  Z_FIXED: Io,
  Z_DEFAULT_STRATEGY: Do,
  Z_UNKNOWN: Oo,
  Z_DEFLATED: Wi
} = si, Lo = 9, Vo = 15, Po = 8, Zo = 29, Wo = 256, Is = Wo + 1 + Zo, Ho = 30, qo = 19, Xo = 2 * Is + 1, Yo = 15, N = 3, Vt = 258, _t = Vt + N + 1, jo = 32, Ae = 42, Gs = 57, Ds = 69, Os = 73, Ls = 91, Vs = 103, Qt = 113, Be = 666, H = 1, Se = 2, se = 3, Ee = 4, Go = 3, te = (i, t) => (i.msg = Me[t], t), kn = (i) => i * 2 - (i > 4 ? 9 : 0), Lt = (i) => {
  let t = i.length;
  for (; --t >= 0; )
    i[t] = 0;
}, Jo = (i) => {
  let t, e, s, n = i.w_size;
  t = i.hash_size, s = t;
  do
    e = i.head[--s], i.head[s] = e >= n ? e - n : 0;
  while (--t);
  t = n, s = t;
  do
    e = i.prev[--s], i.prev[s] = e >= n ? e - n : 0;
  while (--t);
};
let Ko = (i, t, e) => (t << i.hash_shift ^ e) & i.hash_mask, Ht = Ko;
const Q = (i) => {
  const t = i.state;
  let e = t.pending;
  e > i.avail_out && (e = i.avail_out), e !== 0 && (i.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + e), i.next_out), i.next_out += e, t.pending_out += e, i.total_out += e, i.avail_out -= e, t.pending -= e, t.pending === 0 && (t.pending_out = 0));
}, et = (i, t) => {
  zo(i, i.block_start >= 0 ? i.block_start : -1, i.strstart - i.block_start, t), i.block_start = i.strstart, Q(i.strm);
}, U = (i, t) => {
  i.pending_buf[i.pending++] = t;
}, Ne = (i, t) => {
  i.pending_buf[i.pending++] = t >>> 8 & 255, i.pending_buf[i.pending++] = t & 255;
}, Ps = (i, t, e, s) => {
  let n = i.avail_in;
  return n > s && (n = s), n === 0 ? 0 : (i.avail_in -= n, t.set(i.input.subarray(i.next_in, i.next_in + n), e), i.state.wrap === 1 ? i.adler = Xe(i.adler, t, n, e) : i.state.wrap === 2 && (i.adler = V(i.adler, t, n, e)), i.next_in += n, i.total_in += n, n);
}, Ir = (i, t) => {
  let e = i.max_chain_length, s = i.strstart, n, r, o = i.prev_length, a = i.nice_match;
  const d = i.strstart > i.w_size - _t ? i.strstart - (i.w_size - _t) : 0, h = i.window, l = i.w_mask, f = i.prev, u = i.strstart + Vt;
  let c = h[s + o - 1], m = h[s + o];
  i.prev_length >= i.good_match && (e >>= 2), a > i.lookahead && (a = i.lookahead);
  do
    if (n = t, !(h[n + o] !== m || h[n + o - 1] !== c || h[n] !== h[s] || h[++n] !== h[s + 1])) {
      s += 2, n++;
      do
        ;
      while (h[++s] === h[++n] && h[++s] === h[++n] && h[++s] === h[++n] && h[++s] === h[++n] && h[++s] === h[++n] && h[++s] === h[++n] && h[++s] === h[++n] && h[++s] === h[++n] && s < u);
      if (r = Vt - (u - s), s = u - Vt, r > o) {
        if (i.match_start = t, o = r, r >= a)
          break;
        c = h[s + o - 1], m = h[s + o];
      }
    }
  while ((t = f[t & l]) > d && --e !== 0);
  return o <= i.lookahead ? o : i.lookahead;
}, ve = (i) => {
  const t = i.w_size;
  let e, s, n;
  do {
    if (s = i.window_size - i.lookahead - i.strstart, i.strstart >= t + (t - _t) && (i.window.set(i.window.subarray(t, t + t - s), 0), i.match_start -= t, i.strstart -= t, i.block_start -= t, i.insert > i.strstart && (i.insert = i.strstart), Jo(i), s += t), i.strm.avail_in === 0)
      break;
    if (e = Ps(i.strm, i.window, i.strstart + i.lookahead, s), i.lookahead += e, i.lookahead + i.insert >= N)
      for (n = i.strstart - i.insert, i.ins_h = i.window[n], i.ins_h = Ht(i, i.ins_h, i.window[n + 1]); i.insert && (i.ins_h = Ht(i, i.ins_h, i.window[n + N - 1]), i.prev[n & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = n, n++, i.insert--, !(i.lookahead + i.insert < N)); )
        ;
  } while (i.lookahead < _t && i.strm.avail_in !== 0);
}, Dr = (i, t) => {
  let e = i.pending_buf_size - 5 > i.w_size ? i.w_size : i.pending_buf_size - 5, s, n, r, o = 0, a = i.strm.avail_in;
  do {
    if (s = 65535, r = i.bi_valid + 42 >> 3, i.strm.avail_out < r || (r = i.strm.avail_out - r, n = i.strstart - i.block_start, s > n + i.strm.avail_in && (s = n + i.strm.avail_in), s > r && (s = r), s < e && (s === 0 && t !== st || t === Wt || s !== n + i.strm.avail_in)))
      break;
    o = t === st && s === n + i.strm.avail_in ? 1 : 0, Bs(i, 0, 0, o), i.pending_buf[i.pending - 4] = s, i.pending_buf[i.pending - 3] = s >> 8, i.pending_buf[i.pending - 2] = ~s, i.pending_buf[i.pending - 1] = ~s >> 8, Q(i.strm), n && (n > s && (n = s), i.strm.output.set(i.window.subarray(i.block_start, i.block_start + n), i.strm.next_out), i.strm.next_out += n, i.strm.avail_out -= n, i.strm.total_out += n, i.block_start += n, s -= n), s && (Ps(i.strm, i.strm.output, i.strm.next_out, s), i.strm.next_out += s, i.strm.avail_out -= s, i.strm.total_out += s);
  } while (o === 0);
  return a -= i.strm.avail_in, a && (a >= i.w_size ? (i.matches = 2, i.window.set(i.strm.input.subarray(i.strm.next_in - i.w_size, i.strm.next_in), 0), i.strstart = i.w_size, i.insert = i.strstart) : (i.window_size - i.strstart <= a && (i.strstart -= i.w_size, i.window.set(i.window.subarray(i.w_size, i.w_size + i.strstart), 0), i.matches < 2 && i.matches++, i.insert > i.strstart && (i.insert = i.strstart)), i.window.set(i.strm.input.subarray(i.strm.next_in - a, i.strm.next_in), i.strstart), i.strstart += a, i.insert += a > i.w_size - i.insert ? i.w_size - i.insert : a), i.block_start = i.strstart), i.high_water < i.strstart && (i.high_water = i.strstart), o ? Ee : t !== Wt && t !== st && i.strm.avail_in === 0 && i.strstart === i.block_start ? Se : (r = i.window_size - i.strstart, i.strm.avail_in > r && i.block_start >= i.w_size && (i.block_start -= i.w_size, i.strstart -= i.w_size, i.window.set(i.window.subarray(i.w_size, i.w_size + i.strstart), 0), i.matches < 2 && i.matches++, r += i.w_size, i.insert > i.strstart && (i.insert = i.strstart)), r > i.strm.avail_in && (r = i.strm.avail_in), r && (Ps(i.strm, i.window, i.strstart, r), i.strstart += r, i.insert += r > i.w_size - i.insert ? i.w_size - i.insert : r), i.high_water < i.strstart && (i.high_water = i.strstart), r = i.bi_valid + 42 >> 3, r = i.pending_buf_size - r > 65535 ? 65535 : i.pending_buf_size - r, e = r > i.w_size ? i.w_size : r, n = i.strstart - i.block_start, (n >= e || (n || t === st) && t !== Wt && i.strm.avail_in === 0 && n <= r) && (s = n > r ? r : n, o = t === st && i.strm.avail_in === 0 && s === n ? 1 : 0, Bs(i, i.block_start, s, o), i.block_start += s, Q(i.strm)), o ? se : H);
}, Ms = (i, t) => {
  let e, s;
  for (; ; ) {
    if (i.lookahead < _t) {
      if (ve(i), i.lookahead < _t && t === Wt)
        return H;
      if (i.lookahead === 0)
        break;
    }
    if (e = 0, i.lookahead >= N && (i.ins_h = Ht(i, i.ins_h, i.window[i.strstart + N - 1]), e = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart), e !== 0 && i.strstart - e <= i.w_size - _t && (i.match_length = Ir(i, e)), i.match_length >= N)
      if (s = Zt(i, i.strstart - i.match_start, i.match_length - N), i.lookahead -= i.match_length, i.match_length <= i.max_lazy_match && i.lookahead >= N) {
        i.match_length--;
        do
          i.strstart++, i.ins_h = Ht(i, i.ins_h, i.window[i.strstart + N - 1]), e = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart;
        while (--i.match_length !== 0);
        i.strstart++;
      } else
        i.strstart += i.match_length, i.match_length = 0, i.ins_h = i.window[i.strstart], i.ins_h = Ht(i, i.ins_h, i.window[i.strstart + 1]);
    else
      s = Zt(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++;
    if (s && (et(i, !1), i.strm.avail_out === 0))
      return H;
  }
  return i.insert = i.strstart < N - 1 ? i.strstart : N - 1, t === st ? (et(i, !0), i.strm.avail_out === 0 ? se : Ee) : i.sym_next && (et(i, !1), i.strm.avail_out === 0) ? H : Se;
}, ge = (i, t) => {
  let e, s, n;
  for (; ; ) {
    if (i.lookahead < _t) {
      if (ve(i), i.lookahead < _t && t === Wt)
        return H;
      if (i.lookahead === 0)
        break;
    }
    if (e = 0, i.lookahead >= N && (i.ins_h = Ht(i, i.ins_h, i.window[i.strstart + N - 1]), e = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart), i.prev_length = i.match_length, i.prev_match = i.match_start, i.match_length = N - 1, e !== 0 && i.prev_length < i.max_lazy_match && i.strstart - e <= i.w_size - _t && (i.match_length = Ir(i, e), i.match_length <= 5 && (i.strategy === Ro || i.match_length === N && i.strstart - i.match_start > 4096) && (i.match_length = N - 1)), i.prev_length >= N && i.match_length <= i.prev_length) {
      n = i.strstart + i.lookahead - N, s = Zt(i, i.strstart - 1 - i.prev_match, i.prev_length - N), i.lookahead -= i.prev_length - 1, i.prev_length -= 2;
      do
        ++i.strstart <= n && (i.ins_h = Ht(i, i.ins_h, i.window[i.strstart + N - 1]), e = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart);
      while (--i.prev_length !== 0);
      if (i.match_available = 0, i.match_length = N - 1, i.strstart++, s && (et(i, !1), i.strm.avail_out === 0))
        return H;
    } else if (i.match_available) {
      if (s = Zt(i, 0, i.window[i.strstart - 1]), s && et(i, !1), i.strstart++, i.lookahead--, i.strm.avail_out === 0)
        return H;
    } else
      i.match_available = 1, i.strstart++, i.lookahead--;
  }
  return i.match_available && (s = Zt(i, 0, i.window[i.strstart - 1]), i.match_available = 0), i.insert = i.strstart < N - 1 ? i.strstart : N - 1, t === st ? (et(i, !0), i.strm.avail_out === 0 ? se : Ee) : i.sym_next && (et(i, !1), i.strm.avail_out === 0) ? H : Se;
}, Qo = (i, t) => {
  let e, s, n, r;
  const o = i.window;
  for (; ; ) {
    if (i.lookahead <= Vt) {
      if (ve(i), i.lookahead <= Vt && t === Wt)
        return H;
      if (i.lookahead === 0)
        break;
    }
    if (i.match_length = 0, i.lookahead >= N && i.strstart > 0 && (n = i.strstart - 1, s = o[n], s === o[++n] && s === o[++n] && s === o[++n])) {
      r = i.strstart + Vt;
      do
        ;
      while (s === o[++n] && s === o[++n] && s === o[++n] && s === o[++n] && s === o[++n] && s === o[++n] && s === o[++n] && s === o[++n] && n < r);
      i.match_length = Vt - (r - n), i.match_length > i.lookahead && (i.match_length = i.lookahead);
    }
    if (i.match_length >= N ? (e = Zt(i, 1, i.match_length - N), i.lookahead -= i.match_length, i.strstart += i.match_length, i.match_length = 0) : (e = Zt(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++), e && (et(i, !1), i.strm.avail_out === 0))
      return H;
  }
  return i.insert = 0, t === st ? (et(i, !0), i.strm.avail_out === 0 ? se : Ee) : i.sym_next && (et(i, !1), i.strm.avail_out === 0) ? H : Se;
}, th = (i, t) => {
  let e;
  for (; ; ) {
    if (i.lookahead === 0 && (ve(i), i.lookahead === 0)) {
      if (t === Wt)
        return H;
      break;
    }
    if (i.match_length = 0, e = Zt(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++, e && (et(i, !1), i.strm.avail_out === 0))
      return H;
  }
  return i.insert = 0, t === st ? (et(i, !0), i.strm.avail_out === 0 ? se : Ee) : i.sym_next && (et(i, !1), i.strm.avail_out === 0) ? H : Se;
};
function pt(i, t, e, s, n) {
  this.good_length = i, this.max_lazy = t, this.nice_length = e, this.max_chain = s, this.func = n;
}
const Ie = [
  new pt(0, 0, 0, 0, Dr),
  new pt(4, 4, 8, 4, Ms),
  new pt(4, 5, 16, 8, Ms),
  new pt(4, 6, 32, 32, Ms),
  new pt(4, 4, 16, 16, ge),
  new pt(8, 16, 32, 32, ge),
  new pt(8, 16, 128, 128, ge),
  new pt(8, 32, 128, 256, ge),
  new pt(32, 128, 258, 1024, ge),
  new pt(32, 258, 258, 4096, ge)
], eh = (i) => {
  i.window_size = 2 * i.w_size, Lt(i.head), i.max_lazy_match = Ie[i.level].max_lazy, i.good_match = Ie[i.level].good_length, i.nice_match = Ie[i.level].nice_length, i.max_chain_length = Ie[i.level].max_chain, i.strstart = 0, i.block_start = 0, i.lookahead = 0, i.insert = 0, i.match_length = i.prev_length = N - 1, i.match_available = 0, i.ins_h = 0;
};
function ih() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Wi, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(Xo * 2), this.dyn_dtree = new Uint16Array((2 * Ho + 1) * 2), this.bl_tree = new Uint16Array((2 * qo + 1) * 2), Lt(this.dyn_ltree), Lt(this.dyn_dtree), Lt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(Yo + 1), this.heap = new Uint16Array(2 * Is + 1), Lt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Is + 1), Lt(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const ni = (i) => {
  if (!i)
    return 1;
  const t = i.state;
  return !t || t.strm !== i || t.status !== Ae && t.status !== Gs && t.status !== Ds && t.status !== Os && t.status !== Ls && t.status !== Vs && t.status !== Qt && t.status !== Be ? 1 : 0;
}, Or = (i) => {
  if (ni(i))
    return te(i, yt);
  i.total_in = i.total_out = 0, i.data_type = Oo;
  const t = i.state;
  return t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap === 2 ? Gs : t.wrap ? Ae : Qt, i.adler = t.wrap === 2 ? 0 : 1, t.last_flush = -2, Co(t), P;
}, Lr = (i) => {
  const t = Or(i);
  return t === P && eh(i.state), t;
}, sh = (i, t) => ni(i) || i.state.wrap !== 2 ? yt : (i.state.gzhead = t, P), Vr = (i, t, e, s, n, r) => {
  if (!i)
    return yt;
  let o = 1;
  if (t === Uo && (t = 6), s < 0 ? (o = 0, s = -s) : s > 15 && (o = 2, s -= 16), n < 1 || n > Lo || e !== Wi || s < 8 || s > 15 || t < 0 || t > 9 || r < 0 || r > Io || s === 8 && o !== 1)
    return te(i, yt);
  s === 8 && (s = 9);
  const a = new ih();
  return i.state = a, a.strm = i, a.status = Ae, a.wrap = o, a.gzhead = null, a.w_bits = s, a.w_size = 1 << a.w_bits, a.w_mask = a.w_size - 1, a.hash_bits = n + 7, a.hash_size = 1 << a.hash_bits, a.hash_mask = a.hash_size - 1, a.hash_shift = ~~((a.hash_bits + N - 1) / N), a.window = new Uint8Array(a.w_size * 2), a.head = new Uint16Array(a.hash_size), a.prev = new Uint16Array(a.w_size), a.lit_bufsize = 1 << n + 6, a.pending_buf_size = a.lit_bufsize * 4, a.pending_buf = new Uint8Array(a.pending_buf_size), a.sym_buf = a.lit_bufsize, a.sym_end = (a.lit_bufsize - 1) * 3, a.level = t, a.strategy = r, a.method = e, Lr(i);
}, nh = (i, t) => Vr(i, t, Wi, Vo, Po, Do), rh = (i, t) => {
  if (ni(i) || t > An || t < 0)
    return i ? te(i, yt) : yt;
  const e = i.state;
  if (!i.output || i.avail_in !== 0 && !i.input || e.status === Be && t !== st)
    return te(i, i.avail_out === 0 ? ws : yt);
  const s = e.last_flush;
  if (e.last_flush = t, e.pending !== 0) {
    if (Q(i), i.avail_out === 0)
      return e.last_flush = -1, P;
  } else if (i.avail_in === 0 && kn(t) <= kn(s) && t !== st)
    return te(i, ws);
  if (e.status === Be && i.avail_in !== 0)
    return te(i, ws);
  if (e.status === Ae && e.wrap === 0 && (e.status = Qt), e.status === Ae) {
    let n = Wi + (e.w_bits - 8 << 4) << 8, r = -1;
    if (e.strategy >= Si || e.level < 2 ? r = 0 : e.level < 6 ? r = 1 : e.level === 6 ? r = 2 : r = 3, n |= r << 6, e.strstart !== 0 && (n |= jo), n += 31 - n % 31, Ne(e, n), e.strstart !== 0 && (Ne(e, i.adler >>> 16), Ne(e, i.adler & 65535)), i.adler = 1, e.status = Qt, Q(i), e.pending !== 0)
      return e.last_flush = -1, P;
  }
  if (e.status === Gs) {
    if (i.adler = 0, U(e, 31), U(e, 139), U(e, 8), e.gzhead)
      U(
        e,
        (e.gzhead.text ? 1 : 0) + (e.gzhead.hcrc ? 2 : 0) + (e.gzhead.extra ? 4 : 0) + (e.gzhead.name ? 8 : 0) + (e.gzhead.comment ? 16 : 0)
      ), U(e, e.gzhead.time & 255), U(e, e.gzhead.time >> 8 & 255), U(e, e.gzhead.time >> 16 & 255), U(e, e.gzhead.time >> 24 & 255), U(e, e.level === 9 ? 2 : e.strategy >= Si || e.level < 2 ? 4 : 0), U(e, e.gzhead.os & 255), e.gzhead.extra && e.gzhead.extra.length && (U(e, e.gzhead.extra.length & 255), U(e, e.gzhead.extra.length >> 8 & 255)), e.gzhead.hcrc && (i.adler = V(i.adler, e.pending_buf, e.pending, 0)), e.gzindex = 0, e.status = Ds;
    else if (U(e, 0), U(e, 0), U(e, 0), U(e, 0), U(e, 0), U(e, e.level === 9 ? 2 : e.strategy >= Si || e.level < 2 ? 4 : 0), U(e, Go), e.status = Qt, Q(i), e.pending !== 0)
      return e.last_flush = -1, P;
  }
  if (e.status === Ds) {
    if (e.gzhead.extra) {
      let n = e.pending, r = (e.gzhead.extra.length & 65535) - e.gzindex;
      for (; e.pending + r > e.pending_buf_size; ) {
        let a = e.pending_buf_size - e.pending;
        if (e.pending_buf.set(e.gzhead.extra.subarray(e.gzindex, e.gzindex + a), e.pending), e.pending = e.pending_buf_size, e.gzhead.hcrc && e.pending > n && (i.adler = V(i.adler, e.pending_buf, e.pending - n, n)), e.gzindex += a, Q(i), e.pending !== 0)
          return e.last_flush = -1, P;
        n = 0, r -= a;
      }
      let o = new Uint8Array(e.gzhead.extra);
      e.pending_buf.set(o.subarray(e.gzindex, e.gzindex + r), e.pending), e.pending += r, e.gzhead.hcrc && e.pending > n && (i.adler = V(i.adler, e.pending_buf, e.pending - n, n)), e.gzindex = 0;
    }
    e.status = Os;
  }
  if (e.status === Os) {
    if (e.gzhead.name) {
      let n = e.pending, r;
      do {
        if (e.pending === e.pending_buf_size) {
          if (e.gzhead.hcrc && e.pending > n && (i.adler = V(i.adler, e.pending_buf, e.pending - n, n)), Q(i), e.pending !== 0)
            return e.last_flush = -1, P;
          n = 0;
        }
        e.gzindex < e.gzhead.name.length ? r = e.gzhead.name.charCodeAt(e.gzindex++) & 255 : r = 0, U(e, r);
      } while (r !== 0);
      e.gzhead.hcrc && e.pending > n && (i.adler = V(i.adler, e.pending_buf, e.pending - n, n)), e.gzindex = 0;
    }
    e.status = Ls;
  }
  if (e.status === Ls) {
    if (e.gzhead.comment) {
      let n = e.pending, r;
      do {
        if (e.pending === e.pending_buf_size) {
          if (e.gzhead.hcrc && e.pending > n && (i.adler = V(i.adler, e.pending_buf, e.pending - n, n)), Q(i), e.pending !== 0)
            return e.last_flush = -1, P;
          n = 0;
        }
        e.gzindex < e.gzhead.comment.length ? r = e.gzhead.comment.charCodeAt(e.gzindex++) & 255 : r = 0, U(e, r);
      } while (r !== 0);
      e.gzhead.hcrc && e.pending > n && (i.adler = V(i.adler, e.pending_buf, e.pending - n, n));
    }
    e.status = Vs;
  }
  if (e.status === Vs) {
    if (e.gzhead.hcrc) {
      if (e.pending + 2 > e.pending_buf_size && (Q(i), e.pending !== 0))
        return e.last_flush = -1, P;
      U(e, i.adler & 255), U(e, i.adler >> 8 & 255), i.adler = 0;
    }
    if (e.status = Qt, Q(i), e.pending !== 0)
      return e.last_flush = -1, P;
  }
  if (i.avail_in !== 0 || e.lookahead !== 0 || t !== Wt && e.status !== Be) {
    let n = e.level === 0 ? Dr(e, t) : e.strategy === Si ? th(e, t) : e.strategy === Bo ? Qo(e, t) : Ie[e.level].func(e, t);
    if ((n === se || n === Ee) && (e.status = Be), n === H || n === se)
      return i.avail_out === 0 && (e.last_flush = -1), P;
    if (n === Se && (t === Fo ? To(e) : t !== An && (Bs(e, 0, 0, !1), t === No && (Lt(e.head), e.lookahead === 0 && (e.strstart = 0, e.block_start = 0, e.insert = 0))), Q(i), i.avail_out === 0))
      return e.last_flush = -1, P;
  }
  return t !== st ? P : e.wrap <= 0 ? vn : (e.wrap === 2 ? (U(e, i.adler & 255), U(e, i.adler >> 8 & 255), U(e, i.adler >> 16 & 255), U(e, i.adler >> 24 & 255), U(e, i.total_in & 255), U(e, i.total_in >> 8 & 255), U(e, i.total_in >> 16 & 255), U(e, i.total_in >> 24 & 255)) : (Ne(e, i.adler >>> 16), Ne(e, i.adler & 65535)), Q(i), e.wrap > 0 && (e.wrap = -e.wrap), e.pending !== 0 ? P : vn);
}, ah = (i) => {
  if (ni(i))
    return yt;
  const t = i.state.status;
  return i.state = null, t === Qt ? te(i, $o) : P;
}, oh = (i, t) => {
  let e = t.length;
  if (ni(i))
    return yt;
  const s = i.state, n = s.wrap;
  if (n === 2 || n === 1 && s.status !== Ae || s.lookahead)
    return yt;
  if (n === 1 && (i.adler = Xe(i.adler, t, e, 0)), s.wrap = 0, e >= s.w_size) {
    n === 0 && (Lt(s.head), s.strstart = 0, s.block_start = 0, s.insert = 0);
    let d = new Uint8Array(s.w_size);
    d.set(t.subarray(e - s.w_size, e), 0), t = d, e = s.w_size;
  }
  const r = i.avail_in, o = i.next_in, a = i.input;
  for (i.avail_in = e, i.next_in = 0, i.input = t, ve(s); s.lookahead >= N; ) {
    let d = s.strstart, h = s.lookahead - (N - 1);
    do
      s.ins_h = Ht(s, s.ins_h, s.window[d + N - 1]), s.prev[d & s.w_mask] = s.head[s.ins_h], s.head[s.ins_h] = d, d++;
    while (--h);
    s.strstart = d, s.lookahead = N - 1, ve(s);
  }
  return s.strstart += s.lookahead, s.block_start = s.strstart, s.insert = s.lookahead, s.lookahead = 0, s.match_length = s.prev_length = N - 1, s.match_available = 0, i.next_in = o, i.input = a, i.avail_in = r, s.wrap = n, P;
};
var hh = nh, lh = Vr, dh = Lr, uh = Or, fh = sh, ch = rh, ph = ah, mh = oh, gh = "pako deflate (from Nodeca project)", Le = {
  deflateInit: hh,
  deflateInit2: lh,
  deflateReset: dh,
  deflateResetKeep: uh,
  deflateSetHeader: fh,
  deflate: ch,
  deflateEnd: ph,
  deflateSetDictionary: mh,
  deflateInfo: gh
};
const yh = (i, t) => Object.prototype.hasOwnProperty.call(i, t);
var _h = function(i) {
  const t = Array.prototype.slice.call(arguments, 1);
  for (; t.length; ) {
    const e = t.shift();
    if (!!e) {
      if (typeof e != "object")
        throw new TypeError(e + "must be non-object");
      for (const s in e)
        yh(e, s) && (i[s] = e[s]);
    }
  }
  return i;
}, bh = (i) => {
  let t = 0;
  for (let s = 0, n = i.length; s < n; s++)
    t += i[s].length;
  const e = new Uint8Array(t);
  for (let s = 0, n = 0, r = i.length; s < r; s++) {
    let o = i[s];
    e.set(o, n), n += o.length;
  }
  return e;
}, Hi = {
  assign: _h,
  flattenChunks: bh
};
let Pr = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  Pr = !1;
}
const Ye = new Uint8Array(256);
for (let i = 0; i < 256; i++)
  Ye[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
Ye[254] = Ye[254] = 1;
var xh = (i) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(i);
  let t, e, s, n, r, o = i.length, a = 0;
  for (n = 0; n < o; n++)
    e = i.charCodeAt(n), (e & 64512) === 55296 && n + 1 < o && (s = i.charCodeAt(n + 1), (s & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (s - 56320), n++)), a += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
  for (t = new Uint8Array(a), r = 0, n = 0; r < a; n++)
    e = i.charCodeAt(n), (e & 64512) === 55296 && n + 1 < o && (s = i.charCodeAt(n + 1), (s & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (s - 56320), n++)), e < 128 ? t[r++] = e : e < 2048 ? (t[r++] = 192 | e >>> 6, t[r++] = 128 | e & 63) : e < 65536 ? (t[r++] = 224 | e >>> 12, t[r++] = 128 | e >>> 6 & 63, t[r++] = 128 | e & 63) : (t[r++] = 240 | e >>> 18, t[r++] = 128 | e >>> 12 & 63, t[r++] = 128 | e >>> 6 & 63, t[r++] = 128 | e & 63);
  return t;
};
const wh = (i, t) => {
  if (t < 65534 && i.subarray && Pr)
    return String.fromCharCode.apply(null, i.length === t ? i : i.subarray(0, t));
  let e = "";
  for (let s = 0; s < t; s++)
    e += String.fromCharCode(i[s]);
  return e;
};
var Mh = (i, t) => {
  const e = t || i.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(i.subarray(0, t));
  let s, n;
  const r = new Array(e * 2);
  for (n = 0, s = 0; s < e; ) {
    let o = i[s++];
    if (o < 128) {
      r[n++] = o;
      continue;
    }
    let a = Ye[o];
    if (a > 4) {
      r[n++] = 65533, s += a - 1;
      continue;
    }
    for (o &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && s < e; )
      o = o << 6 | i[s++] & 63, a--;
    if (a > 1) {
      r[n++] = 65533;
      continue;
    }
    o < 65536 ? r[n++] = o : (o -= 65536, r[n++] = 55296 | o >> 10 & 1023, r[n++] = 56320 | o & 1023);
  }
  return wh(r, n);
}, Ah = (i, t) => {
  t = t || i.length, t > i.length && (t = i.length);
  let e = t - 1;
  for (; e >= 0 && (i[e] & 192) === 128; )
    e--;
  return e < 0 || e === 0 ? t : e + Ye[i[e]] > t ? e : t;
}, je = {
  string2buf: xh,
  buf2string: Mh,
  utf8border: Ah
};
function vh() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var Zr = vh;
const Wr = Object.prototype.toString, {
  Z_NO_FLUSH: kh,
  Z_SYNC_FLUSH: Sh,
  Z_FULL_FLUSH: Eh,
  Z_FINISH: Ch,
  Z_OK: Di,
  Z_STREAM_END: zh,
  Z_DEFAULT_COMPRESSION: Th,
  Z_DEFAULT_STRATEGY: Fh,
  Z_DEFLATED: Nh
} = si;
function Js(i) {
  this.options = Hi.assign({
    level: Th,
    method: Nh,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Fh
  }, i || {});
  let t = this.options;
  t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Zr(), this.strm.avail_out = 0;
  let e = Le.deflateInit2(
    this.strm,
    t.level,
    t.method,
    t.windowBits,
    t.memLevel,
    t.strategy
  );
  if (e !== Di)
    throw new Error(Me[e]);
  if (t.header && Le.deflateSetHeader(this.strm, t.header), t.dictionary) {
    let s;
    if (typeof t.dictionary == "string" ? s = je.string2buf(t.dictionary) : Wr.call(t.dictionary) === "[object ArrayBuffer]" ? s = new Uint8Array(t.dictionary) : s = t.dictionary, e = Le.deflateSetDictionary(this.strm, s), e !== Di)
      throw new Error(Me[e]);
    this._dict_set = !0;
  }
}
Js.prototype.push = function(i, t) {
  const e = this.strm, s = this.options.chunkSize;
  let n, r;
  if (this.ended)
    return !1;
  for (t === ~~t ? r = t : r = t === !0 ? Ch : kh, typeof i == "string" ? e.input = je.string2buf(i) : Wr.call(i) === "[object ArrayBuffer]" ? e.input = new Uint8Array(i) : e.input = i, e.next_in = 0, e.avail_in = e.input.length; ; ) {
    if (e.avail_out === 0 && (e.output = new Uint8Array(s), e.next_out = 0, e.avail_out = s), (r === Sh || r === Eh) && e.avail_out <= 6) {
      this.onData(e.output.subarray(0, e.next_out)), e.avail_out = 0;
      continue;
    }
    if (n = Le.deflate(e, r), n === zh)
      return e.next_out > 0 && this.onData(e.output.subarray(0, e.next_out)), n = Le.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === Di;
    if (e.avail_out === 0) {
      this.onData(e.output);
      continue;
    }
    if (r > 0 && e.next_out > 0) {
      this.onData(e.output.subarray(0, e.next_out)), e.avail_out = 0;
      continue;
    }
    if (e.avail_in === 0)
      break;
  }
  return !0;
};
Js.prototype.onData = function(i) {
  this.chunks.push(i);
};
Js.prototype.onEnd = function(i) {
  i === Di && (this.result = Hi.flattenChunks(this.chunks)), this.chunks = [], this.err = i, this.msg = this.strm.msg;
};
const Ei = 16209, $h = 16191;
var Uh = function(t, e) {
  let s, n, r, o, a, d, h, l, f, u, c, m, b, x, y, E, C, M, S, p, g, A, w, _;
  const k = t.state;
  s = t.next_in, w = t.input, n = s + (t.avail_in - 5), r = t.next_out, _ = t.output, o = r - (e - t.avail_out), a = r + (t.avail_out - 257), d = k.dmax, h = k.wsize, l = k.whave, f = k.wnext, u = k.window, c = k.hold, m = k.bits, b = k.lencode, x = k.distcode, y = (1 << k.lenbits) - 1, E = (1 << k.distbits) - 1;
  t:
    do {
      m < 15 && (c += w[s++] << m, m += 8, c += w[s++] << m, m += 8), C = b[c & y];
      e:
        for (; ; ) {
          if (M = C >>> 24, c >>>= M, m -= M, M = C >>> 16 & 255, M === 0)
            _[r++] = C & 65535;
          else if (M & 16) {
            S = C & 65535, M &= 15, M && (m < M && (c += w[s++] << m, m += 8), S += c & (1 << M) - 1, c >>>= M, m -= M), m < 15 && (c += w[s++] << m, m += 8, c += w[s++] << m, m += 8), C = x[c & E];
            i:
              for (; ; ) {
                if (M = C >>> 24, c >>>= M, m -= M, M = C >>> 16 & 255, M & 16) {
                  if (p = C & 65535, M &= 15, m < M && (c += w[s++] << m, m += 8, m < M && (c += w[s++] << m, m += 8)), p += c & (1 << M) - 1, p > d) {
                    t.msg = "invalid distance too far back", k.mode = Ei;
                    break t;
                  }
                  if (c >>>= M, m -= M, M = r - o, p > M) {
                    if (M = p - M, M > l && k.sane) {
                      t.msg = "invalid distance too far back", k.mode = Ei;
                      break t;
                    }
                    if (g = 0, A = u, f === 0) {
                      if (g += h - M, M < S) {
                        S -= M;
                        do
                          _[r++] = u[g++];
                        while (--M);
                        g = r - p, A = _;
                      }
                    } else if (f < M) {
                      if (g += h + f - M, M -= f, M < S) {
                        S -= M;
                        do
                          _[r++] = u[g++];
                        while (--M);
                        if (g = 0, f < S) {
                          M = f, S -= M;
                          do
                            _[r++] = u[g++];
                          while (--M);
                          g = r - p, A = _;
                        }
                      }
                    } else if (g += f - M, M < S) {
                      S -= M;
                      do
                        _[r++] = u[g++];
                      while (--M);
                      g = r - p, A = _;
                    }
                    for (; S > 2; )
                      _[r++] = A[g++], _[r++] = A[g++], _[r++] = A[g++], S -= 3;
                    S && (_[r++] = A[g++], S > 1 && (_[r++] = A[g++]));
                  } else {
                    g = r - p;
                    do
                      _[r++] = _[g++], _[r++] = _[g++], _[r++] = _[g++], S -= 3;
                    while (S > 2);
                    S && (_[r++] = _[g++], S > 1 && (_[r++] = _[g++]));
                  }
                } else if ((M & 64) === 0) {
                  C = x[(C & 65535) + (c & (1 << M) - 1)];
                  continue i;
                } else {
                  t.msg = "invalid distance code", k.mode = Ei;
                  break t;
                }
                break;
              }
          } else if ((M & 64) === 0) {
            C = b[(C & 65535) + (c & (1 << M) - 1)];
            continue e;
          } else if (M & 32) {
            k.mode = $h;
            break t;
          } else {
            t.msg = "invalid literal/length code", k.mode = Ei;
            break t;
          }
          break;
        }
    } while (s < n && r < a);
  S = m >> 3, s -= S, m -= S << 3, c &= (1 << m) - 1, t.next_in = s, t.next_out = r, t.avail_in = s < n ? 5 + (n - s) : 5 - (s - n), t.avail_out = r < a ? 257 + (a - r) : 257 - (r - a), k.hold = c, k.bits = m;
};
const ye = 15, Sn = 852, En = 592, Cn = 0, As = 1, zn = 2, Rh = new Uint16Array([
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), Bh = new Uint8Array([
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), Ih = new Uint16Array([
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), Dh = new Uint8Array([
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), Oh = (i, t, e, s, n, r, o, a) => {
  const d = a.bits;
  let h = 0, l = 0, f = 0, u = 0, c = 0, m = 0, b = 0, x = 0, y = 0, E = 0, C, M, S, p, g, A = null, w;
  const _ = new Uint16Array(ye + 1), k = new Uint16Array(ye + 1);
  let z = null, F, I, R;
  for (h = 0; h <= ye; h++)
    _[h] = 0;
  for (l = 0; l < s; l++)
    _[t[e + l]]++;
  for (c = d, u = ye; u >= 1 && _[u] === 0; u--)
    ;
  if (c > u && (c = u), u === 0)
    return n[r++] = 1 << 24 | 64 << 16 | 0, n[r++] = 1 << 24 | 64 << 16 | 0, a.bits = 1, 0;
  for (f = 1; f < u && _[f] === 0; f++)
    ;
  for (c < f && (c = f), x = 1, h = 1; h <= ye; h++)
    if (x <<= 1, x -= _[h], x < 0)
      return -1;
  if (x > 0 && (i === Cn || u !== 1))
    return -1;
  for (k[1] = 0, h = 1; h < ye; h++)
    k[h + 1] = k[h] + _[h];
  for (l = 0; l < s; l++)
    t[e + l] !== 0 && (o[k[t[e + l]]++] = l);
  if (i === Cn ? (A = z = o, w = 20) : i === As ? (A = Rh, z = Bh, w = 257) : (A = Ih, z = Dh, w = 0), E = 0, l = 0, h = f, g = r, m = c, b = 0, S = -1, y = 1 << c, p = y - 1, i === As && y > Sn || i === zn && y > En)
    return 1;
  for (; ; ) {
    F = h - b, o[l] + 1 < w ? (I = 0, R = o[l]) : o[l] >= w ? (I = z[o[l] - w], R = A[o[l] - w]) : (I = 32 + 64, R = 0), C = 1 << h - b, M = 1 << m, f = M;
    do
      M -= C, n[g + (E >> b) + M] = F << 24 | I << 16 | R | 0;
    while (M !== 0);
    for (C = 1 << h - 1; E & C; )
      C >>= 1;
    if (C !== 0 ? (E &= C - 1, E += C) : E = 0, l++, --_[h] === 0) {
      if (h === u)
        break;
      h = t[e + o[l]];
    }
    if (h > c && (E & p) !== S) {
      for (b === 0 && (b = c), g += f, m = h - b, x = 1 << m; m + b < u && (x -= _[m + b], !(x <= 0)); )
        m++, x <<= 1;
      if (y += 1 << m, i === As && y > Sn || i === zn && y > En)
        return 1;
      S = E & p, n[S] = c << 24 | m << 16 | g - r | 0;
    }
  }
  return E !== 0 && (n[g + E] = h - b << 24 | 64 << 16 | 0), a.bits = c, 0;
};
var Ve = Oh;
const Lh = 0, Hr = 1, qr = 2, {
  Z_FINISH: Tn,
  Z_BLOCK: Vh,
  Z_TREES: Ci,
  Z_OK: ne,
  Z_STREAM_END: Ph,
  Z_NEED_DICT: Zh,
  Z_STREAM_ERROR: nt,
  Z_DATA_ERROR: Xr,
  Z_MEM_ERROR: Yr,
  Z_BUF_ERROR: Wh,
  Z_DEFLATED: Fn
} = si, qi = 16180, Nn = 16181, $n = 16182, Un = 16183, Rn = 16184, Bn = 16185, In = 16186, Dn = 16187, On = 16188, Ln = 16189, Oi = 16190, Et = 16191, vs = 16192, Vn = 16193, ks = 16194, Pn = 16195, Zn = 16196, Wn = 16197, Hn = 16198, zi = 16199, Ti = 16200, qn = 16201, Xn = 16202, Yn = 16203, jn = 16204, Gn = 16205, Ss = 16206, Jn = 16207, Kn = 16208, B = 16209, jr = 16210, Gr = 16211, Hh = 852, qh = 592, Xh = 15, Yh = Xh, Qn = (i) => (i >>> 24 & 255) + (i >>> 8 & 65280) + ((i & 65280) << 8) + ((i & 255) << 24);
function jh() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const re = (i) => {
  if (!i)
    return 1;
  const t = i.state;
  return !t || t.strm !== i || t.mode < qi || t.mode > Gr ? 1 : 0;
}, Jr = (i) => {
  if (re(i))
    return nt;
  const t = i.state;
  return i.total_in = i.total_out = t.total = 0, i.msg = "", t.wrap && (i.adler = t.wrap & 1), t.mode = qi, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(Hh), t.distcode = t.distdyn = new Int32Array(qh), t.sane = 1, t.back = -1, ne;
}, Kr = (i) => {
  if (re(i))
    return nt;
  const t = i.state;
  return t.wsize = 0, t.whave = 0, t.wnext = 0, Jr(i);
}, Qr = (i, t) => {
  let e;
  if (re(i))
    return nt;
  const s = i.state;
  return t < 0 ? (e = 0, t = -t) : (e = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? nt : (s.window !== null && s.wbits !== t && (s.window = null), s.wrap = e, s.wbits = t, Kr(i));
}, ta = (i, t) => {
  if (!i)
    return nt;
  const e = new jh();
  i.state = e, e.strm = i, e.window = null, e.mode = qi;
  const s = Qr(i, t);
  return s !== ne && (i.state = null), s;
}, Gh = (i) => ta(i, Yh);
let tr = !0, Es, Cs;
const Jh = (i) => {
  if (tr) {
    Es = new Int32Array(512), Cs = new Int32Array(32);
    let t = 0;
    for (; t < 144; )
      i.lens[t++] = 8;
    for (; t < 256; )
      i.lens[t++] = 9;
    for (; t < 280; )
      i.lens[t++] = 7;
    for (; t < 288; )
      i.lens[t++] = 8;
    for (Ve(Hr, i.lens, 0, 288, Es, 0, i.work, { bits: 9 }), t = 0; t < 32; )
      i.lens[t++] = 5;
    Ve(qr, i.lens, 0, 32, Cs, 0, i.work, { bits: 5 }), tr = !1;
  }
  i.lencode = Es, i.lenbits = 9, i.distcode = Cs, i.distbits = 5;
}, ea = (i, t, e, s) => {
  let n;
  const r = i.state;
  return r.window === null && (r.wsize = 1 << r.wbits, r.wnext = 0, r.whave = 0, r.window = new Uint8Array(r.wsize)), s >= r.wsize ? (r.window.set(t.subarray(e - r.wsize, e), 0), r.wnext = 0, r.whave = r.wsize) : (n = r.wsize - r.wnext, n > s && (n = s), r.window.set(t.subarray(e - s, e - s + n), r.wnext), s -= n, s ? (r.window.set(t.subarray(e - s, e), 0), r.wnext = s, r.whave = r.wsize) : (r.wnext += n, r.wnext === r.wsize && (r.wnext = 0), r.whave < r.wsize && (r.whave += n))), 0;
}, Kh = (i, t) => {
  let e, s, n, r, o, a, d, h, l, f, u, c, m, b, x = 0, y, E, C, M, S, p, g, A;
  const w = new Uint8Array(4);
  let _, k;
  const z = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  if (re(i) || !i.output || !i.input && i.avail_in !== 0)
    return nt;
  e = i.state, e.mode === Et && (e.mode = vs), o = i.next_out, n = i.output, d = i.avail_out, r = i.next_in, s = i.input, a = i.avail_in, h = e.hold, l = e.bits, f = a, u = d, A = ne;
  t:
    for (; ; )
      switch (e.mode) {
        case qi:
          if (e.wrap === 0) {
            e.mode = vs;
            break;
          }
          for (; l < 16; ) {
            if (a === 0)
              break t;
            a--, h += s[r++] << l, l += 8;
          }
          if (e.wrap & 2 && h === 35615) {
            e.wbits === 0 && (e.wbits = 15), e.check = 0, w[0] = h & 255, w[1] = h >>> 8 & 255, e.check = V(e.check, w, 2, 0), h = 0, l = 0, e.mode = Nn;
            break;
          }
          if (e.head && (e.head.done = !1), !(e.wrap & 1) || (((h & 255) << 8) + (h >> 8)) % 31) {
            i.msg = "incorrect header check", e.mode = B;
            break;
          }
          if ((h & 15) !== Fn) {
            i.msg = "unknown compression method", e.mode = B;
            break;
          }
          if (h >>>= 4, l -= 4, g = (h & 15) + 8, e.wbits === 0 && (e.wbits = g), g > 15 || g > e.wbits) {
            i.msg = "invalid window size", e.mode = B;
            break;
          }
          e.dmax = 1 << e.wbits, e.flags = 0, i.adler = e.check = 1, e.mode = h & 512 ? Ln : Et, h = 0, l = 0;
          break;
        case Nn:
          for (; l < 16; ) {
            if (a === 0)
              break t;
            a--, h += s[r++] << l, l += 8;
          }
          if (e.flags = h, (e.flags & 255) !== Fn) {
            i.msg = "unknown compression method", e.mode = B;
            break;
          }
          if (e.flags & 57344) {
            i.msg = "unknown header flags set", e.mode = B;
            break;
          }
          e.head && (e.head.text = h >> 8 & 1), e.flags & 512 && e.wrap & 4 && (w[0] = h & 255, w[1] = h >>> 8 & 255, e.check = V(e.check, w, 2, 0)), h = 0, l = 0, e.mode = $n;
        case $n:
          for (; l < 32; ) {
            if (a === 0)
              break t;
            a--, h += s[r++] << l, l += 8;
          }
          e.head && (e.head.time = h), e.flags & 512 && e.wrap & 4 && (w[0] = h & 255, w[1] = h >>> 8 & 255, w[2] = h >>> 16 & 255, w[3] = h >>> 24 & 255, e.check = V(e.check, w, 4, 0)), h = 0, l = 0, e.mode = Un;
        case Un:
          for (; l < 16; ) {
            if (a === 0)
              break t;
            a--, h += s[r++] << l, l += 8;
          }
          e.head && (e.head.xflags = h & 255, e.head.os = h >> 8), e.flags & 512 && e.wrap & 4 && (w[0] = h & 255, w[1] = h >>> 8 & 255, e.check = V(e.check, w, 2, 0)), h = 0, l = 0, e.mode = Rn;
        case Rn:
          if (e.flags & 1024) {
            for (; l < 16; ) {
              if (a === 0)
                break t;
              a--, h += s[r++] << l, l += 8;
            }
            e.length = h, e.head && (e.head.extra_len = h), e.flags & 512 && e.wrap & 4 && (w[0] = h & 255, w[1] = h >>> 8 & 255, e.check = V(e.check, w, 2, 0)), h = 0, l = 0;
          } else
            e.head && (e.head.extra = null);
          e.mode = Bn;
        case Bn:
          if (e.flags & 1024 && (c = e.length, c > a && (c = a), c && (e.head && (g = e.head.extra_len - e.length, e.head.extra || (e.head.extra = new Uint8Array(e.head.extra_len)), e.head.extra.set(
            s.subarray(
              r,
              r + c
            ),
            g
          )), e.flags & 512 && e.wrap & 4 && (e.check = V(e.check, s, c, r)), a -= c, r += c, e.length -= c), e.length))
            break t;
          e.length = 0, e.mode = In;
        case In:
          if (e.flags & 2048) {
            if (a === 0)
              break t;
            c = 0;
            do
              g = s[r + c++], e.head && g && e.length < 65536 && (e.head.name += String.fromCharCode(g));
            while (g && c < a);
            if (e.flags & 512 && e.wrap & 4 && (e.check = V(e.check, s, c, r)), a -= c, r += c, g)
              break t;
          } else
            e.head && (e.head.name = null);
          e.length = 0, e.mode = Dn;
        case Dn:
          if (e.flags & 4096) {
            if (a === 0)
              break t;
            c = 0;
            do
              g = s[r + c++], e.head && g && e.length < 65536 && (e.head.comment += String.fromCharCode(g));
            while (g && c < a);
            if (e.flags & 512 && e.wrap & 4 && (e.check = V(e.check, s, c, r)), a -= c, r += c, g)
              break t;
          } else
            e.head && (e.head.comment = null);
          e.mode = On;
        case On:
          if (e.flags & 512) {
            for (; l < 16; ) {
              if (a === 0)
                break t;
              a--, h += s[r++] << l, l += 8;
            }
            if (e.wrap & 4 && h !== (e.check & 65535)) {
              i.msg = "header crc mismatch", e.mode = B;
              break;
            }
            h = 0, l = 0;
          }
          e.head && (e.head.hcrc = e.flags >> 9 & 1, e.head.done = !0), i.adler = e.check = 0, e.mode = Et;
          break;
        case Ln:
          for (; l < 32; ) {
            if (a === 0)
              break t;
            a--, h += s[r++] << l, l += 8;
          }
          i.adler = e.check = Qn(h), h = 0, l = 0, e.mode = Oi;
        case Oi:
          if (e.havedict === 0)
            return i.next_out = o, i.avail_out = d, i.next_in = r, i.avail_in = a, e.hold = h, e.bits = l, Zh;
          i.adler = e.check = 1, e.mode = Et;
        case Et:
          if (t === Vh || t === Ci)
            break t;
        case vs:
          if (e.last) {
            h >>>= l & 7, l -= l & 7, e.mode = Ss;
            break;
          }
          for (; l < 3; ) {
            if (a === 0)
              break t;
            a--, h += s[r++] << l, l += 8;
          }
          switch (e.last = h & 1, h >>>= 1, l -= 1, h & 3) {
            case 0:
              e.mode = Vn;
              break;
            case 1:
              if (Jh(e), e.mode = zi, t === Ci) {
                h >>>= 2, l -= 2;
                break t;
              }
              break;
            case 2:
              e.mode = Zn;
              break;
            case 3:
              i.msg = "invalid block type", e.mode = B;
          }
          h >>>= 2, l -= 2;
          break;
        case Vn:
          for (h >>>= l & 7, l -= l & 7; l < 32; ) {
            if (a === 0)
              break t;
            a--, h += s[r++] << l, l += 8;
          }
          if ((h & 65535) !== (h >>> 16 ^ 65535)) {
            i.msg = "invalid stored block lengths", e.mode = B;
            break;
          }
          if (e.length = h & 65535, h = 0, l = 0, e.mode = ks, t === Ci)
            break t;
        case ks:
          e.mode = Pn;
        case Pn:
          if (c = e.length, c) {
            if (c > a && (c = a), c > d && (c = d), c === 0)
              break t;
            n.set(s.subarray(r, r + c), o), a -= c, r += c, d -= c, o += c, e.length -= c;
            break;
          }
          e.mode = Et;
          break;
        case Zn:
          for (; l < 14; ) {
            if (a === 0)
              break t;
            a--, h += s[r++] << l, l += 8;
          }
          if (e.nlen = (h & 31) + 257, h >>>= 5, l -= 5, e.ndist = (h & 31) + 1, h >>>= 5, l -= 5, e.ncode = (h & 15) + 4, h >>>= 4, l -= 4, e.nlen > 286 || e.ndist > 30) {
            i.msg = "too many length or distance symbols", e.mode = B;
            break;
          }
          e.have = 0, e.mode = Wn;
        case Wn:
          for (; e.have < e.ncode; ) {
            for (; l < 3; ) {
              if (a === 0)
                break t;
              a--, h += s[r++] << l, l += 8;
            }
            e.lens[z[e.have++]] = h & 7, h >>>= 3, l -= 3;
          }
          for (; e.have < 19; )
            e.lens[z[e.have++]] = 0;
          if (e.lencode = e.lendyn, e.lenbits = 7, _ = { bits: e.lenbits }, A = Ve(Lh, e.lens, 0, 19, e.lencode, 0, e.work, _), e.lenbits = _.bits, A) {
            i.msg = "invalid code lengths set", e.mode = B;
            break;
          }
          e.have = 0, e.mode = Hn;
        case Hn:
          for (; e.have < e.nlen + e.ndist; ) {
            for (; x = e.lencode[h & (1 << e.lenbits) - 1], y = x >>> 24, E = x >>> 16 & 255, C = x & 65535, !(y <= l); ) {
              if (a === 0)
                break t;
              a--, h += s[r++] << l, l += 8;
            }
            if (C < 16)
              h >>>= y, l -= y, e.lens[e.have++] = C;
            else {
              if (C === 16) {
                for (k = y + 2; l < k; ) {
                  if (a === 0)
                    break t;
                  a--, h += s[r++] << l, l += 8;
                }
                if (h >>>= y, l -= y, e.have === 0) {
                  i.msg = "invalid bit length repeat", e.mode = B;
                  break;
                }
                g = e.lens[e.have - 1], c = 3 + (h & 3), h >>>= 2, l -= 2;
              } else if (C === 17) {
                for (k = y + 3; l < k; ) {
                  if (a === 0)
                    break t;
                  a--, h += s[r++] << l, l += 8;
                }
                h >>>= y, l -= y, g = 0, c = 3 + (h & 7), h >>>= 3, l -= 3;
              } else {
                for (k = y + 7; l < k; ) {
                  if (a === 0)
                    break t;
                  a--, h += s[r++] << l, l += 8;
                }
                h >>>= y, l -= y, g = 0, c = 11 + (h & 127), h >>>= 7, l -= 7;
              }
              if (e.have + c > e.nlen + e.ndist) {
                i.msg = "invalid bit length repeat", e.mode = B;
                break;
              }
              for (; c--; )
                e.lens[e.have++] = g;
            }
          }
          if (e.mode === B)
            break;
          if (e.lens[256] === 0) {
            i.msg = "invalid code -- missing end-of-block", e.mode = B;
            break;
          }
          if (e.lenbits = 9, _ = { bits: e.lenbits }, A = Ve(Hr, e.lens, 0, e.nlen, e.lencode, 0, e.work, _), e.lenbits = _.bits, A) {
            i.msg = "invalid literal/lengths set", e.mode = B;
            break;
          }
          if (e.distbits = 6, e.distcode = e.distdyn, _ = { bits: e.distbits }, A = Ve(qr, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, _), e.distbits = _.bits, A) {
            i.msg = "invalid distances set", e.mode = B;
            break;
          }
          if (e.mode = zi, t === Ci)
            break t;
        case zi:
          e.mode = Ti;
        case Ti:
          if (a >= 6 && d >= 258) {
            i.next_out = o, i.avail_out = d, i.next_in = r, i.avail_in = a, e.hold = h, e.bits = l, Uh(i, u), o = i.next_out, n = i.output, d = i.avail_out, r = i.next_in, s = i.input, a = i.avail_in, h = e.hold, l = e.bits, e.mode === Et && (e.back = -1);
            break;
          }
          for (e.back = 0; x = e.lencode[h & (1 << e.lenbits) - 1], y = x >>> 24, E = x >>> 16 & 255, C = x & 65535, !(y <= l); ) {
            if (a === 0)
              break t;
            a--, h += s[r++] << l, l += 8;
          }
          if (E && (E & 240) === 0) {
            for (M = y, S = E, p = C; x = e.lencode[p + ((h & (1 << M + S) - 1) >> M)], y = x >>> 24, E = x >>> 16 & 255, C = x & 65535, !(M + y <= l); ) {
              if (a === 0)
                break t;
              a--, h += s[r++] << l, l += 8;
            }
            h >>>= M, l -= M, e.back += M;
          }
          if (h >>>= y, l -= y, e.back += y, e.length = C, E === 0) {
            e.mode = Gn;
            break;
          }
          if (E & 32) {
            e.back = -1, e.mode = Et;
            break;
          }
          if (E & 64) {
            i.msg = "invalid literal/length code", e.mode = B;
            break;
          }
          e.extra = E & 15, e.mode = qn;
        case qn:
          if (e.extra) {
            for (k = e.extra; l < k; ) {
              if (a === 0)
                break t;
              a--, h += s[r++] << l, l += 8;
            }
            e.length += h & (1 << e.extra) - 1, h >>>= e.extra, l -= e.extra, e.back += e.extra;
          }
          e.was = e.length, e.mode = Xn;
        case Xn:
          for (; x = e.distcode[h & (1 << e.distbits) - 1], y = x >>> 24, E = x >>> 16 & 255, C = x & 65535, !(y <= l); ) {
            if (a === 0)
              break t;
            a--, h += s[r++] << l, l += 8;
          }
          if ((E & 240) === 0) {
            for (M = y, S = E, p = C; x = e.distcode[p + ((h & (1 << M + S) - 1) >> M)], y = x >>> 24, E = x >>> 16 & 255, C = x & 65535, !(M + y <= l); ) {
              if (a === 0)
                break t;
              a--, h += s[r++] << l, l += 8;
            }
            h >>>= M, l -= M, e.back += M;
          }
          if (h >>>= y, l -= y, e.back += y, E & 64) {
            i.msg = "invalid distance code", e.mode = B;
            break;
          }
          e.offset = C, e.extra = E & 15, e.mode = Yn;
        case Yn:
          if (e.extra) {
            for (k = e.extra; l < k; ) {
              if (a === 0)
                break t;
              a--, h += s[r++] << l, l += 8;
            }
            e.offset += h & (1 << e.extra) - 1, h >>>= e.extra, l -= e.extra, e.back += e.extra;
          }
          if (e.offset > e.dmax) {
            i.msg = "invalid distance too far back", e.mode = B;
            break;
          }
          e.mode = jn;
        case jn:
          if (d === 0)
            break t;
          if (c = u - d, e.offset > c) {
            if (c = e.offset - c, c > e.whave && e.sane) {
              i.msg = "invalid distance too far back", e.mode = B;
              break;
            }
            c > e.wnext ? (c -= e.wnext, m = e.wsize - c) : m = e.wnext - c, c > e.length && (c = e.length), b = e.window;
          } else
            b = n, m = o - e.offset, c = e.length;
          c > d && (c = d), d -= c, e.length -= c;
          do
            n[o++] = b[m++];
          while (--c);
          e.length === 0 && (e.mode = Ti);
          break;
        case Gn:
          if (d === 0)
            break t;
          n[o++] = e.length, d--, e.mode = Ti;
          break;
        case Ss:
          if (e.wrap) {
            for (; l < 32; ) {
              if (a === 0)
                break t;
              a--, h |= s[r++] << l, l += 8;
            }
            if (u -= d, i.total_out += u, e.total += u, e.wrap & 4 && u && (i.adler = e.check = e.flags ? V(e.check, n, u, o - u) : Xe(e.check, n, u, o - u)), u = d, e.wrap & 4 && (e.flags ? h : Qn(h)) !== e.check) {
              i.msg = "incorrect data check", e.mode = B;
              break;
            }
            h = 0, l = 0;
          }
          e.mode = Jn;
        case Jn:
          if (e.wrap && e.flags) {
            for (; l < 32; ) {
              if (a === 0)
                break t;
              a--, h += s[r++] << l, l += 8;
            }
            if (e.wrap & 4 && h !== (e.total & 4294967295)) {
              i.msg = "incorrect length check", e.mode = B;
              break;
            }
            h = 0, l = 0;
          }
          e.mode = Kn;
        case Kn:
          A = Ph;
          break t;
        case B:
          A = Xr;
          break t;
        case jr:
          return Yr;
        case Gr:
        default:
          return nt;
      }
  return i.next_out = o, i.avail_out = d, i.next_in = r, i.avail_in = a, e.hold = h, e.bits = l, (e.wsize || u !== i.avail_out && e.mode < B && (e.mode < Ss || t !== Tn)) && ea(i, i.output, i.next_out, u - i.avail_out), f -= i.avail_in, u -= i.avail_out, i.total_in += f, i.total_out += u, e.total += u, e.wrap & 4 && u && (i.adler = e.check = e.flags ? V(e.check, n, u, i.next_out - u) : Xe(e.check, n, u, i.next_out - u)), i.data_type = e.bits + (e.last ? 64 : 0) + (e.mode === Et ? 128 : 0) + (e.mode === zi || e.mode === ks ? 256 : 0), (f === 0 && u === 0 || t === Tn) && A === ne && (A = Wh), A;
}, Qh = (i) => {
  if (re(i))
    return nt;
  let t = i.state;
  return t.window && (t.window = null), i.state = null, ne;
}, tl = (i, t) => {
  if (re(i))
    return nt;
  const e = i.state;
  return (e.wrap & 2) === 0 ? nt : (e.head = t, t.done = !1, ne);
}, el = (i, t) => {
  const e = t.length;
  let s, n, r;
  return re(i) || (s = i.state, s.wrap !== 0 && s.mode !== Oi) ? nt : s.mode === Oi && (n = 1, n = Xe(n, t, e, 0), n !== s.check) ? Xr : (r = ea(i, t, e, e), r ? (s.mode = jr, Yr) : (s.havedict = 1, ne));
};
var il = Kr, sl = Qr, nl = Jr, rl = Gh, al = ta, ol = Kh, hl = Qh, ll = tl, dl = el, ul = "pako inflate (from Nodeca project)", Ft = {
  inflateReset: il,
  inflateReset2: sl,
  inflateResetKeep: nl,
  inflateInit: rl,
  inflateInit2: al,
  inflate: ol,
  inflateEnd: hl,
  inflateGetHeader: ll,
  inflateSetDictionary: dl,
  inflateInfo: ul
};
function fl() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var cl = fl;
const ia = Object.prototype.toString, {
  Z_NO_FLUSH: pl,
  Z_FINISH: ml,
  Z_OK: Ge,
  Z_STREAM_END: zs,
  Z_NEED_DICT: Ts,
  Z_STREAM_ERROR: gl,
  Z_DATA_ERROR: er,
  Z_MEM_ERROR: yl
} = si;
function ri(i) {
  this.options = Hi.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, i || {});
  const t = this.options;
  t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(i && i.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15) === 0 && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Zr(), this.strm.avail_out = 0;
  let e = Ft.inflateInit2(
    this.strm,
    t.windowBits
  );
  if (e !== Ge)
    throw new Error(Me[e]);
  if (this.header = new cl(), Ft.inflateGetHeader(this.strm, this.header), t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = je.string2buf(t.dictionary) : ia.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (e = Ft.inflateSetDictionary(this.strm, t.dictionary), e !== Ge)))
    throw new Error(Me[e]);
}
ri.prototype.push = function(i, t) {
  const e = this.strm, s = this.options.chunkSize, n = this.options.dictionary;
  let r, o, a;
  if (this.ended)
    return !1;
  for (t === ~~t ? o = t : o = t === !0 ? ml : pl, ia.call(i) === "[object ArrayBuffer]" ? e.input = new Uint8Array(i) : e.input = i, e.next_in = 0, e.avail_in = e.input.length; ; ) {
    for (e.avail_out === 0 && (e.output = new Uint8Array(s), e.next_out = 0, e.avail_out = s), r = Ft.inflate(e, o), r === Ts && n && (r = Ft.inflateSetDictionary(e, n), r === Ge ? r = Ft.inflate(e, o) : r === er && (r = Ts)); e.avail_in > 0 && r === zs && e.state.wrap > 0 && i[e.next_in] !== 0; )
      Ft.inflateReset(e), r = Ft.inflate(e, o);
    switch (r) {
      case gl:
      case er:
      case Ts:
      case yl:
        return this.onEnd(r), this.ended = !0, !1;
    }
    if (a = e.avail_out, e.next_out && (e.avail_out === 0 || r === zs))
      if (this.options.to === "string") {
        let d = je.utf8border(e.output, e.next_out), h = e.next_out - d, l = je.buf2string(e.output, d);
        e.next_out = h, e.avail_out = s - h, h && e.output.set(e.output.subarray(d, d + h), 0), this.onData(l);
      } else
        this.onData(e.output.length === e.next_out ? e.output : e.output.subarray(0, e.next_out));
    if (!(r === Ge && a === 0)) {
      if (r === zs)
        return r = Ft.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, !0;
      if (e.avail_in === 0)
        break;
    }
  }
  return !0;
};
ri.prototype.onData = function(i) {
  this.chunks.push(i);
};
ri.prototype.onEnd = function(i) {
  i === Ge && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = Hi.flattenChunks(this.chunks)), this.chunks = [], this.err = i, this.msg = this.strm.msg;
};
function Ks(i, t) {
  const e = new ri(t);
  if (e.push(i), e.err)
    throw e.msg || Me[e.err];
  return e.result;
}
function _l(i, t) {
  return t = t || {}, t.raw = !0, Ks(i, t);
}
var bl = ri, xl = Ks, wl = _l, Ml = Ks, Al = si, vl = {
  Inflate: bl,
  inflate: xl,
  inflateRaw: wl,
  ungzip: Ml,
  constants: Al
};
const { Inflate: kl, inflate: Sl, inflateRaw: id, ungzip: sd } = vl;
var El = kl, Cl = Sl;
const Fs = [137, 80, 78, 71, 13, 10, 26, 10], sa = [];
for (let i = 0; i < 256; i++) {
  let t = i;
  for (let e = 0; e < 8; e++)
    t & 1 ? t = 3988292384 ^ t >>> 1 : t = t >>> 1;
  sa[i] = t;
}
const ir = 4294967295;
function zl(i, t, e) {
  let s = i;
  for (let n = 0; n < e; n++)
    s = sa[(s ^ t[n]) & 255] ^ s >>> 8;
  return s;
}
function Tl(i, t) {
  return (zl(ir, i, t) ^ ir) >>> 0;
}
var Gt;
(function(i) {
  i[i.UNKNOWN = -1] = "UNKNOWN", i[i.GREYSCALE = 0] = "GREYSCALE", i[i.TRUECOLOUR = 2] = "TRUECOLOUR", i[i.INDEXED_COLOUR = 3] = "INDEXED_COLOUR", i[i.GREYSCALE_ALPHA = 4] = "GREYSCALE_ALPHA", i[i.TRUECOLOUR_ALPHA = 6] = "TRUECOLOUR_ALPHA";
})(Gt || (Gt = {}));
var Pe;
(function(i) {
  i[i.UNKNOWN = -1] = "UNKNOWN", i[i.DEFLATE = 0] = "DEFLATE";
})(Pe || (Pe = {}));
var Li;
(function(i) {
  i[i.UNKNOWN = -1] = "UNKNOWN", i[i.ADAPTIVE = 0] = "ADAPTIVE";
})(Li || (Li = {}));
var Vi;
(function(i) {
  i[i.UNKNOWN = -1] = "UNKNOWN", i[i.NO_INTERLACE = 0] = "NO_INTERLACE", i[i.ADAM7 = 1] = "ADAM7";
})(Vi || (Vi = {}));
const Fl = new Uint8Array(0), sr = "\0", Nl = new Uint16Array([255]), $l = new Uint8Array(Nl.buffer), Ul = $l[0] === 255;
class Rl extends Hs {
  constructor(t, e = {}) {
    super(t);
    const { checkCrc: s = !1 } = e;
    this._checkCrc = s, this._inflator = new El(), this._png = {
      width: -1,
      height: -1,
      channels: -1,
      data: new Uint8Array(0),
      depth: 1,
      text: {}
    }, this._end = !1, this._hasPalette = !1, this._palette = [], this._compressionMethod = Pe.UNKNOWN, this._filterMethod = Li.UNKNOWN, this._interlaceMethod = Vi.UNKNOWN, this._colorType = -1, this.setBigEndian();
  }
  decode() {
    for (this.decodeSignature(); !this._end; )
      this.decodeChunk();
    return this.decodeImage(), this._png;
  }
  decodeSignature() {
    for (let t = 0; t < Fs.length; t++)
      if (this.readUint8() !== Fs[t])
        throw new Error(`wrong PNG signature. Byte at ${t} should be ${Fs[t]}.`);
  }
  decodeChunk() {
    const t = this.readUint32(), e = this.readChars(4), s = this.offset;
    switch (e) {
      case "IHDR":
        this.decodeIHDR();
        break;
      case "PLTE":
        this.decodePLTE(t);
        break;
      case "IDAT":
        this.decodeIDAT(t);
        break;
      case "IEND":
        this._end = !0;
        break;
      case "tRNS":
        this.decodetRNS(t);
        break;
      case "iCCP":
        this.decodeiCCP(t);
        break;
      case "tEXt":
        this.decodetEXt(t);
        break;
      case "pHYs":
        this.decodepHYs();
        break;
      default:
        this.skip(t);
        break;
    }
    if (this.offset - s !== t)
      throw new Error(`Length mismatch while decoding chunk ${e}`);
    if (this._checkCrc) {
      const n = this.readUint32(), r = t + 4, o = Tl(new Uint8Array(this.buffer, this.byteOffset + this.offset - r - 4, r), r);
      if (o !== n)
        throw new Error(`CRC mismatch for chunk ${e}. Expected ${n}, found ${o}`);
    } else
      this.skip(4);
  }
  decodeIHDR() {
    const t = this._png;
    t.width = this.readUint32(), t.height = this.readUint32(), t.depth = Zl(this.readUint8());
    const e = this.readUint8();
    this._colorType = e;
    let s;
    switch (e) {
      case Gt.GREYSCALE:
        s = 1;
        break;
      case Gt.TRUECOLOUR:
        s = 3;
        break;
      case Gt.INDEXED_COLOUR:
        s = 1;
        break;
      case Gt.GREYSCALE_ALPHA:
        s = 2;
        break;
      case Gt.TRUECOLOUR_ALPHA:
        s = 4;
        break;
      default:
        throw new Error(`Unknown color type: ${e}`);
    }
    if (this._png.channels = s, this._compressionMethod = this.readUint8(), this._compressionMethod !== Pe.DEFLATE)
      throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
    this._filterMethod = this.readUint8(), this._interlaceMethod = this.readUint8();
  }
  decodePLTE(t) {
    if (t % 3 !== 0)
      throw new RangeError(`PLTE field length must be a multiple of 3. Got ${t}`);
    const e = t / 3;
    this._hasPalette = !0;
    const s = [];
    this._palette = s;
    for (let n = 0; n < e; n++)
      s.push([this.readUint8(), this.readUint8(), this.readUint8()]);
  }
  decodeIDAT(t) {
    this._inflator.push(new Uint8Array(this.buffer, this.offset + this.byteOffset, t)), this.skip(t);
  }
  decodetRNS(t) {
    if (this._colorType === 3) {
      if (t > this._palette.length)
        throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${t} vs ${this._palette.length})`);
      let e = 0;
      for (; e < t; e++) {
        const s = this.readByte();
        this._palette[e].push(s);
      }
      for (; e < this._palette.length; e++)
        this._palette[e].push(255);
    }
  }
  decodeiCCP(t) {
    let e = "", s;
    for (; (s = this.readChar()) !== sr; )
      e += s;
    const n = this.readUint8();
    if (n !== Pe.DEFLATE)
      throw new Error(`Unsupported iCCP compression method: ${n}`);
    const r = this.readBytes(t - e.length - 2);
    this._png.iccEmbeddedProfile = {
      name: e,
      profile: Cl(r)
    };
  }
  decodetEXt(t) {
    let e = "", s;
    for (; (s = this.readChar()) !== sr; )
      e += s;
    this._png.text[e] = this.readChars(t - e.length - 1);
  }
  decodepHYs() {
    const t = this.readUint32(), e = this.readUint32(), s = this.readByte();
    this._png.resolution = { x: t, y: e, unit: s };
  }
  decodeImage() {
    if (this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    const t = this._inflator.result;
    if (this._filterMethod !== Li.ADAPTIVE)
      throw new Error(`Filter method ${this._filterMethod} not supported`);
    if (this._interlaceMethod === Vi.NO_INTERLACE)
      this.decodeInterlaceNull(t);
    else
      throw new Error(`Interlace method ${this._interlaceMethod} not supported`);
  }
  decodeInterlaceNull(t) {
    const e = this._png.height, s = this._png.channels * this._png.depth / 8, n = this._png.width * s, r = new Uint8Array(this._png.height * n);
    let o = Fl, a = 0, d, h;
    for (let l = 0; l < e; l++) {
      switch (d = t.subarray(a + 1, a + 1 + n), h = r.subarray(l * n, (l + 1) * n), t[a]) {
        case 0:
          Bl(d, h, n);
          break;
        case 1:
          Il(d, h, n, s);
          break;
        case 2:
          Dl(d, h, o, n);
          break;
        case 3:
          Ol(d, h, o, n, s);
          break;
        case 4:
          Ll(d, h, o, n, s);
          break;
        default:
          throw new Error(`Unsupported filter: ${t[a]}`);
      }
      o = h, a += n + 1;
    }
    if (this._hasPalette && (this._png.palette = this._palette), this._png.depth === 16) {
      const l = new Uint16Array(r.buffer);
      if (Ul)
        for (let f = 0; f < l.length; f++)
          l[f] = Pl(l[f]);
      this._png.data = l;
    } else
      this._png.data = r;
  }
}
function Bl(i, t, e) {
  for (let s = 0; s < e; s++)
    t[s] = i[s];
}
function Il(i, t, e, s) {
  let n = 0;
  for (; n < s; n++)
    t[n] = i[n];
  for (; n < e; n++)
    t[n] = i[n] + t[n - s] & 255;
}
function Dl(i, t, e, s) {
  let n = 0;
  if (e.length === 0)
    for (; n < s; n++)
      t[n] = i[n];
  else
    for (; n < s; n++)
      t[n] = i[n] + e[n] & 255;
}
function Ol(i, t, e, s, n) {
  let r = 0;
  if (e.length === 0) {
    for (; r < n; r++)
      t[r] = i[r];
    for (; r < s; r++)
      t[r] = i[r] + (t[r - n] >> 1) & 255;
  } else {
    for (; r < n; r++)
      t[r] = i[r] + (e[r] >> 1) & 255;
    for (; r < s; r++)
      t[r] = i[r] + (t[r - n] + e[r] >> 1) & 255;
  }
}
function Ll(i, t, e, s, n) {
  let r = 0;
  if (e.length === 0) {
    for (; r < n; r++)
      t[r] = i[r];
    for (; r < s; r++)
      t[r] = i[r] + t[r - n] & 255;
  } else {
    for (; r < n; r++)
      t[r] = i[r] + e[r] & 255;
    for (; r < s; r++)
      t[r] = i[r] + Vl(t[r - n], e[r], e[r - n]) & 255;
  }
}
function Vl(i, t, e) {
  const s = i + t - e, n = Math.abs(s - i), r = Math.abs(s - t), o = Math.abs(s - e);
  return n <= r && n <= o ? i : r <= o ? t : e;
}
function Pl(i) {
  return (i & 255) << 8 | i >> 8 & 255;
}
function Zl(i) {
  if (i !== 1 && i !== 2 && i !== 4 && i !== 8 && i !== 16)
    throw new Error(`invalid bit depth: ${i}`);
  return i;
}
var nr;
(function(i) {
  i[i.UNKNOWN = 0] = "UNKNOWN", i[i.METRE = 1] = "METRE";
})(nr || (nr = {}));
function Wl(i, t) {
  return new Rl(i, t).decode();
}
var na = {}, bt = {};
Object.defineProperty(bt, "__esModule", { value: !0 });
bt.handleWarning = bt.DecodeWarning = bt.DecodeError = void 0;
class Hl extends Error {
  constructor(t, e, s) {
    super(e), this.offset = s, this.partiallyDecodedImage = {
      details: {
        header: t.header,
        footer: t.footer,
        imageId: t.identificationField,
        developerDirectory: t.developerDirectory,
        extensionArea: t.extensionArea
      },
      warnings: t.warnings
    };
  }
}
bt.DecodeError = Hl;
class ql extends Error {
  constructor(t, e) {
    super(t), this.offset = e;
  }
}
bt.DecodeWarning = ql;
function Xl(i, t) {
  if (i.options.strictMode)
    throw t;
  i.warnings.push(t);
}
bt.handleWarning = Xl;
var $e = {}, Ue = {}, rr;
function Yl() {
  if (rr)
    return Ue;
  rr = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.ByteStreamReader = void 0;
  class i {
    constructor(e, s) {
      this.data = e, this._le = s, this.offset = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
    }
    readUint8() {
      return this.view.getUint8(this.offset++);
    }
    readUint16() {
      const e = this.view.getUint16(this.offset, this._le);
      return this.offset += 2, e;
    }
    readUint32() {
      const e = this.view.getUint32(this.offset, this._le);
      return this.offset += 4, e;
    }
  }
  return Ue.ByteStreamReader = i, Ue;
}
var Re = {}, ar;
function jl() {
  if (ar)
    return Re;
  ar = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.readText = void 0;
  const i = bt;
  function t(e, s, n, r) {
    const o = [];
    let a = 0, d = 0;
    const h = e.reader.offset;
    for (; d < n; d++) {
      try {
        a = e.reader.view.getUint8(e.reader.offset);
      } catch (l) {
        throw l instanceof Error && l.message === "Offset is outside the bounds of the DataView" && (0, i.handleWarning)(e, new i.DecodeWarning("EOF while reading text", e.reader.offset)), l;
      }
      if (!r && a === 0)
        break;
      e.reader.offset++, o.push(a);
    }
    return e.reader.offset = h + n, s ? s.decode(new Uint8Array(o)) : String.fromCharCode(...o);
  }
  return Re.readText = t, Re;
}
var Ct = {}, or;
function Gl() {
  if (or)
    return Ct;
  or = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.isValidBitDepth = Ct.isValidColorMapDepth = Ct.isValidImageType = void 0;
  function i(s) {
    return s === 1 || s === 2 || s === 3 || s === 9 || s === 10 || s === 11;
  }
  Ct.isValidImageType = i;
  function t(s) {
    return s === 15 || s === 16 || s === 24 || s === 32;
  }
  Ct.isValidColorMapDepth = t;
  function e(s, n) {
    return n === 1 || n === 9 ? s === 8 : n === 3 || n === 11 ? s === 8 || s === 16 : s === 15 || s === 16 || s === 24 || s === 32;
  }
  return Ct.isValidBitDepth = e, Ct;
}
var hr;
function Jl() {
  if (hr)
    return $e;
  hr = 1, Object.defineProperty($e, "__esModule", { value: !0 }), $e.decodeTga = void 0;
  const i = bt, t = Yl(), e = jl(), s = Gl();
  async function n(p, g = {}) {
    var z, F;
    const A = {
      reader: new t.ByteStreamReader(p, !0),
      hasAlpha: !1,
      ambiguousAlpha: !1,
      options: g,
      warnings: []
    }, w = r(A), _ = {
      ...A,
      header: w
    };
    _.identificationField = (0, e.readText)(_, void 0, _.header.idLength);
    const k = _.reader.offset;
    return _.footer = S(_), _.extensionArea = y(_), _.developerDirectory = E(_), _.reader.offset = k, ((z = _.header.colorMap) == null ? void 0 : z.type) === 1 && (_.colorMap = o(_, _.header.colorMap)), _.hasAlpha = _.colorMap && ((F = _.header.colorMap) == null ? void 0 : F.depth) === 32 || (_.header.attributeBitsPerPixel > 0 || _.header.bitDepth === 32) && (_.extensionArea === void 0 || _.extensionArea.attributesType > 2), _.ambiguousAlpha = _.hasAlpha && _.header.attributeBitsPerPixel === 0, _.image = a(_, _.reader.offset), {
      image: _.image,
      details: {
        header: _.header,
        imageId: _.identificationField,
        footer: _.footer,
        extensionArea: _.extensionArea,
        developerDirectory: _.developerDirectory
      },
      warnings: _.warnings
    };
  }
  $e.decodeTga = n;
  function r(p) {
    const g = p.reader.readUint8(), A = p.reader.readUint8();
    let w;
    A === 0 || A === 1 ? w = A : ((0, i.handleWarning)(p, new i.DecodeWarning("Color map type unrecognized", p.reader.offset - 1)), w = 2);
    const _ = p.reader.readUint8();
    if (!(0, s.isValidImageType)(_))
      throw new i.DecodeError(p, `Invalid image type "${_}"`, p.reader.offset - 1);
    w === 1 && _ !== 1 && _ !== 9 && (0, i.handleWarning)(p, new i.DecodeWarning(`Image type "${_}" cannot have a color map`, p.reader.offset - 2));
    const k = p.reader.readUint16(), z = p.reader.readUint16(), F = p.reader.readUint8();
    if (w === 1 && (k >= z && (0, i.handleWarning)(p, new i.DecodeWarning(`Color map origin "${k}" is greater than color map length "${z}"`, p.reader.offset - 5)), !(0, s.isValidColorMapDepth)(F)))
      throw new i.DecodeError(p, `Unsupported color map bit depth "${F}"`, p.reader.offset - 1);
    const I = p.reader.readUint16(), R = p.reader.readUint16(), q = p.reader.readUint16(), xt = p.reader.readUint16(), rt = p.reader.readUint8();
    if (!(0, s.isValidBitDepth)(rt, _))
      throw new i.DecodeError(p, `Unsupported TGA bit depth "${rt}" with image type ${_}`, 16);
    const at = p.reader.readUint8(), wt = (at & 15) >> 0, ct = (at & 48) >> 4;
    return {
      idLength: g,
      colorMap: w !== 0 ? {
        type: w,
        depth: F,
        length: z,
        origin: k
      } : void 0,
      imageType: _,
      origin: {
        x: I,
        y: R
      },
      width: q,
      height: xt,
      bitDepth: rt,
      imageDescriptor: at,
      attributeBitsPerPixel: wt,
      screenOrigin: ct
    };
  }
  function o(p, g) {
    const A = p.reader.offset, w = Math.ceil(g.depth / 8);
    p.reader.offset += g.length * w;
    let _;
    switch (g.depth) {
      case 15:
        _ = u;
        break;
      case 16:
        p.hasAlpha ? _ = c : _ = u;
        break;
      case 24:
        _ = m;
        break;
      case 32:
        _ = b;
        break;
    }
    return (k, z, F, I) => {
      const R = F.getUint8(I);
      return _(k, z, p.reader.view, A + R * w), 1;
    };
  }
  function a(p, g) {
    const A = {
      width: p.header.width,
      height: p.header.height,
      data: new Uint8Array(p.header.width * p.header.height * 4)
    };
    let w;
    if (p.colorMap)
      w = p.colorMap;
    else
      switch (p.header.bitDepth) {
        case 8:
          w = h;
          break;
        case 15:
          w = u;
          break;
        case 16:
          p.header.imageType === 11 || p.header.imageType === 3 ? w = l : p.hasAlpha ? w = c : w = u;
          break;
        case 24:
          w = m;
          break;
        case 32:
          p.hasAlpha ? w = b : w = x;
          break;
      }
    let _ = p.reader.view;
    if (p.header.imageType & 8) {
      const k = d(p);
      _ = new DataView(k.buffer, k.byteOffset, k.length), g = 0;
    }
    if (p.header.screenOrigin === 2) {
      let k = 0;
      for (let z = 0; z < A.height; z++)
        for (let F = 0; F < A.width; F++)
          g += w(A.data, k, _, g), k += 4;
    } else {
      let k = 0;
      for (let z = A.height - 1; z >= 0; z--) {
        k = p.header.width * z * 4;
        for (let F = 0; F < A.width; F++)
          g += w(A.data, k, _, g), k += 4;
      }
    }
    if (p.ambiguousAlpha && !p.options.strictMode && p.options.detectAmbiguousAlphaChannel) {
      let k = !1;
      for (let z = 3; z < A.width * A.height * 4; z += 4)
        A.data[z] > 0 && (k = !0);
      if (!k) {
        (0, i.handleWarning)(p, new i.DecodeWarning("Image has ambiguous alpha and is fully transparent, alpha has been disabled", -1));
        for (let z = 3; z < A.width * A.height * 4; z += 4)
          A.data[z] = 255;
      }
    }
    return A;
  }
  function d(p) {
    const g = Math.ceil(p.header.bitDepth / 8), A = new Uint8Array(p.header.width * p.header.height * g);
    let w = 0, _ = 0, k = 0, z = 0, F = 0;
    for (; k < A.length - 1; )
      if (w = p.reader.readUint8(), _ = (w & 127) + 1, w & 128) {
        for (z = 0; z < g; z++)
          for (w = p.reader.readUint8(), F = 0; F < _; F++)
            A[k + F * g + z] = w;
        k += _ * g;
      } else {
        _ *= g;
        for (let I = 0; I < _; I++)
          A[k++] = p.reader.readUint8();
      }
    return A;
  }
  function h(p, g, A, w) {
    return p[g] = A.getUint8(w), p[g + 1] = p[g], p[g + 2] = p[g], p[g + 3] = 255, 1;
  }
  function l(p, g, A, w) {
    return p[g] = A.getUint8(w), p[g + 1] = p[g], p[g + 2] = p[g], p[g + 3] = A.getUint8(w + 1), 2;
  }
  let f = 0;
  function u(p, g, A, w) {
    return f = A.getUint16(w, !0), p[g] = f >> 10 & 31, p[g + 1] = f >> 5 & 31, p[g + 2] = f & 31, p[g] = p[g] << 3 | p[g] >> 2, p[g + 1] = p[g + 1] << 3 | p[g + 1] >> 2, p[g + 2] = p[g + 2] << 3 | p[g + 2] >> 2, p[g + 3] = 255, 2;
  }
  function c(p, g, A, w) {
    return f = A.getUint16(w, !0), p[g] = f >> 10 & 31, p[g + 1] = f >> 5 & 31, p[g + 2] = f & 31, p[g] = p[g] << 3 | p[g] >> 2, p[g + 1] = p[g + 1] << 3 | p[g + 1] >> 2, p[g + 2] = p[g + 2] << 3 | p[g + 2] >> 2, p[g + 3] = f & 32768 ? 0 : 255, 2;
  }
  function m(p, g, A, w) {
    return p[g] = A.getUint8(w + 2), p[g + 1] = A.getUint8(w + 1), p[g + 2] = A.getUint8(w), p[g + 3] = 255, 3;
  }
  function b(p, g, A, w) {
    return p[g] = A.getUint8(w + 2), p[g + 1] = A.getUint8(w + 1), p[g + 2] = A.getUint8(w), p[g + 3] = A.getUint8(w + 3), 4;
  }
  function x(p, g, A, w) {
    return p[g] = A.getUint8(w + 2), p[g + 1] = A.getUint8(w + 1), p[g + 2] = A.getUint8(w), p[g + 3] = 255, 4;
  }
  function y(p) {
    var en;
    if (((en = p.footer) == null ? void 0 : en.extensionAreaOffset) === void 0 || p.footer.extensionAreaOffset === 0)
      return;
    p.reader.offset = p.footer.extensionAreaOffset;
    const g = p.reader.readUint16();
    g !== 495 && (0, i.handleWarning)(p, new i.DecodeWarning("TGA file is a version other than v2", p.reader.offset - 2));
    const A = (0, e.readText)(p, void 0, 41).trim() || void 0, w = (0, e.readText)(p, void 0, 324).trim() || void 0, _ = C(p), k = (0, e.readText)(p, void 0, 41).trim() || void 0, z = M(p), F = (0, e.readText)(p, void 0, 41).trim() || void 0, I = p.reader.readUint8() / 100, R = (0, e.readText)(p, void 0, 2);
    let q;
    I === 0 && (R === " " || R.length === 0) ? q = void 0 : q = `${I}${R}`;
    const xt = p.reader.readUint8(), rt = p.reader.readUint8(), at = p.reader.readUint8(), wt = p.reader.readUint8();
    let ct;
    xt === 0 && rt === 0 && at === 0 && wt === 0 ? ct = void 0 : ct = new Uint8Array([rt, at, wt, xt]);
    const oa = p.reader.readUint16(), Qs = p.reader.readUint16();
    let Xi;
    Qs === 0 ? Xi = void 0 : Xi = oa / Qs;
    const ha = p.reader.readUint16(), tn = p.reader.readUint16();
    let Yi;
    tn === 0 ? Yi = void 0 : Yi = ha / tn;
    const la = p.reader.readUint32(), da = p.reader.readUint32(), ua = p.reader.readUint32(), fa = p.reader.readUint8();
    return {
      extensionSize: g,
      authorName: A,
      authorComments: w,
      dateTimestamp: _,
      jobName: k,
      jobTime: z,
      softwareId: F,
      softwareVersion: q,
      keyColor: ct,
      aspectRatio: Xi,
      gamma: Yi,
      colorCorrectionOffset: la,
      postageStampOffset: da,
      scanLineOffset: ua,
      attributesType: fa
    };
  }
  function E(p) {
    var w;
    if (((w = p.footer) == null ? void 0 : w.developerDirectoryOffset) === void 0 || p.footer.developerDirectoryOffset === 0)
      return [];
    p.reader.offset = p.footer.developerDirectoryOffset;
    const g = p.reader.readUint16(), A = [];
    for (let _ = 0; _ < g; _++) {
      const k = p.reader.readUint16(), z = p.reader.readUint32(), F = p.reader.readUint32();
      A.push({ tag: k, offset: z, length: F });
    }
    return A;
  }
  function C(p) {
    const g = p.reader.readUint16(), A = p.reader.readUint16(), w = p.reader.readUint16(), _ = p.reader.readUint16(), k = p.reader.readUint16(), z = p.reader.readUint16();
    if (!(g === 0 && A === 0 && w === 0 && _ === 0 && k === 0 && z === 0))
      return new Date(w, g, A, _, k, z);
  }
  function M(p) {
    const g = p.reader.readUint16(), A = p.reader.readUint16(), w = p.reader.readUint16();
    if (!(g === 0 && A === 0 && w === 0))
      return { hours: g, minutes: A, seconds: w };
  }
  function S(p) {
    if (p.reader.offset = p.reader.view.byteLength - 26 + 8, (0, e.readText)(p, void 0, 17) !== "TRUEVISION-XFILE." || p.reader.readUint8() !== 0)
      return {
        extensionAreaOffset: 0,
        developerDirectoryOffset: 0
      };
    p.reader.offset = p.reader.view.byteLength - 26;
    let A = p.reader.readUint32();
    A >= p.reader.view.byteLength && ((0, i.handleWarning)(p, new i.DecodeWarning(`Extension area offset "${A}" is invalid`, p.reader.offset - 4)), A = 0);
    let w = p.reader.readUint32();
    return w >= p.reader.view.byteLength && ((0, i.handleWarning)(p, new i.DecodeWarning(`Developer directory offset "${w}" is invalid`, p.reader.offset - 4)), w = 0), {
      extensionAreaOffset: A,
      developerDirectoryOffset: w
    };
  }
  return $e;
}
(function(i) {
  Object.defineProperty(i, "__esModule", { value: !0 }), i.decodeTga = i.DecodeWarning = i.DecodeError = void 0;
  var t = bt;
  Object.defineProperty(i, "DecodeError", { enumerable: !0, get: function() {
    return t.DecodeError;
  } }), Object.defineProperty(i, "DecodeWarning", { enumerable: !0, get: function() {
    return t.DecodeWarning;
  } });
  async function e(s, n) {
    return (await Promise.resolve().then(() => Jl())).decodeTga(s, n);
  }
  i.decodeTga = e;
})(na);
async function ra(i) {
  const e = await (await fetch(i)).arrayBuffer();
  return new Uint8Array(e);
}
async function aa(i) {
  const t = new K().uint32("payloadLength").uint8("type").array("data", { type: "uint8", length: "payloadLength" });
  let s = new K().string("magic", { length: 8, assert: "TRNSRTS\0" }).uint32("payloadLength").string("payload", { length: "payloadLength" }).string("magic", { length: 8, assert: "TEX_SECT" }).uint32("textureCount").array("textures", { type: t, length: "textureCount" }).parse(i), n = new Array(0);
  return s.textures.forEach((r) => {
    let o = r.type, a = new Uint8Array(r.data);
    switch (o) {
      case 0:
        n.push(new Promise((d, h) => {
          let l = Wl(a), f = new pn(l.data, l.width, l.height);
          f.generateMipmaps = !0, f.needsUpdate = !0, d(f);
        }));
        break;
      case 1:
        n.push(new Promise(async (d, h) => {
          na.decodeTga(a, { detectAmbiguousAlphaChannel: !0 }).then((l) => {
            let f = new pn(l.image.data, l.image.width, l.image.height);
            f.generateMipmaps = !0, f.needsUpdate = !0, d(f);
          }).catch((l) => {
            h(l);
          });
        }));
        break;
      default:
        throw "Could not decode texture data";
    }
  }), (async () => {
    let r = await Promise.all(n), o = wr(JSON.parse(s.payload), r);
    return o.textures = Array.from(r), o;
  })();
}
async function Kl(i) {
  return await aa(await ra(i));
}
const nd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFile: ra,
  inImport: aa,
  inImportFromURL: Kl
}, Symbol.toStringTag, { value: "Module" }));
export {
  nd as INP,
  ed as Puppet,
  td as Renderer
};

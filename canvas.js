/*
Canvas Library
---------------------------
This is a collection of a few years of randomly fucking around in javascript.
This library works in base javascript, and should allow full control over the image data in a canvas library at pixel precision.
I tried to keep things as fundumental as possible, though there should be a ton of flexability in what's possible here.
-Gwen
*/
// 2D Vector
class vec2 {
    x = 0;
    y = 0;
    constructor(x = 0, y = 0) { this.x = x; this.y = y; }
    toString() { return `(${this.x},${this.y})`; }
    add(v2) { return (typeof v2 === 'number') ? new vec2(this.x + v2, this.y + v2) : (v2 instanceof vec2) ? new vec2(this.x + v2.x, this.y + v2.y) : null; }
    sub(v2) { return (typeof v2 === 'number') ? new vec2(this.x - v2, this.y - v2) : (v2 instanceof vec2) ? new vec2(this.x - v2.x, this.y - v2.y) : null; }
    mul(v2) { return (typeof v2 === 'number') ? new vec2(this.x * v2, this.y * v2) : (v2 instanceof vec2) ? new vec2(this.x * v2.x, this.y * v2.y) : null; }
    div(v2) { return (typeof v2 === 'number') ? new vec2(this.x / v2, this.y / v2) : (v2 instanceof vec2) ? new vec2(this.x / v2.x, this.y / v2.y) : null; }
    get copy() { return new vec2(this.x, this.y); }
    get lengthSquared() { return this.x ** 2 + this.y ** 2 }
    get length() { return Math.sqrt(this.lengthSquared); }
    get negate() { return this.mul(-1); }
    get normalize() { return this.div(this.length); }
    dot(v2) { return (v2 instanceof vec2) ? (this.x * v2.x) + (this.y * v2.y) : null; }
    cross(v2) { return (v2 instanceof vec2) ? this.x * v2.y - this.y * v2.x : null; }
    // swizzling 2D
    get xx() { return new vec2(this.x, this.x); }
    get xy() { return new vec2(this.x, this.y); }
    get yx() { return new vec2(this.y, this.x); }
    get yy() { return new vec2(this.y, this.y); }
}
// 3D Vector
class vec3 {
    x = 0;
    y = 0;
    z = 0;
    constructor(x = 0, y = 0, z = 0) { this.x = x; this.y = y; this.z = z; }
    toString() { return `(${this.x},${this.y},${this.z})`; }
    add(v2) { return (typeof v2 === 'number') ? new vec3(this.x + v2, this.y + v2, this.z + v2) : (v2 instanceof vec2) ? new vec3(this.x + v2.x, this.y + v2.y, this.z) : (v2 instanceof vec3) ? new vec3(this.x + v2.x, this.y + v2.y, this.z + v2.z) : null; }
    sub(v2) { return (typeof v2 === 'number') ? new vec3(this.x - v2, this.y - v2, this.z - v2) : (v2 instanceof vec2) ? new vec3(this.x - v2.x, this.y - v2.y, this.z) : (v2 instanceof vec3) ? new vec3(this.x - v2.x, this.y - v2.y, this.z - v2.z) : null; }
    mul(v2) { return (typeof v2 === 'number') ? new vec3(this.x * v2, this.y * v2, this.z * v2) : (v2 instanceof vec2) ? new vec3(this.x * v2.x, this.y * v2.y, this.z) : (v2 instanceof vec3) ? new vec3(this.x * v2.x, this.y * v2.y, this.z * v2.z) : null; }
    div(v2) { return (typeof v2 === 'number') ? new vec3(this.x / v2, this.y / v2, this.z / v2) : (v2 instanceof vec2) ? new vec3(this.x / v2.x, this.y / v2.y, this.z) : (v2 instanceof vec3) ? new vec3(this.x / v2.x, this.y / v2.y, this.z / v2.z) : null; }
    get copy() { return new vec2(this.x, this.y, this.z); }
    get lengthSquared() { return this.x ** 2 + this.y ** 2 + this.z ** 2; }
    get length() { return Math.sqrt(this.lengthSquared); }
    get negate() { return this.mul(-1); }
    get normalize() { return this.div(this.length); }
    dot(v2) { return (v2 instanceof vec3) ? (this.x * v2.x) + (this.y * v2.y) + (this.z * v2.z) : null; }
    cross(v2) { return (v2 instanceof vec3) ? new vec3((this.y * v2.z - this.z * v2.y), (this.z * v2.x - this.x * v2.z), (this.x * v2.y - this.y * v2.x)) : null; }
    // swizzling 2D
    get xx() { return new vec2(this.x, this.x); }
    get xy() { return new vec2(this.x, this.y); }
    get xz() { return new vec2(this.x, this.z); }
    get yx() { return new vec2(this.y, this.x); }
    get yy() { return new vec2(this.y, this.y); }
    get yz() { return new vec2(this.y, this.z); }
    get zx() { return new vec2(this.z, this.x); }
    get zy() { return new vec2(this.z, this.y); }
    get zz() { return new vec2(this.z, this.z); }
    // swizzling 3D
    get xxx() { return new vec3(this.x, this.x, this.x); }
    get xxy() { return new vec3(this.x, this.x, this.y); }
    get xxz() { return new vec3(this.x, this.x, this.z); }
    get xyx() { return new vec3(this.x, this.y, this.x); }
    get xyy() { return new vec3(this.x, this.y, this.y); }
    get xyz() { return new vec3(this.x, this.y, this.z); }
    get xzx() { return new vec3(this.x, this.z, this.x); }
    get xzy() { return new vec3(this.x, this.z, this.y); }
    get xzz() { return new vec3(this.x, this.z, this.z); }
    get yxx() { return new vec3(this.y, this.x, this.x); }
    get yxy() { return new vec3(this.y, this.x, this.y); }
    get yxz() { return new vec3(this.y, this.x, this.z); }
    get yyx() { return new vec3(this.y, this.y, this.x); }
    get yyy() { return new vec3(this.y, this.y, this.y); }
    get yyz() { return new vec3(this.y, this.y, this.z); }
    get yzx() { return new vec3(this.y, this.z, this.x); }
    get yzy() { return new vec3(this.y, this.z, this.y); }
    get yzz() { return new vec3(this.y, this.z, this.z); }
    get zxx() { return new vec3(this.z, this.x, this.x); }
    get zxy() { return new vec3(this.z, this.x, this.y); }
    get zxz() { return new vec3(this.z, this.x, this.z); }
    get zyx() { return new vec3(this.z, this.y, this.x); }
    get zyy() { return new vec3(this.z, this.y, this.y); }
    get zyz() { return new vec3(this.z, this.y, this.z); }
    get zzx() { return new vec3(this.z, this.z, this.x); }
    get zzy() { return new vec3(this.z, this.z, this.y); }
    get zzz() { return new vec3(this.z, this.z, this.z); }
}
// Color
class color extends vec3 {
    constructor(r = 0, g = 0, b = 0) { super(r, g, b); if (typeof r == 'string') this.setHex(r); }
    setHex(hex) {
        if (typeof hex != 'string') return this;
        if (hex.length < 3) return this;
        this.r = ((hex.length > 3) ? parseInt(hex.substring(0, 2), 16) : parseInt(hex.substring(0, 1) + hex.substring(0, 1), 16)) || 0;
        this.g = ((hex.length > 4) ? parseInt(hex.substring(2, 4), 16) : parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16)) || 0;
        this.b = ((hex.length > 5) ? parseInt(hex.substring(4, 6), 16) : parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16)) || 0;
        return this;
    }
    set r(r) { this.x = r; }
    set g(g) { this.y = g; }
    set b(b) { this.z = b; }
    get r() { return this.x; }
    get g() { return this.y; }
    get b() { return this.z; }
}
// Canvas rendering
class canvas {
    constructor(id = 'canvas', fill = false) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
        if (fill) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
        this.w = this.canvas.width;
        this.h = this.canvas.height;
        this.img = this.getImageData();
        this.frameUpdate();
    }
    setWidth(width) {
        this.canvas.width = width;
        this.w = this.canvas.width;
        this.img = this.getImageData();
    }
    setHeight(height) {
        this.canvas.height = height;
        this.h = this.canvas.height;
        this.img = this.getImageData();
    }
    resizeToParent() {
        this.canvas.width = this.canvas.parentElement.clientWidth;
        this.canvas.height = this.canvas.parentElement.clientHeight;
        this.w = this.canvas.width;
        this.h = this.canvas.height;
        this.img = this.getImageData();
    }
    getImageData() {
        return this.ctx.getImageData(0, 0, this.w, this.h);
    }
    setImageData() {
        this.ctx.putImageData(this.img, 0, 0);
    }
    frameUpdate() {
        this.setImageData();
        this.animationFrame = requestAnimationFrame(() => this.frameUpdate());
    }
    // Draw Functions
    clear() {
        let len = this.img.data.length;
        for (let i = 0; i < len; i++) {
            this.img.data[i] = 0;
        }
    }
    getPixel(x, y) {
        x = ~~x || 0;
        y = ~~y || 0;
        // lock px and py to within the canvas
        let px = x % this.w;
        let py = y % this.h;
        let i = (py * this.w + px) * 4
        let r = this.img.data[i];
        let g = this.img.data[i + 1];
        let b = this.img.data[i + 2];
        let a = this.img.data[i + 3];
        return [r, g, b, a];
    }
    setPixel(x, y, r = 0, g = 0, b = 0, a = 255) {
        x = ~~x || 0;
        y = ~~y || 0;
        // lock px and py to within the canvas
        let px = x % this.w;
        let py = y % this.h;
        let i = (py * this.w + px) * 4
        this.img.data[i] = r;
        this.img.data[i + 1] = g;
        this.img.data[i + 2] = b;
        this.img.data[i + 3] = a;
    }
    drawLine(x1, y1, x2, y2, r = 0, g = 0, b = 0, a = 255) {
        // https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm
        x1 = ~~x1 || 0;
        x2 = ~~x2 || 0;
        y1 = ~~y1 || 0;
        y2 = ~~y2 || 0;

        let dx = Math.abs(x2 - x1);
        let sx = x1 < x2 ? 1 : -1;
        let dy = Math.abs(y2 - y1) * -1;
        let sy = y1 < y2 ? 1 : -1;
        let err = dx + dy;

        while (true) {
            this.setPixel(x1, y1, r, g, b, a);
            let e2 = 2 * err;
            if (e2 >= dy) {
                if (x1 == x2) break;
                err = err + dy;
                x1 = x1 + sx;
            }
            if (e2 <= dx) {
                if (y1 == y2) break;
                err = err + dx;
                y1 = y1 + sy;
            }
        }
    }
    drawRect(x, y, dx, dy, r = 0, g = 0, b = 0, a = 255) {
        this.drawLine(x, y, (x + dx), y, r, g, b, a);
        this.drawLine(x, (y + dy), (x + dx), (y + dy), r, g, b, a);
        this.drawLine(x, y, x, y + (dy), r, g, b, a);
        this.drawLine((x + dx), y, (x + dx), (y + dy), r, g, b, a);
    }
    drawFilledRect(x, y, dx, dy, r = 0, g = 0, b = 0, a = 255) {
        if (~~dx == 0 || ~~dy == 0) return;
        for (let i = Math.min(x, x + dx); i <= Math.max(x, x + dx); i++) {
            this.drawLine(i, y, i, y + dy, r, g, b, a);
        }
    }
    drawSquare(x, y, s, r = 0, g = 0, b = 0, a = 255) {
        this.drawRect(x, y, s, s, r, g, b, a);
    }
    drawFilledSquare(x, y, s, r = 0, g = 0, b = 0, a = 255) {
        this.drawFilledRect(x, y, s, s, r, g, b, a);
    }
    drawCircle(x, y, s = 1, r = 0, g = 0, b = 0, a = 255) {
        // https://en.wikipedia.org/wiki/Midpoint_circle_algorithm
        let t1 = s / 16;
        let i = s;
        let j = 0;
        while (i >= j) {
            this.setPixel(x + i, y + j, r, g, b, a);
            this.setPixel(x + i, y - j, r, g, b, a);
            this.setPixel(x - i, y + j, r, g, b, a);
            this.setPixel(x - i, y - j, r, g, b, a);
            this.setPixel(x + j, y + i, r, g, b, a);
            this.setPixel(x + j, y - i, r, g, b, a);
            this.setPixel(x - j, y + i, r, g, b, a);
            this.setPixel(x - j, y - i, r, g, b, a);
            j++;
            t1 += j;
            let t2 = t1 - i;
            if (t2 >= 0) {
                t1 = t2;
                i--;
            }
        }
    }
    drawFilledCircle(x, y, s = 1, r = 0, g = 0, b = 0, a = 255) {
        // https://en.wikipedia.org/wiki/Midpoint_circle_algorithm
        let t1 = s / 16;
        let i = s;
        let j = 0;
        while (i >= j) {
            this.drawLine(x + i, y + j, x + i, y - j, r, g, b, a);
            this.drawLine(x - i, y + j, x - i, y - j, r, g, b, a);
            this.drawLine(x + j, y + i, x + j, y - i, r, g, b, a);
            this.drawLine(x - j, y + i, x - j, y - i, r, g, b, a);
            j++;
            t1 += j;
            let t2 = t1 - i;
            if (t2 >= 0) {
                t1 = t2;
                i--;
            }
        }
    }
}

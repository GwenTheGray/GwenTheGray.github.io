var c = new canvas('canvas');
c.resizeToParent();
var w = c.w;
var h = c.h;
window.addEventListener('resize', function () {
    c.resizeToParent();
    w = c.w;
    h = c.h;
})

function drawArena() {
    let colAR1 = new color(60, 49, 35);
    let colAR2 = new color(41, 43, 62);
    let colAR3 = new color(95, 100, 155);
    let colAR4 = new color(181, 159, 133);

    // Draw Arena
    c.drawFilledCircle(w / 2, h / 2, aRadius, colAR1.r, colAR1.g, colAR1.b);
    c.drawFilledCircle(w / 2, h / 2, aR1Radius, colAR2.r, colAR2.g, colAR2.b);
    c.drawFilledCircle(w / 2, h / 2, aR4Radius, colAR3.r, colAR3.g, colAR3.b);
    c.drawCircle(w / 2, h / 2, aRadius, colAR4.r, colAR4.g, colAR4.b);
    c.drawCircle(w / 2, h / 2, aR1Radius, colAR4.r, colAR4.g, colAR4.b);
    c.drawCircle(w / 2, h / 2, aR2Radius, colAR4.r, colAR4.g, colAR4.b);
    c.drawCircle(w / 2, h / 2, aR3Radius, colAR4.r, colAR4.g, colAR4.b);
    c.drawCircle(w / 2, h / 2, aR4Radius, colAR4.r, colAR4.g, colAR4.b);
}
function drawAoeMarkers() {
    // AOE Variables
    let oRadius = (aR1Radius - aR3Radius) / 2;
    let oScale = 1;
    let oSize = oRadius * oScale;
    let oDistFromCenter = aR3Radius + oRadius - 1 - (oRadius * 0.2);
    let oCornerDist = oDistFromCenter * .707;

    let colO1 = new color(220, 124, 74);
    let colO2 = new color(233, 198, 117);

    let r = oDistFromCenter;
    let x = w / 2;
    let y = h / 2;

    let theta = 270;
    let pos1 = new vec2(x + r * Math.cos(theta * Math.PI / 180), y + r * Math.sin(theta * Math.PI / 180));
    theta = 342;
    let pos2 = new vec2(x + r * Math.cos(theta * Math.PI / 180), y + r * Math.sin(theta * Math.PI / 180));
    theta = 54;
    let pos3 = new vec2(x + r * Math.cos(theta * Math.PI / 180), y + r * Math.sin(theta * Math.PI / 180));
    theta = 126;
    let pos4 = new vec2(x + r * Math.cos(theta * Math.PI / 180), y + r * Math.sin(theta * Math.PI / 180));
    theta = 198;
    let pos5 = new vec2(x + r * Math.cos(theta * Math.PI / 180), y + r * Math.sin(theta * Math.PI / 180));

    c.drawFilledCircle(pos1.x, pos1.y, oSize, colO1.r, colO1.g, colO1.b);
    c.drawFilledCircle(pos2.x, pos2.y, oSize, colO1.r, colO1.g, colO1.b);
    c.drawFilledCircle(pos3.x, pos3.y, oSize, colO1.r, colO1.g, colO1.b);
    c.drawFilledCircle(pos4.x, pos4.y, oSize, colO1.r, colO1.g, colO1.b);
    c.drawFilledCircle(pos5.x, pos5.y, oSize, colO1.r, colO1.g, colO1.b);
    c.drawCircle(pos1.x, pos1.y, oSize, colO2.r, colO2.g, colO2.b);
    c.drawCircle(pos2.x, pos2.y, oSize, colO2.r, colO2.g, colO2.b);
    c.drawCircle(pos3.x, pos3.y, oSize, colO2.r, colO2.g, colO2.b);
    c.drawCircle(pos4.x, pos4.y, oSize, colO2.r, colO2.g, colO2.b);
    c.drawCircle(pos5.x, pos5.y, oSize, colO2.r, colO2.g, colO2.b);

    r = aR3Radius;
    theta = 275;
    let pos6 = new vec2(x + r * Math.cos(theta * Math.PI / 180), y + r * Math.sin(theta * Math.PI / 180));
    theta = 54;
    let pos7 = new vec2(x + r * Math.cos(theta * Math.PI / 180), y + r * Math.sin(theta * Math.PI / 180));

    let explosionScale = 5.12;
    c.drawCircle(pos6.x, pos6.y, 2);
    c.drawCircle(pos7.x, pos7.y, 2);
    c.drawCircle(pos6.x, pos6.y, oRadius * explosionScale, 255);

}
function drawMarkers() {
    // Marker Variables
    let mRadius = (aR2Radius - aR3Radius) / 2;
    let mScale = 0.9;
    let mSize = mRadius * mScale;
    let mDistFromCenter = aR3Radius + mRadius - 1;
    let mCornerDist = mDistFromCenter * .707;
    let colA = new color(255, 0, 0);
    let colB = new color(255, 255, 0);
    let colC = new color(0, 0, 255);
    let colD = new color(255, 0, 255);

    let posA = new vec2(w / 2, h / 2 - mDistFromCenter);
    let posB = new vec2(w / 2 + mCornerDist, h / 2 - mCornerDist);
    let posC = new vec2(w / 2 - mDistFromCenter, h / 2);
    let posD = new vec2(w / 2 + mCornerDist, h / 2 + mCornerDist);
    let pos1 = new vec2(w / 2, h / 2 + mDistFromCenter);
    let pos2 = new vec2(w / 2 - mCornerDist, h / 2 + mCornerDist);
    let pos3 = new vec2(w / 2 + mDistFromCenter, h / 2);
    let pos4 = new vec2(w / 2 - mCornerDist, h / 2 - mCornerDist);

    // Draw Markers
    c.drawFilledCircle(posA.x, posA.y, mSize, colA.r, colA.g, colA.b); // A
    c.drawFilledCircle(posB.x, posB.y, mSize, colB.r, colB.g, colB.b); // B
    c.drawFilledCircle(posC.x, posC.y, mSize, colC.r, colC.g, colC.b); // C
    c.drawFilledCircle(posD.x, posD.y, mSize, colD.r, colD.g, colD.b); // D
    c.drawFilledCircle(pos1.x, pos1.y, mSize, colA.r, colA.g, colA.b); // 1
    c.drawFilledCircle(pos2.x, pos2.y, mSize, colB.r, colB.g, colB.b); // 2
    c.drawFilledCircle(pos3.x, pos3.y, mSize, colC.r, colC.g, colC.b); // 3
    c.drawFilledCircle(pos4.x, pos4.y, mSize, colD.r, colD.g, colD.b); // 4
    c.drawCircle(posA.x, posA.y, mSize, 0, 0, 0); // A
    c.drawCircle(posB.x, posB.y, mSize, 0, 0, 0); // B
    c.drawCircle(posC.x, posC.y, mSize, 0, 0, 0); // C
    c.drawCircle(posD.x, posD.y, mSize, 0, 0, 0); // D
    c.drawCircle(pos1.x, pos1.y, mSize, 0, 0, 0); // 1
    c.drawCircle(pos2.x, pos2.y, mSize, 0, 0, 0); // 2
    c.drawCircle(pos3.x, pos3.y, mSize, 0, 0, 0); // 3
    c.drawCircle(pos4.x, pos4.y, mSize, 0, 0, 0); // 4
}

class player {
    pos = new vec2();
    vel = new vec2();
    keyU = false;
    keyD = false;
    keyL = false;
    keyR = false;
    fPos = new vec2();
    sPos = new vec2();
    forcedMove = false;
    fsTime = 0;
    feTime = 0;
    constructor(x = 0, y = 20) {
        this.pos.x = x;
        this.pos.y = y;
        window.addEventListener("keydown", (e) => {
            if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
                e.preventDefault();
                switch (e.key) {
                    case "ArrowUp":
                        this.keyD = true;
                        break;
                    case "ArrowDown":
                        this.keyU = true;
                        break;
                    case "ArrowLeft":
                        this.keyL = true;
                        break;
                    case "ArrowRight":
                        this.keyR = true;
                        break;
                }
            }
        });
        window.addEventListener("keyup", (e) => {
            if (["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"].includes(e.key)) {
                e.preventDefault();
                switch (e.key) {
                    case "ArrowUp":
                        this.keyD = false;
                        break;
                    case "ArrowDown":
                        this.keyU = false;
                        break;
                    case "ArrowLeft":
                        this.keyL = false;
                        break;
                    case "ArrowRight":
                        this.keyR = false;
                        break;
                }
            }
        });
    }
    forceMoveAway(ePos) {
        this.sPos = this.pos.copy;
        this.fPos = this.pos.sub(ePos).normalize.mul(50);



        this.fsTime = new Date() * 1;
        this.feTime = this.fsTime + 1000;
        this.forcedMove = true;
    }
    reset() { this.x = 0; this.y = 20; }
    update() {
        if (this.forcedMove) {
            let t = (new Date()) - this.fsTime;
            let eT = this.feTime - this.fsTime;
            const lerp = (a, b) => {
                return b.sub(a).mul(t / eT).add(a);
            };
            if (t >= eT) {
                this.pos = this.fPos;
                this.forcedMove = false;
            }
            else {
                this.pos = lerp(this.sPos, this.fPos);
            }
        }
        else {
            let mVel = new vec2(0, 0);
            if (this.keyL)
                mVel.x -= 1;
            if (this.keyR)
                mVel.x += 1;
            if (this.keyD)
                mVel.y -= 1;
            if (this.keyU)
                mVel.y += 1;
            let speed = aRadius * 0.05;
            this.pos.x += mVel.x * dTime * speed;
            this.pos.y += mVel.y * dTime * speed;
        }

    }
    draw() {
        let pSize = aRadius * 0.05;
        let pCol = new color(255, 255, 255);
        let pOut = new color(0, 0, 0);
        c.drawFilledCircle(w / 2 + this.pos.x * dTheta, h / 2 + this.pos.y * dTheta, pSize, pCol.r, pCol.g, pCol.b);
        c.drawCircle(w / 2 + this.pos.x * dTheta, h / 2 + this.pos.y * dTheta, pSize, pOut.r, pOut.g, pOut.b);
    }
}
class aoeMarker {
    pos = new vec2();
    trapped = false;
    state = -1;
    eSize = 0;
    constructor(theta = 0) {
        this.pos.x = Math.cos(theta * Math.PI / 180);
        this.pos.y = Math.sin(theta * Math.PI / 180);
    }
    update() {
        let speed = 400;
        if (this.state == 2) {
            this.eSize += dTime * speed;
            if (this.eSize > 100) {
                this.eSize = 0;
                this.state = 1;
                this.trapped = false;
            }
        }
        if (this.state == 3) {
            this.eSize += dTime * speed;
            if (this.eSize > 100) {
                this.eSize = 0;
                this.state = 4;
            }
        }
    }
    draw() {
        // AOE Radius
        let oR = (aR1Radius - aR3Radius) / 2;
        // Distance from Center
        let dR = aR3Radius + (oR * 0.8);
        // Colors
        let colA = new color(220, 124, 74);
        let colB = new color(233, 198, 117);
        let colC = new color(245, 193, 255);
        let colD = new color(124, 97, 172);

        switch (this.state) {
            case 0:
                {
                    // Pulse Radius
                    let t = lTime / 3000;
                    let fT = t - Math.floor(t);
                    let pR = Math.abs(oR * Math.sin(fT) * 1.15);

                    let x = (w / 2) + dR * this.pos.x;
                    let y = (h / 2) + dR * this.pos.y;
                    c.drawFilledCircle(x, y, oR, colA.r, colA.g, colA.b);
                    c.drawCircle(x, y, oR, colB.r, colB.g, colB.b);
                    c.drawCircle(x, y, pR, colB.r, colB.g, colB.b);
                }
                break;
            case 1:
                {
                    let oSize = aRadius * 0.05;
                    let tSize = oSize * 0.5;

                    let x = (w / 2) + dR * this.pos.x;
                    let y = (h / 2) + dR * this.pos.y;
                    c.drawFilledCircle(x, y, oSize, colA.r, colA.g, colA.b);
                    c.drawCircle(x, y, oSize, colB.r, colB.g, colB.b);

                    if (this.trapped) {
                        const drawLightning = (x, y) => {
                            c.drawFilledCircle(x, y, tSize, colC.r, colC.g, colC.b);
                            c.drawCircle(x, y, tSize, colD.r, colD.g, colD.b);
                        }
                        let cos = oR * Math.cos(lTime / 1000) * 0.5;
                        let sin = oR * Math.sin(lTime / 1000) * 0.5;
                        drawLightning(x + sin, y + cos);
                        drawLightning(x - sin, y - cos);
                        drawLightning(x + cos, y - sin);
                        drawLightning(x - cos, y + sin);
                    }
                }
                break;
            case 2:
                {
                    // trap explode
                    let x = (w / 2) + dR * this.pos.x;
                    let y = (h / 2) + dR * this.pos.y;
                    let eR = oR * this.eSize / 100;
                    c.drawFilledCircle(x, y, eR, colA.r, colA.g, colA.b);
                    c.drawCircle(x, y, eR, colB.r, colB.g, colB.b);
                }
                break;
            case 3:
                {
                    // big aoe explode
                    let x = (w / 2) + dR * this.pos.x;
                    let y = (h / 2) + dR * this.pos.y;
                    let eR = oR * 5.5 * this.eSize / 100;
                    c.drawFilledCircle(x, y, eR, colA.r, colA.g, colA.b);
                    c.drawCircle(x, y, eR, colB.r, colB.g, colB.b);
                }
                break;
        }
    }
}
class boss {
    pos = new vec2();
    wPos = new vec2();
    state = -1;
    casting = false;
    cCast = 0;
    cTime = 0;
    remaining = []
    jumpTarget = 0;
    acting = false;
    patterns = [];
    trapPatterns = [];
    pattern = [];
    trapPattern = [];
    explodeTarget = 0;
    constructor() {
        this.reset();
        this.patterns = [
            [0, 2, 4, 1, 3],
            [0, 3, 1, 4, 2],
            [1, 3, 0, 2, 4],
            [1, 4, 2, 0, 3],
            [2, 4, 1, 3, 0],
            [2, 0, 3, 1, 4],
            [3, 1, 4, 2, 0],
            [3, 0, 2, 4, 1],
            [4, 1, 3, 0, 2],
            [4, 2, 0, 3, 1]
        ];
        this.trapPatterns = [
            [0, 1, 0, 1, 0],
            [0, 1, 0, 0, 1],
            [0, 0, 1, 0, 1]
        ];
    }
    reset() {
        this.pos.x = 0;
        this.pos.y = 0;
        this.wPos.x = 0;
        this.wPos.y = 0;
        this.state = -1;
        this.casting = false;
        this.cCast = 0;
        this.cTime = 0;
        this.remaining = [];
        this.jumpTarget = 0;
        this.acting = false;
        this.pattern = [];
        this.trapPattern = [];
        this.explodeTarget = 0;
        aoeMarkers.forEach(m => { m.state = -1; });
    }
    update() {
        if (this.acting)
            return;
        this.acting = true;
        const lerp = (a, b) => {
            return b.sub(a).mul(this.cCast / this.cTime).add(a);
        };
        switch (this.state) {
            case -1:
                {
                    // no action
                    this.cTime = 3;
                    this.cCast += dTime;
                    if (this.cCast > this.cTime)
                        this.state = 0;

                    let i = Math.floor(Math.random() * this.patterns.length);
                    this.pattern = this.patterns[i].slice();
                    this.remaining = this.pattern.slice();

                    let j = Math.floor(Math.random() * this.trapPatterns.length);
                    this.trapPattern = this.trapPatterns[j].slice();

                    this.acting = false;
                    return;
                }
                break;
            case 0:
                {
                    // spawn aoes, begin casting leaping lift
                    this.casting = true;
                    this.cCast = 0;
                    this.cTime = 2.7;
                    aoeMarkers.forEach(m => { m.state = 0; });
                    this.state = 1;
                    this.acting = false;
                    return;
                }
                break;
            case 1:
                {
                    // casting leaping lift
                    this.cCast += dTime;
                    if (this.cCast > this.cTime) {
                        // cast resolved, prepare to jump
                        aoeMarkers.forEach(m => { m.state = 1; });
                        this.casting = false;
                        this.cCast = 0;
                        this.cTime = 3;
                        this.state = 2;

                    }
                    this.acting = false;
                    return;
                }
            case 2:
                {
                    // waiting to jump
                    this.cCast += dTime;
                    if (this.cCast > this.cTime) {
                        this.cCast = 0;
                        this.cTime = 1.5;
                        this.wPos = this.pos;
                        if (this.remaining.length > 0) {
                            // move to jump phase
                            this.jumpTarget = this.remaining.pop();
                            this.state = 3;
                        }
                        else {
                            // jump to middle
                            this.state = 4;
                        }
                    }
                    this.acting = false;
                    return;
                }
                break;
            case 3:
                {
                    // jump between swords
                    let tar = aoeMarkers[this.jumpTarget].pos.mul(56);
                    this.cCast += dTime;
                    if (this.cCast > this.cTime)
                        this.cCast = this.cTime;
                    this.pos = lerp(this.wPos, tar);
                    if (this.cCast == this.cTime) {
                        aoeMarkers[this.jumpTarget].trapped = this.trapPattern.shift() == 1;
                        this.state = 2;
                        this.cCast = 0;
                    }
                    this.acting = false;
                    return;
                }
                break;
            case 4:
                {
                    // move to middle
                    let tar = new vec2(0, 0);
                    this.cCast += dTime;
                    if (this.cCast > this.cTime)
                        this.cCast = this.cTime;
                    this.pos = lerp(this.wPos, tar);
                    if (this.cCast == this.cTime) {
                        this.state = 5;
                        this.cCast = 0;
                        this.cTime = 1.7;
                        this.remaining = this.pattern.slice();
                        this.casting = true;
                    }
                    this.acting = false;
                    return;
                }
                break;
            case 5:
                {
                    // cast swordpointe
                    this.cCast += dTime;
                    if (this.cCast > this.cTime) {
                        this.casting = false;
                        if (this.remaining.length > 0) {
                            this.explodeTarget = this.remaining.pop();
                            this.cTime = 1.5;
                            this.state = 6;
                        }

                    }

                    this.acting = false;
                    return;
                }
                break;
            case 6:
                {
                    // trigger an explosion
                    if (aoeMarkers[this.explodeTarget].trapped) {
                        aoeMarkers[this.explodeTarget].state = 2;
                        this.cTime = 3.5;
                    }
                    else {
                        aoeMarkers[this.explodeTarget].state = 3;
                        ply.forceMoveAway(aoeMarkers[this.explodeTarget].pos.mul(56));
                        this.cTime = 2.5;
                    }

                    this.state = 7;
                    this.cCast = 0;
                    this.acting = false;
                    return;
                }
                break;
            case 7:
                {
                    // wait for the next explosion
                    this.cCast += dTime;
                    if (this.cCast > this.cTime) {
                        if (aoeMarkers[this.explodeTarget].state == 1) {
                            this.state = 6;
                        }
                        else {
                            this.state = 5;
                        }

                        this.cCast = 0;
                    }
                    this.acting = false;
                    return;
                }
        }
    }
    draw() {
        let pSize = aRadius * 0.1;
        let pCol = new color(255, 100, 100);
        let pOut = new color(0, 0, 0);
        let x = w / 2 + this.pos.x * dTheta;
        let y = h / 2 + this.pos.y * dTheta;

        let bColA = new color(255, 251, 240);
        let bColB = new color(129, 113, 49);

        c.drawFilledCircle(x, y, pSize, pCol.r, pCol.g, pCol.b);
        c.drawCircle(x, y, pSize, pOut.r, pOut.g, pOut.b);
        if (this.casting) {
            let bW = pSize * 2;
            let bpW = bW * this.cCast / this.cTime;
            let bX = x - pSize;
            let bY = y - pSize * 1.3;
            c.drawFilledRect(bX, bY, bpW, pSize * 0.2, bColA.r, bColA.g, bColA.b);
            c.drawRect(bX, bY, bW, pSize * 0.2, bColB.r, bColB.g, bColB.b);
        }
    }
}

function calcArena() {
    let s = Math.min(w, h);
    aRadius = s / 2.1;
    aR1Radius = aRadius * 0.78;
    aR2Radius = aRadius * 0.62;
    aR3Radius = aRadius * 0.45;
    aR4Radius = aRadius * 0.3;
    dTheta = aRadius * 0.01;
}

var lTime = 0;
var dTime = 0;
function updateTimeDelta() {
    let cTime = new Date();
    if (!lTime)
        lTime = cTime;
    dTime = (cTime - lTime) / 1000;
    lTime = cTime;
}

// INIT ARENA
var aRadius = 0;
var aR1Radius = 0;
var aR2Radius = 0;
var aR3Radius = 0;
var aR4Radius = 0;
var dTheta = 0;
calcArena();

var aoeMarkers = [];
aoeMarkers.push(new aoeMarker(270));
aoeMarkers.push(new aoeMarker(342));
aoeMarkers.push(new aoeMarker(54));
aoeMarkers.push(new aoeMarker(126));
aoeMarkers.push(new aoeMarker(198));

var ply = new player();
var bss = new boss();


setInterval(function () {
    updateTimeDelta();
    c.clear();
    calcArena();


    drawArena();
    //drawAoeMarkers();
    //drawMarkers();

    aoeMarkers.forEach(m => m.update());
    aoeMarkers.forEach(m => m.draw());

    bss.update();
    bss.draw();

    ply.update();
    ply.draw();
}, 20);


import zlib from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const W = 1200;
const H = 630;
const raw = Buffer.alloc((W * 3 + 1) * H);

const BG = [15, 31, 77];
const CIRCLE = [30, 58, 138];
const LINE = [255, 255, 255];
const DOT = [52, 211, 153];
const FADED = [148, 163, 184];

function setPixel(x, y, c) {
  if (x < 0 || x >= W || y < 0 || y >= H) return;
  const i = y * (W * 3 + 1) + 1 + x * 3;
  raw[i] = c[0];
  raw[i + 1] = c[1];
  raw[i + 2] = c[2];
}

function fillCircle(cx, cy, r, c) {
  for (let y = cy - r; y <= cy + r; y++) {
    for (let x = cx - r; x <= cx + r; x++) {
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy <= r * r) setPixel(x, y, c);
    }
  }
}

function fillRect(x0, y0, x1, y1, c) {
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) setPixel(x, y, c);
}

function drawLine(x0, y0, x1, y1, width, c) {
  const steps = Math.ceil(Math.hypot(x1 - x0, y1 - y0));
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = Math.round(x0 + (x1 - x0) * t);
    const y = Math.round(y0 + (y1 - y0) * t);
    fillCircle(x, y, width / 2, c);
  }
}

for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) setPixel(x, y, BG);

fillCircle(180, 180, 105, CIRCLE);
drawLine(125, 225, 160, 180, 18, [255, 255, 255]);
drawLine(160, 180, 185, 205, 18, [255, 255, 255]);
drawLine(185, 205, 235, 135, 18, [255, 255, 255]);
drawLine(235, 135, 195, 135, 18, [255, 255, 255]);
drawLine(235, 135, 235, 175, 18, [255, 255, 255]);

const pts = [
  [380, 470],
  [480, 430],
  [590, 445],
  [700, 390],
  [810, 410],
  [920, 330],
  [1030, 350],
];
for (let i = 0; i < pts.length - 1; i++) {
  drawLine(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 12, i < 2 ? FADED : LINE);
}
fillCircle(1030, 350, 14, DOT);
fillRect(900, 500, 1010, 505, [71, 85, 125]);
fillRect(700, 500, 780, 505, [71, 85, 125]);
fillRect(430, 500, 510, 505, [71, 85, 125]);
fillRect(340, 470, 350, 505, [71, 85, 125]);
fillRect(1040, 470, 1050, 505, [71, 85, 125]);

const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const t = Buffer.from(type, 'ascii');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crc]);
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8;
ihdr[9] = 2;
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
]);

const out = path.join(__dirname, '..', 'public', 'og-image.png');
fs.writeFileSync(out, png);
console.log('Wrote', out, png.length, 'bytes');

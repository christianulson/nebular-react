/* eslint-disable no-bitwise */
export function shade(color, weight) {
  return mix('#000000', color, weight);
}

export function tint(color, weight) {
  return mix('#ffffff', color, weight);
}

export function mix(color1, color2, weight) {
  const d2h = (d) => d.toString(16);
  const h2d = (h) => parseInt(h, 16);

  let result = '#';
  for (let i = 1; i < 7; i += 2) {
    const firstPart = h2d(color1.substr(i, 2));
    const secondPart = h2d(color2.substr(i, 2));
    const resultPart = d2h(Math.floor(secondPart + (firstPart - secondPart) * (weight / 100.0)));
    result += `0${resultPart}`.slice(-2);
  }
  return result;
}

export function hexToRgbA(hex, alpha) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${alpha})`;
  }
  throw new Error('Bad Hex');
}

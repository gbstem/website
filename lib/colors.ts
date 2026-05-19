export function interpolateColor(colors: string[], factor: number) {
  if (colors.length === 0) return '#000000';
  if (colors.length === 1) return colors[0];
  if (factor <= 0) return colors[0];
  if (factor >= 1) return colors[colors.length - 1];

  // Map factor to segments
  const segmentCount = colors.length - 1;
  const segmentSize = 1 / segmentCount;
  const index = Math.min(Math.floor(factor / segmentSize), segmentCount - 1);
  const localFactor = (factor - index * segmentSize) / segmentSize;

  const color1 = colors[index];
  const color2 = colors[index + 1];

  const c1 =
    color1.length === 4
      ? '#' + color1[1] + color1[1] + color1[2] + color1[2] + color1[3] + color1[3]
      : color1;
  const c2 =
    color2.length === 4
      ? '#' + color2[1] + color2[1] + color2[2] + color2[2] + color2[3] + color2[3]
      : color2;

  const result1 = c1
    .slice(1)
    .match(/.{2}/g)
    ?.map((hex) => parseInt(hex, 16)) || [0, 0, 0];
  const result2 = c2
    .slice(1)
    .match(/.{2}/g)
    ?.map((hex) => parseInt(hex, 16)) || [0, 0, 0];

  const r = Math.round(result1[0] + localFactor * (result2[0] - result1[0]));
  const g = Math.round(result1[1] + localFactor * (result2[1] - result1[1]));
  const b = Math.round(result1[2] + localFactor * (result2[2] - result1[2]));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

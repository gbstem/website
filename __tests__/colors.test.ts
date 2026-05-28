import { interpolateColor } from '@/lib/colors';

describe('colors lib', () => {
  describe('interpolateColor', () => {
    it('returns black for empty colors array', () => {
      expect(interpolateColor([], 0.5)).toBe('#000000');
    });

    it('returns the first color if only one color is provided', () => {
      expect(interpolateColor(['#ff0000'], 0.5)).toBe('#ff0000');
    });

    it('returns the start color if factor is 0 or less', () => {
      expect(interpolateColor(['#000000', '#ffffff'], 0)).toBe('#000000');
      expect(interpolateColor(['#000000', '#ffffff'], -0.5)).toBe('#000000');
    });

    it('returns the end color if factor is 1 or more', () => {
      expect(interpolateColor(['#000000', '#ffffff'], 1)).toBe('#ffffff');
      expect(interpolateColor(['#000000', '#ffffff'], 1.5)).toBe('#ffffff');
    });

    it('interpolates exactly halfway between two colors', () => {
      expect(interpolateColor(['#000000', '#ffffff'], 0.5)).toBe('#808080');
      expect(interpolateColor(['#ff0000', '#0000ff'], 0.5)).toBe('#800080');
    });

    it('supports multi-stop gradients', () => {
      // 0.25 is halfway between 1st (#ff0000) and 2nd (#00ff00)
      expect(interpolateColor(['#ff0000', '#00ff00', '#0000ff'], 0.25)).toBe('#808000');

      // 0.5 is exactly the 2nd color (#00ff00)
      expect(interpolateColor(['#ff0000', '#00ff00', '#0000ff'], 0.5)).toBe('#00ff00');

      // 0.75 is halfway between 2nd (#00ff00) and 3rd (#0000ff)
      expect(interpolateColor(['#ff0000', '#00ff00', '#0000ff'], 0.75)).toBe('#008080');
    });

    it('supports 3-character hex color codes', () => {
      expect(interpolateColor(['#000', '#fff'], 0.5)).toBe('#808080');
      expect(interpolateColor(['#f00', '#00f'], 0.5)).toBe('#800080');
    });
  });
});

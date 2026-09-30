import { describe, it, expect, vi } from 'vitest';
import { unique, groupBy, chunk, deepClone, memoize, counter } from '../src/functions.js';

describe('Part 1: Functions', () => {
  describe('unique', () => {
    it('removes duplicate primitive values', () => {
      expect(unique([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
    });

    it('returns empty array when given empty array', () => {
      expect(unique([])).toEqual([]);
    });

    it('throws error for invalid argument', () => {
      expect(() => unique('not an array')).toThrow(TypeError);
    });
  });

  describe('groupBy', () => {
    it('groups objects by selector function', () => {
      const data = [
        { type: 'coffee', name: 'Espresso' },
        { type: 'tea', name: 'Green' },
        { type: 'coffee', name: 'Latte' }
      ];
      const result = groupBy(data, (item) => item.type);
      expect(result).toEqual({
        coffee: [
          { type: 'coffee', name: 'Espresso' },
          { type: 'coffee', name: 'Latte' }
        ],
        tea: [{ type: 'tea', name: 'Green' }]
      });
    });

    it('throws TypeError if keyFn is missing or not a function', () => {
      expect(() => groupBy([1, 2], null)).toThrow(TypeError);
    });
  });

  describe('chunk', () => {
    it('splits array into specified sizes', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    it('returns empty array if size is 0 or negative', () => {
      expect(chunk([1, 2, 3], 0)).toEqual([]);
    });
  });

  describe('deepClone', () => {
    it('deeply clones nested objects, arrays and Date', () => {
      const original = {
        a: 1,
        b: [2, { c: 3 }],
        date: new Date('2026-09-30')
      };
      const cloned = deepClone(original);

      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      expect(cloned.b).not.toBe(original.b);
      expect(cloned.date).not.toBe(original.date);
    });
  });

  describe('memoize', () => {
    it('caches the function evaluation result', () => {
      const slowFn = vi.fn((x) => x * 2);
      const memoized = memoize(slowFn);

      expect(memoized(5)).toBe(10);
      expect(memoized(5)).toBe(10);
      expect(slowFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('counter', () => {
    it('maintains state via closures', () => {
      const c = counter(10);
      expect(c.value()).toBe(10);
      expect(c.inc()).toBe(11);
      expect(c.dec()).toBe(10);
      expect(c.value()).toBe(10);
    });
  });
});

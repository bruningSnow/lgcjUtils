import '@testing-library/jest-dom';
import arrayFlat from './index';

describe('arrayFlat', () => {
  it('flatArray [1, 2, 3]', () => {
    expect(arrayFlat({ list: [1, 2, 3] })).toEqual([1, 2, 3]);
  });
  it('flatArray [1, 2, 3], () => void', () => {
    expect(arrayFlat({ list: [1, 2, 3], cb: (value) => value * 2 })).toEqual([2, 4, 6]);
  });
  it('flatArray [1, [[2], 3]]', () => {
    expect(arrayFlat({ list: [1, [[2], 3]] })).toEqual([1, 2, 3]);
  });
});

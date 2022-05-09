import '@testing-library/jest-dom';
import arrayFilterRepeat from './index';

describe('arrayFilterRepeat', () => {
  it('arrayFilterRepeat [1, 2, 3]', () => {
    expect(arrayFilterRepeat({ list: [1, 2, 3] })).toEqual([1, 2, 3]);
  });
  it('arrayFilterRepeat [1, 2, 3], () => void', () => {
    expect(arrayFilterRepeat({ list: [1, 2, 3], cb: (value) => value * 2 })).toEqual([2, 4, 6]);
  });
  it('arrayFilterRepeat [1, [[2], 2]]', () => {
    expect(arrayFilterRepeat({ list: [1, [[2], 2]] })).toEqual([1, [[2], 2]]);
  });
  it('arrayFilterRepeat [1, [[2], 2]] isFlat', () => {
    expect(arrayFilterRepeat({ list: [1, [[2], 2]], isFlat: true })).toEqual([1, 2]);
  });
  it('arrayFilterRepeat [1, [[null], null]] isFlat', () => {
    expect(arrayFilterRepeat({ list: [1, [[null], null]], isFlat: true })).toEqual([1, null]);
  });
  it('arrayFilterRepeat [1, [[{}], {}]] isFlat', () => {
    expect(arrayFilterRepeat({ list: [1, [[{}], {}]], isFlat: true })).toEqual([1, {}]);
  });
  it('arrayFilterRepeat [1, [[function], function]] isFlat', () => {
    const fn = () => {};
    expect(arrayFilterRepeat({ list: [1, [[fn], fn]], isFlat: true })).toEqual([1, fn]);
  });
});

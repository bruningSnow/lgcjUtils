import '@testing-library/jest-dom';
import mapObject from './index';

describe('checkDataType', () => {
  it('checkDataType => 1', () => {
    const data = { aa: 1, bb: { bb_aa: 1, bb_bb: { bb_bb_aa: 2 } }, cc: 2 };
    const result = { aa: 2, bb: { bb_aa: 2, bb_bb: { bb_bb_aa: 3 } }, cc: 3 };
    expect(mapObject({ data, isDeep: true, cb: (value) => value + 1 })).toEqual(result);
  });
  it('checkDataType => 2', () => {
    const data = { aa: 1, bb: { bb_aa: 1, bb_bb: { bb_bb_aa: 2 } }, cc: 2 };
    const result = { aa: 2, bb: undefined, cc: 3 };
    const cb = (value: any) => {
      if (typeof value === 'number') {
        return value + 1;
      }
      return undefined;
    };
    expect(mapObject({ data, cb })).toEqual(result);
  });
});

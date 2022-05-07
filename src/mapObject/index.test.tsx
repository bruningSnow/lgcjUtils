import '@testing-library/jest-dom';
import checkDataType from './index';

describe('checkDataType', () => {
  it('checkDataType =》number', () => {
    expect(checkDataType({ data: 1, type: 'Number' })).toBe(true);
  });
  it('checkDataType =》boolean', () => {
    expect(checkDataType({ data: false, type: 'Boolean' })).toBe(true);
  });
  it('checkDataType =》function', () => {
    expect(checkDataType({ data: () => {}, type: 'Function' })).toBe(true);
  });
  it('checkDataType =》Boolean', () => {
    expect(checkDataType({ data: () => {}, type: 'Boolean' })).toBe(false);
  });
  it('checkDataType =》Undefined', () => {
    expect(checkDataType({ data: undefined, type: 'Undefined' })).toBe(true);
  });
  it('checkDataType =》Null', () => {
    expect(checkDataType({ data: null, type: 'Null' })).toBe(true);
  });
  it('checkDataType =》RegExp', () => {
    expect(checkDataType({ data: new RegExp('dd'), type: 'RegExp' })).toBe(true);
  });
  it('checkDataType =》Map', () => {
    expect(checkDataType({ data: new Map(), type: 'Map' })).toBe(true);
  });
});

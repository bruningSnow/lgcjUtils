import '@testing-library/jest-dom';
import hexToRgbWidthOp from './index';

describe('hexToRgbWidthOp', () => {
  it('hexToRgbWidthOp 不输入透明度', () => {
    expect(hexToRgbWidthOp({ hexColor: '#CC8E49' })).toBe('rgba(204,142,73, 1)');
  });
});

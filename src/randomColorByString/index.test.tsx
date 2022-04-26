import '@testing-library/jest-dom';
import randomColorByString from './index';

describe('randomColorByString', () => {
  it('randomColorByString 不输入透明度', () => {
    expect(randomColorByString({ name: '吴' })).toBe('rgba(204,142,73, 1)');
  });
});

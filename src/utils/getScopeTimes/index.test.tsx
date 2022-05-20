import '@testing-library/jest-dom';
import moment from 'moment';
import getScopeTimes from './index';

describe('getScopeTimes', () => {
  it('getScopeTimes day', () => {
    const [first, end] = getScopeTimes({ type: 'day' });
    expect(moment(first).format('YYYY-MM-DD')).toBe('2022-05-20');
    expect(moment(end).format('YYYY-MM-DD')).toBe('2022-05-20');
    expect(moment(first).format('YYYY-MM-DD HH:mm:ss')).toBe('2022-05-20 00:00:00');
    expect(moment(end).format('YYYY-MM-DD HH:mm:ss')).toBe('2022-05-20 23:59:59');
  });
});

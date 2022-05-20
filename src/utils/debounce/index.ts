type TCb = (value?: any) => any;

export type TDebounce = (cb: TCb, delay?: number) => TCb;

/**
 * @description 防抖：在特定时间段内事件没有被触发，代码执行一次
 * @param cb 需执行的函数
 * @param delay 时间段（单位：毫秒）
 * @returns
 */
const debounce: TDebounce = (cb, delay) => {
  let timer: any = null;

  return (...arg) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(cb.bind(null, ...arg), delay || 0);
  };
};

export default debounce;

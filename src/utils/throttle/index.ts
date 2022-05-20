type TCb = (value?: any) => any;

export type TThrottle = (cb: TCb, delay?: number) => TCb;

/**
 * @description 截流：在特定时间段内，代码执行一次
 * @param cb 需执行的函数
 * @param delay 时间段（单位：毫秒）
 * @returns
 */
const throttle: TThrottle = (cb, delay) => {
  let preTime = Date.now();
  let nowTime = -1;

  return (...arg) => {
    nowTime = Date.now();

    if (nowTime - preTime >= (delay || 0)) {
      cb(...arg);
      preTime = nowTime;
    }
  };
};

export default throttle;

export type TSleep = (delay?: number) => Promise<any>;

/**
 * @description 延时函数
 * @param delay 延迟时间（单位：毫秒）
 * @returns
 */
const sleep: TSleep = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay || 0));
};

export default sleep;

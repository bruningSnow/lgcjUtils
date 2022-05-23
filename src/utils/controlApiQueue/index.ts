type TControlApiQueueResult = (params?: any) => Promise<any>;

export type TControlApiQueue = (cb: TControlApiQueueResult) => TControlApiQueueResult;

/**
 * @description 控制请求顺序
 * 例如：连续发起两次请求
 * 请求第一次耗时 3s
 * 请求第二次耗时 1s
 * 最后 cb 请求函数只返回第二次请求返回值
 * @param cb 请求函数
 * @returns 所构建的请求函数
 */
const controlApiQueue: TControlApiQueue = (cb) => {
  let resultQue: any[] = [];
  let fetchOrderList: number[] = [];
  let fetchCount: number = 0;

  return (...arg) => {
    fetchCount++;
    return new Promise((resolve, reject) => {
      cb(...arg)
        .then((res) => {
          resultQue.push({ fetchOrder: fetchCount, result: res });
          fetchOrderList.push(fetchCount);

          if (resultQue.length === fetchCount) {
            if (resultQue.length === 1) {
              resolve(resultQue[0].result);
            } else {
              const lastFetch =
                resultQue.find(({ fetchOrder }) => fetchOrder === Math.max(...fetchOrderList)) ||
                {};

              resolve(lastFetch.result);
            }

            resultQue = [];
            fetchOrderList = [];
            fetchCount = 0;
          }
        })
        .catch((...arg) => {
          reject(...arg);
          resultQue = [];
          fetchOrderList = [];
          fetchCount = 0;
        });
    });
  };
};

export default controlApiQueue;

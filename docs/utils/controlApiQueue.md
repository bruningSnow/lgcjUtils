# controlApiQueue

```
控制请求顺序
 * 例如：连续发起两次请求
 * 请求第一次耗时 2s
 * 请求第二次耗时 1s
 * 最后 cb 请求函数只返回第二次请求返回值
```

## 代码演示:

```tsx
import React, { useState } from 'react';
import { controlApiQueue } from 'lgcjUtils';

let promiseCount_1 = 0;
const promise_1 = () => {
  promiseCount_1++;
  const copyPromiseCount = promiseCount_1;

  if (promiseCount_1 % 2 === 0) {
    return new Promise((reslove) =>
      setTimeout(() => {
        reslove(copyPromiseCount);
      }, 1000),
    );
  }

  return new Promise((reslove) =>
    setTimeout(() => {
      reslove(copyPromiseCount);
    }, 2000),
  );
};

let promiseCount_2 = 0;
const promise_2 = () => {
  promiseCount_2++;
  const copyPromiseCount = promiseCount_2;

  if (promiseCount_2 % 2 === 0) {
    return new Promise((reslove) =>
      setTimeout(() => {
        reslove(copyPromiseCount);
      }, 1000),
    );
  }

  return new Promise((reslove) =>
    setTimeout(() => {
      reslove(copyPromiseCount);
    }, 2000),
  );
};

export default () => {
  const [showApiResult_1, setShowApiResult_1] = useState<number>(0);
  const [showApiResult_2, setShowApiResult_2] = useState<number>(0);
  const fetchApi = controlApiQueue(promise_1);

  return (
    <div>
      <pre>{showApiResult_1}</pre>
      <button
        onClick={() => {
          fetchApi().then(setShowApiResult_1);
        }}
      >
        控制请求顺序
      </button>
      <pre>{showApiResult_2}</pre>
      <button
        onClick={() => {
          promise_2().then(setShowApiResult_2);
        }}
      >
        不控制请求顺序
      </button>
    </div>
  );
};
```

## 入参

| 属性 | 说明             | 类型                   | 默认值 | Version |
| ---- | ---------------- | ---------------------- | ------ | ------- |
| cb   | 需执行的请求函数 | TControlApiQueueResult | -      |         |

## 出参

| 属性   | 说明                     | 类型                   | Version |
| ------ | ------------------------ | ---------------------- | ------- |
| result | 包装后的需执行的请求函数 | TControlApiQueueResult |         |

## TControlApiQueueResult

```
type TControlApiQueueResult = (params?: any) => Promise<any>
```

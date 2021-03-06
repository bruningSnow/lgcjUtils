# debounce

```
防抖：在特定时间段内事件没有被触发，代码执行一次
```

## 代码演示:

```tsx
import React, { useState } from 'react';
import { debounce } from 'lgcjUtils';

export default () => {
  const [showCount_1, setShowCount_1] = useState<number>(0);
  const fn_1 = debounce((params) => {
    setShowCount_1(params);
  }, 1000);

  const [showCount_2, setShowCount_2] = useState<number>(0);
  const fn_2 = debounce((params) => {
    setShowCount_2(params);
  });

  return (
    <div>
      <pre>{showCount_1}</pre>
      <button onClick={() => fn_1(showCount_1 + 1)}>防抖 1000 毫秒</button>
      <pre>{showCount_2}</pre>
      <button onClick={() => fn_2(showCount_2 + 1)}>防抖 0 毫秒</button>
    </div>
  );
};
```

## 入参

| 属性  | 说明                 | 类型                 | 默认值 | Version |
| ----- | -------------------- | -------------------- | ------ | ------- |
| cb    | 需执行的函数         | (value?: any) => any | -      |         |
| delay | 时间段（单位：毫秒） | number【可选】       | 0      |         |

## 出参

| 属性   | 说明         | 类型                 | Version |
| ------ | ------------ | -------------------- | ------- |
| result | 需执行的函数 | (value?: any) => any |         |

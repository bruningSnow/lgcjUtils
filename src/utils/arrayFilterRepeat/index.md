# arrayFilterRepeat

## 代码演示:

```tsx
import React from 'react';
import { arrayFilterRepeat } from 'lgcjUtils';

export default () => (
  <div>
    <pre>{JSON.stringify(arrayFilterRepeat({ data: [1, [[2], 2]], isFlat: true }))}</pre>
    <pre>{JSON.stringify(arrayFilterRepeat({ data: [1, [[2], 2]] }))}</pre>
  </div>
);
```

## 入参

| 属性   | 说明                         | 类型                 | 默认值         | Version |
| ------ | ---------------------------- | -------------------- | -------------- | ------- |
| data   | 需要去重数组                 | any[]                | -              |         |
| isFlat | 去重前是否拉平数组           | boolean              | false 【可选】 |         |
| cb     | 数组遍历时，对单元值改造函数 | (value: any) => void | - 【可选】     |         |

## 出参

| 属性   | 说明                                                           | 类型 | Version |
| ------ | -------------------------------------------------------------- | ---- | ------- |
| result | 返回值为去重后的数组（如果传入值类型为非数组，则不做任何处理） | any  |         |

# arrayFlat

```
多维数组拉平【维度未知】
```

## 代码演示:

```tsx
import React from 'react';
import { arrayFlat } from 'lgcjUtils';

export default () => (
  <div>
    <pre>{JSON.stringify(arrayFlat({ data: [1, 2, 3] }))}</pre>
    <pre>{JSON.stringify(arrayFlat({ data: [1, 2, 3], cb: (value) => value * 2 }))}</pre>
    <pre>{JSON.stringify(arrayFlat({ data: [1, [[2], 3]] }))}</pre>
  </div>
);
```

## 入参

| 属性 | 说明                             | 类型                        | 默认值 | Version |
| ---- | -------------------------------- | --------------------------- | ------ | ------- |
| data | 需要拉平数组                     | any[]                       | -      |         |
| cb   | 数组拉平遍历时，对单元值改造函数 | (value: any) => any【可选】 | -      |         |

## 出参

| 属性   | 说明                                                           | 类型 | Version |
| ------ | -------------------------------------------------------------- | ---- | ------- |
| result | 返回值为去重后的数组（如果传入值类型为非数组，则不做任何处理） | any  |         |

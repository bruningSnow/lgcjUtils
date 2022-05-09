# mapObject

```
遍历对象【可深度遍历】
```

## 代码演示:

```tsx
import React from 'react';
import { mapObject } from 'lgcjUtils';

export default () => {
  const data = { aa: 1, bb: { bb_aa: 1, bb_bb: { bb_bb_aa: 2 } }, cc: 2 };
  const cb = (value: any) => {
    if (typeof value === 'number') {
      return value + 1;
    }
    return value;
  };

  return (
    <div>
      <pre>{JSON.stringify(mapObject({ data, isDeep: true, cb: (value) => value + 1 }))}</pre>
      <pre>{JSON.stringify(mapObject({ data, cb }))}</pre>
    </div>
  );
};
```

## 入参

| 属性   | 说明                         | 类型                        | 默认值 | Version |
| ------ | ---------------------------- | --------------------------- | ------ | ------- |
| data   | 需遍历对象                   | Record<string, any>         | -      |         |
| isDeep | 是否深度遍历                 | boolean【可选】             | false  |
| cb     | 对象遍历时，对单元值改造函数 | (value: any) => any【可选】 | -      |

## 出参

| 属性   | 说明                                                           | 类型 | Version |
| ------ | -------------------------------------------------------------- | ---- | ------- |
| result | 返回值为遍历后的对象（如果传入值类型为非对象，则不做任何处理） | any  |         |

# getScopeTimes

```
获取前 x 日/周/月/季/年 的开始及结束时间
```

## 代码演示:

```tsx
import React from 'react';
import moment from 'moment';
import { getScopeTimes } from 'lgcjUtils';

export default () => {
  const [first, end] = getScopeTimes({ type: 'day' });
  return (
    <div>
      <pre>{moment(first).format('YYYY-MM-DD HH:mm:ss')}</pre>
    </div>
  );
};
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

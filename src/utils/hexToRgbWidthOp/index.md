# hexToRgbWidthOp

```
hex（十六进制） 转成 十进制 ragb
```

## 代码演示:

```tsx
import React from 'react';
import { hexToRgbWidthOp } from 'lgcjUtils';

export default () => (
  <div>
    <pre>{hexToRgbWidthOp({ hexColor: '#CC8E49' })}</pre>
    <pre>{hexToRgbWidthOp({ hexColor: '#CC8E49', opacity: 0.4 })}</pre>
  </div>
);
```

## 入参

| 属性     | 说明                         | 类型   | 默认值 | Version |
| -------- | ---------------------------- | ------ | ------ | ------- |
| hexColor | 十六进制色值 如 #fff/#ffffff | string | -      |         |
| opacity  | 透明度【可选】               | number | 1.0    |

## 出参

| 属性   | 说明                           | 类型   | Version |
| ------ | ------------------------------ | ------ | ------- |
| result | 返回值为转化为 rgba 表达式色值 | string |         |

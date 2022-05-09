# randomColorByString

```
根据 name 中每个字符的 UTF-16 code 值总和，在 colorList 中选取色值并转为 rgb
```

## 代码演示:

```tsx
import React from 'react';
import { randomColorByString } from 'lgcjUtils';

export default () => (
  <div>
    <pre>{randomColorByString({ name: 'lgcjUtil' })}</pre>
    <pre>{randomColorByString({ name: 'lgcjUtil', opacity: 0.4 })}</pre>
  </div>
);
```

## 入参

| 属性      | 说明                             | 类型             | 默认值           | Version |
| --------- | -------------------------------- | ---------------- | ---------------- | ------- |
| name      | 输入 name 字符，用于确定色值获取 | string           | -                |         |
| opacity   | 透明度                           | number【可选】   | 1.0              |
| colorList | 十六进制随机色值总列表           | string[]【可选】 | DefaultColorList |

## 出参

| 属性   | 说明                           | 类型   | Version |
| ------ | ------------------------------ | ------ | ------- |
| result | 返回值为转化为 rgba 表达式色值 | string |         |

## DefaultColorList

```
['#5A8BE0' , '#F07D7D' , '#8FB85F' , '#3E9BAD' , '#CC8E49' , '#986ACC']
```

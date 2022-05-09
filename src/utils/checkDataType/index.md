# checkDataType

## 代码演示:

```tsx
import React from 'react';
import { checkDataType } from 'lgcjUtils';

export default () => (
  <div>
    <pre>{JSON.stringify(checkDataType({ data: 1, type: 'Number' }))}</pre>
    <pre>{JSON.stringify(checkDataType({ data: [], type: 'Array' }))}</pre>
    <pre>{JSON.stringify(checkDataType({ data: [], type: 'Object' }))}</pre>
    <pre>{JSON.stringify(checkDataType({ data: new Map(), type: 'Map' }))}</pre>
    <pre>{JSON.stringify(checkDataType({ data: new Set(), type: 'Set' }))}</pre>
    <pre>{JSON.stringify(checkDataType({ data: new Date(), type: 'Date' }))}</pre>
  </div>
);
```

## 入参

| 属性 | 说明         | 类型      | 默认值 | Version |
| ---- | ------------ | --------- | ------ | ------- |
| data | 检测数据     | any       | -      |         |
| type | 检测数据类型 | TDataType | -      |         |

## 出参

| 属性   | 说明                                                         | 类型    | Version |
| ------ | ------------------------------------------------------------ | ------- | ------- |
| result | 返回值（true），则 data 的数据类型与 type 一致；反之，则不同 | boolean |         |

## TDataType

```
type TDataType =
  | 'String'
  | 'Number'
  | 'Boolean'
  | 'Undefined'
  | 'Null'
  | 'Object'
  | 'Function'
  | 'Array'
  | 'Date'
  | 'RegExp'
  | 'Map'
  | 'Set'
```

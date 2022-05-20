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
  const [first_day, end_day] = getScopeTimes({ type: 'day', i: 2 });
  const [first_week, end_week] = getScopeTimes({ type: 'week', i: 2 });
  const [first_month, end_month] = getScopeTimes({ type: 'month', i: 2 });
  const [first_quarter, end_quarter] = getScopeTimes({ type: 'quarter', i: 2 });
  const [first_year, end_year] = getScopeTimes({ type: 'year', i: 2 });

  return (
    <div>
      <pre>
        两天前： {moment(first_day).format('YYYY-MM-DD HH:mm:ss')} -{' '}
        {moment(end_day).format('YYYY-MM-DD HH:mm:ss')}
      </pre>
      <pre>
        两周前：{moment(first_week).format('YYYY-MM-DD HH:mm:ss')} -{' '}
        {moment(end_week).format('YYYY-MM-DD HH:mm:ss')}
      </pre>
      <pre>
        两月前：{moment(first_month).format('YYYY-MM-DD HH:mm:ss')} -{' '}
        {moment(end_month).format('YYYY-MM-DD HH:mm:ss')}
      </pre>
      <pre>
        两季度前：{moment(first_quarter).format('YYYY-MM-DD HH:mm:ss')} -{' '}
        {moment(end_quarter).format('YYYY-MM-DD HH:mm:ss')}
      </pre>
      <pre>
        两年前：{moment(first_year).format('YYYY-MM-DD HH:mm:ss')} -{' '}
        {moment(end_year).format('YYYY-MM-DD HH:mm:ss')}
      </pre>
    </div>
  );
};
```

## 入参

| 属性 | 说明         | 类型           | 默认值 | Version |
| ---- | ------------ | -------------- | ------ | ------- |
| type | 时间区类型   | TType          | -      |         |
| i    | 前 i ${type} | number【可选】 | 0      |         |

## 出参

| 属性   | 说明           | 类型             | Version |
| ------ | -------------- | ---------------- | ------- |
| result | 开始/最后 时间 | [Moment, Moment] |         |

## TType

```
'day' | 'week' | 'month' | 'quarter' | 'year'
```

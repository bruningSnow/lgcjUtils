# sleep

```
延时函数
```

## 代码演示:

```tsx
import React, { useState } from 'react';
import { sleep } from 'lgcjUtils';

export default () => {
  const [showCount, setShowCount] = useState<number>(0);

  return (
    <div>
      <pre>{showCount}</pre>
      <button
        onClick={() => {
          sleep(1000).then(() => {
            setShowCount(showCount + 1);
          });
        }}
      >
        延迟 1000 毫秒执行
      </button>
    </div>
  );
};
```

## 入参

| 属性  | 说明                   | 类型           | 默认值 | Version |
| ----- | ---------------------- | -------------- | ------ | ------- |
| delay | 延迟时间（单位：毫秒） | number【可选】 | 0      |         |

## 出参

| 属性   | 说明 | 类型    | Version |
| ------ | ---- | ------- | ------- |
| result |      | Promise |         |

# openWebview

```
新开窗口：防止异步窗口新开被拦截
```

## 代码演示:

```tsx
import React from 'react';
import { openWebview } from 'lgcjUtils';

export default () => {
  const linkPromise = () =>
    new Promise((resolve) => {
      setTimeout(
        () => resolve('https://blog.csdn.net/h1234561234561?spm=1000.2115.3001.5343'),
        1000,
      );
    });

  return (
    <div>
      <button onClick={() => openWebview(linkPromise())}>异步新开页面</button>
    </div>
  );
};
```

## 入参

| 属性        | 说明                           | 类型           | 默认值 | Version |
| ----------- | ------------------------------ | -------------- | ------ | ------- |
| linkPromise | 获取新开窗口地址的异步 Promise | -              | -      |         |
| extrac      | 访问路径额外配置               | string【可选】 | -      |         |

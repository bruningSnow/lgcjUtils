# downloadCrossDomainImage

```
下载非同源在线图片
```

## 代码演示:

```tsx
import React from 'react';
import { downloadCrossDomainImage } from 'lgcjUtils';

export default () => {
  return (
    <div>
      <button
        onClick={() =>
          downloadCrossDomainImage({
            url: 'https://p9-passport.byteacctimg.com/img/mosaic-legacy/3797/2889309425~300x300.image',
            type: 'jpg',
            name: '头像',
          })
        }
      >
        下载非同源在线图片
      </button>
    </div>
  );
};
```

## 入参

| 属性 | 说明               | 类型           | 默认值   | Version |
| ---- | ------------------ | -------------- | -------- | ------- |
| url  | 非同源在线图片地址 | -              | -        |         |
| type | 图片类型           | string【可选】 | png      |         |
| name | 图片名称           | string【可选】 | 下载图片 |         |

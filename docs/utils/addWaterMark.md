# addWaterMark

```
添加水印
```

## 代码演示:

```tsx
import React, { useState } from 'react';
import { addWaterMark } from 'lgcjUtils';

export default () => {
  return (
    <div>
      <pre>
        <button onClick={() => addWaterMark({ content: '水印1水印1水印1' })}>单行内容</button>
      </pre>
      <pre>
        <button onClick={() => addWaterMark({ content: ['水印1水印1水印1', '水印2水印2水印2'] })}>
          换行内容
        </button>
      </pre>
    </div>
  );
};
```

## 入参

| 属性      | 说明               | 类型                               | 默认值 | Version |
| --------- | ------------------ | ---------------------------------- | ------ | ------- |
| content   | 水印内容           | TContent【可选】                   | ''     |         |
| width     | 水印宽度           | string【可选】                     | ''     |         |
| height    | 水印高度           | string【可选】                     | ''     |         |
| textAlign | 水印文本 textAlign | CSSProperties['textAlign']【可选】 | ''     |         |
| font      | 水印文本字体大小   | string【可选】                     | ''     |         |
| fillStyle | 水印文本颜色       | CSSProperties['color']【可选】     | ''     |         |

## TContent

```
string | string[]
```

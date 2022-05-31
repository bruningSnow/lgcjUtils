# addWaterMark

```
添加水印
水印一般分为 明水印 和 暗水印
明水印：肉眼可见
暗水印：肉眼不可见，但是用 ps （类同）软件调整色阶可以看见水印
作用：可以在日常工作中对员工起到提醒和警示作用
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

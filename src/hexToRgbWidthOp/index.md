Demo:

```tsx
import React from 'react';
import { hexToRgbWidthOp } from 'lgcjUtils';

export default () => (
  <div>
    <div>
      #CC8E49：
      {hexToRgbWidthOp({ hexColor: '#CC8E49' })}
    </div>
    <div>
      #CC8E49 0.4：
      {hexToRgbWidthOp({ hexColor: '#CC8E49', opacity: 0.4 })}
    </div>
  </div>
);
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo

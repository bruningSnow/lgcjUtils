Demo:

```tsx
import React from 'react';
import { arrayFilterRepeat } from 'lgcjUtils';

export default () => (
  <div>
    <div>
      [1, 2, 3]：
      {JSON.stringify(arrayFilterRepeat({ list: [1, [[2], 2]], isFlat: true }))}
    </div>
  </div>
);
```

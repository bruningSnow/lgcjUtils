Demo:

```tsx
import React from 'react';
import { randomColorByString } from 'lgcjUtils';

export default () => (
  <div>
    <div>
      lgcjUtil：
      {randomColorByString({ name: 'lgcjUtil' })}
    </div>
    <div>
      lgcjUtil 0.4：
      {randomColorByString({ name: 'lgcjUtil', opacity: 0.4 })}
    </div>
  </div>
);
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo

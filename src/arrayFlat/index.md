Demo:

```tsx
import React from 'react';
import { arrayFlat } from 'lgcjUtils';

export default () => (
  <div>
    <div>
    [1, 2, 3]：
    {JSON.stringify(
      arrayFlat({ list: [1, 2, 3] })
      )}
    </div>
    <div>
    [1, 2, 3], () => void：
    {JSON.stringify(
      arrayFlat({ list: [1, 2, 3], cb: (value) => value * 2 })
      )}
    </div>
    <div>
    [1, [[2], 3]]：
    {JSON.stringify(
      arrayFlat({ list: [1, [[2], 3]] })
      )}
    </div>
  </div>
);
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo

## mapObject:

## 代码:

```tsx
import React from 'react';
import { checkDataType } from 'lgcjUtils';

export default () => (
  <div>
    <pre>{JSON.stringify(checkDataType({ data: 1, type: 'Number' }))}</pre>
    <div>
      1 Number：
      {String(checkDataType({ data: 1, type: 'Number' }))}
    </div>
    <div>
      [] Array：
      {String(checkDataType({ data: [], type: 'Array' }))}
    </div>
    <div>
      [] Object：
      {String(checkDataType({ data: [], type: 'Object' }))}
    </div>
    <div>
      new Map() Map：
      {String(checkDataType({ data: new Map(), type: 'Map' }))}
    </div>
    <div>
      new Set() Set：
      {String(checkDataType({ data: new Set(), type: 'Set' }))}
    </div>
    <div>
      new Date() Date：
      {String(checkDataType({ data: new Date(), type: 'Date' }))}
    </div>
  </div>
);
```

# Calendar 日历

```tsx  hideCode=true inline=true
import {usePrefersColor} from 'dumi';
import React, {useEffect} from 'react';
import {setThemeVariables} from "ayongUI";
import {ModeTheme} from '../../globe/theme.ts'

export default () => {
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor();
  useEffect(() => {
    setThemeVariables(new ModeTheme()[color])
  }, [color])

};
```

### 基本使用


```tsx
import {Calendar, Select} from 'ayongUI'

export default () => {
  return <Calendar/>
}
```

### 日期单选
```tsx
import {Calendar, Select} from 'ayongUI'

export default () => {
  return <Calendar/>
}
```

### 日期多选

```tsx
import {Calendar, Select} from 'ayongUI'

export default () => {
    return <Calendar selectedMode='multiple'/>
}
```

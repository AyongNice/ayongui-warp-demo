# Tooltip 

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
import {Tooltip,Button} from 'ayongUI'
import type {TooltipProps} from 'ayongUI'

export default () => {
    return <div style={{display: "flex", justifyContent: 'space-around'}}>
        <Tooltip placement="top">
              <Button >top</Button>
        </Tooltip >
        <Tooltip placement="right">
              <Button >right</Button>
        </Tooltip >
        <Tooltip placement="bottom">
              <Button >bottom</Button>
        </Tooltip >
        <Tooltip placement="left">
              <Button >left</Button>
        </Tooltip >
    </div>
}
```


### 自定义弹出原素
```tsx
import {Tooltip,Button} from 'ayongUI'
import type {TooltipProps} from 'ayongUI'


export default () => {
    const popupN=()=>(<span style={{color:'red',fontSize:'20px'}}>我劝天公重抖擞,不拘一格降人才</span>)

    return <div style={{display: "flex", justifyContent: 'space-around'}}>
        <Tooltip placement="top" popup={popupN}>
              <Button >top</Button>
        </Tooltip >
    </div>
}
```
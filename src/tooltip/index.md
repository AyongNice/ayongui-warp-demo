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
        <Tooltip title='向上弹出向上弹出向上弹出向上弹出向上弹出向上弹出向上弹出向上弹出向上弹出向上弹出向上弹出向上弹出向上弹出向上弹出' placement="top">
              <Button >top</Button>
        </Tooltip >
        <Tooltip title='向右弹出' placement="right">
              <Button >right</Button>
        </Tooltip >
        <Tooltip  title='向下弹出' placement="bottom">
              <Button >bottom</Button>
        </Tooltip >
        <Tooltip title='向坐弹出' placement="left">
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
        <Tooltip placement="top" popup={popupN} >
              <Button >top</Button>
        </Tooltip >
    </div>
}
```


| 属性名   | 说明                                        | 类型    | 默认值  | 版本 |
| -------- | ------------------------------------------- | ------ | ------- | ---- |
| placement  | tooltip弹出位置topLeft / top / topRight / bottomLeft / bottom/ bottomRight / leftTop / left / leftBottom/ rightTop / right/ rightBottom                         | string | top | 1.0  |
| popup  | 弹出框内容                              | string/HTMLElement | '' | 1.0  |
<!-- | trigger     | tooltip激活方式hover/click | array | ['hover'] | 1.0  | -->
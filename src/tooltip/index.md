---
demo:
  cols: 2
---

# Tooltip  文字提示

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
<code src="./demos/base.tsx">基本使用</code>
<code src="./demos/color.tsx">自定义颜色</code>
<code src="./demos/hidden.tsx">超出换行</code>

 
 
 

#### 组件props参数

| 属性名        | 类型                            | 默认值 | 描述                                      | 支持版本  |
|---------------|---------------------------------|--------|-------------------------------------------|------------|
| title         | string                          | -      | 标题，若为空则不显示                      | 1.0        |
| style         | React.CSSProperties             | -      | 自定义样式                                | 1.0        |
| className     | string                          | -      | 自定义样式类名                            | 1.0        |
| children      | React.ReactNode                 | -      | 按钮内容                                  | 1.0        |
| disabled      | boolean                         | false  | 是否禁用按钮                              | 1.0        |
| width         | string                          | -      | 按钮宽度                                  | 1.0        |
| color         | string                          | -      | 按钮颜色                                  | 1.0        |
| whiteSpace    | 'normal' \| 'nowrap'           | -      | 换行方式                                  | 1.0        |
| arrow         | boolean                         | -      | 是否显示箭头                              | 1.0        |
| open          | boolean                         | false  | 是否打开，默认为false                     | 1.0        |
| onOpenChange  | (open: boolean) => void         | -      | 打开关闭回调函数                          | 1.0        |
| placement     | 'top' \| 'bottom' \| 'left' \| 'right' | -      | 定位方向                                  | 1.0        |


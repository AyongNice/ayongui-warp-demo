---
nav:
  title: 使用说明
order: 11
demo:
  cols: 2
---

# Switch 开关

```tsx  hideCode=true inline=true
import {usePrefersColor} from 'dumi';
import React, {useEffect} from 'react';
import {setThemeVariables} from "ayongui";
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

<code src="./demos/base.tsx">基本用法</code>
<code src="./demos/color.tsx">颜色设置</code>
<code src="./demos/disabled.tsx">禁用状态</code>
 

### 组件Props参数

| 属性名           | 说明         | 默认值      | 类型                       | 支持版本 |
|---------------|------------|----------|--------------------------|------|
| value         | 默认值        |          | boolean                  | 1.0  |
| style         | 样式         | -        | React.CSSProperties      | 1.0  |
| title         | 标题         | -        | string                   | 1.0  |
| className     | 样式类名       | -        | string                   | 1.0  |
| disabled      | 是否禁用       | false    | boolean                  | 1.0  |
| activeColor   | 打开时的颜色     | #8aabec  | string                   | 1.0  |
| inactiveColor | 关闭时的颜色     | #9b9ea4  | string                   | 1.0  |
| onChange      | 状态改变时的回调函数 | ()=>void | (value: boolean) => void | 1.0  |

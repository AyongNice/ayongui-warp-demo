---
demo:
  cols: 2
---

# Radio 单选框

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
<code src="./demos/group.tsx">多个组合使用</code>
<code src="./demos/button.tsx">单个按钮模式</code>
<code src="./demos/group-button.tsx">组合按钮模式</code>

 

## 组件Props参数

| 属性名       | 说明                   | 默认值     | 类型                                                   | 支持版本 |
|-----------|----------------------|---------|------------------------------------------------------|------|
| value     | 多个组合时候当前值            | -       | string \| number                                     | 1.0  |
| className | 自定义样式类名最外层的样式        | -       | string                                               | 1.0  |
| checked   | 是否选中 单个使用需要用到        | false   | boolean                                              | 1.0  |
| disabled  | 禁用                   | false   | boolean                                              | 1.0  |
| children  | 插槽内容                 | -       | React.ReactNode                                      | 1.0  |
| size      | 按钮类型的大小 继承Button组件参数 | default | 'large' \| 'default' \| 'small' \| 'mini'            | 1.0  |
| type      | 按钮类型 继承Button组件参数    | primary | 'primary' \| 'dashed' \| 'safe' \| 'error' \| 'warn' | 1.0  |

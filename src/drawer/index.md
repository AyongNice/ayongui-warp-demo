---
demo:
  cols: 2
order: 20
---
# Drawer 抽屉

## 介绍

抽屉组件，提供了抽屉弹出的方式展示内容。 通常用于在PC端操作按钮，出现的抽屉面板。

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
 

<code src="./demos/base.tsx">基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。</code>
<code src="./nesting.tsx">抽屉嵌套 温馨提示 如果使用抽屉嵌套,那么组件内部会将 `maskClosable`和`getContainer` 强制设置 `false`</code>
<code src="./demos/dom.tsx">渲染在当前 dom 里。自定义容器  温馨提示 组件父级dom样式必须添加 `position`、`overflow`、`height`属性
</code>
<code src="./demos/diycss.tsx">自定义样式</code>

 

 

 
## 组件Props参数

| 属性名                                              | 说明                                      | 默认值              | 类型                                     | 支持版本 |
|:-------------------------------------------------|:----------------------------------------|------------------|----------------------------------------|------|
| title                                            | 标题                                      | -                | React.ReactNode                        | 1.0  |
| zIndex                                           | z-index                                 | 999              | number                                 | 1.0  |
| open                                             | 是否显示                                    | false            | boolean                                | 1.0  |
| bodyClassName &emsp; &emsp;                      | 自定义body类名                               | -                | string                                 | 1.0  |
| headerClassName                                  | 自定义头部类名                                 | -                | React.CSSProperties                    | 1.0  |
| getContainer                                     | 是否渲染当前dom内                              | false            | boolean                                | 1.0  |
| size                                             | 像素大小 top和 bottom 表示高度, left和right时候表示宽度 | '380px'          | string                                 | 1.0  |
| maskClosable                                     | 点击遮罩是否关闭                                | true             | boolean                                | 1.0  |
| placement                                        | 位置                                      | right            | 'top' \| 'right' \| 'bottom' \| 'left' | 1.0  |
| onClose                                          | 关闭回调                                    | ()=>void         | () => void                             | 1.0  |
| children                                         | 组件body内容 详情见代码实例                        | null             | React.ReactNode                        | 1.0  |
| mainRender                                       | 自定义弹框抽屉内容 详情见代码实例                       | null             | () =>React.ReactNode                   | 1.0  |
| headerRender                                     | 自定义抽屉头部内容 详情见代码实例                       | null             | (Close:Funtcion) =>React.ReactNode     | 1.0  |
| closeIcon                                        | 关闭按钮                                    | Wrongs 详情见icon组件 | () =>React.ReactNode                   | 1.0  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; |                                         |                  |                                        |      |


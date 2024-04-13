---
nav:
  title: 使用说明
demo:
  cols: 2
---

# Button 按钮

<code src="./demos/base.tsx">基础用法</code>
<code src="./demos/disabled.tsx">其他类型</code>
<code src="./demos/base2.tsx">基础用法2</code>
<code src="./demos/icon.tsx">icon 按钮</code>
<code src="./demos/shape.tsx">shape 形状设置</code>
<code src="./demos/diyclassname.tsx">自定义 className 样式</code>
<code src="./demos/loading.tsx">设置防抖 1000 毫秒 + loading</code>
* `⚠️注意： 在该示例代码中 butStyle 必须创建自定义样式文件提供使用`




| 属性名          | 描述                         | 类型                                      | 支持版本  |
|-----------------|------------------------------|-------------------------------------------|------------|
| style           | 自定义样式                   | React.CSSProperties                      | 1.0        |
| time            | 防抖时间设置，0为不防抖      | number                                    | 1.0        |
| href            | 跳转连接                     | string                                    | 1.0        |
| className       | 自定义样式类名               | string                                    | 1.0        |
| children        | 按钮内容                     | React.ReactNode                           | 1.0        |
| disabled        | 是否禁用                     | boolean                                   | 1.0        |
| loading         | 是否加载中                   | boolean                                   | 1.0        |
| icon            | 图标                         | React.ReactElement                       | 1.0        |
| type            | 按钮类型                     | 'primary' \| 'dashed' \| 'safe' \| 'error' \| 'warn' \| 'text' | 1.0        |
| size            | 按钮大小                     | 'large' \| 'default' \| 'small'          | 1.0        |
| shape           | 按钮形状                     | 'circle' \| 'default' \| 'round' \| 'strong' | 1.0        |
| htmlType        | 原生button类型               | 'button' \| 'submit' \| 'reset'          | 1.0        |
| onClick         | 点击事件回调函数             | () => void                                | 1.0        |

**注：**
- `className` 自定义样式推荐使用module.css 否则无法覆盖组件样式!。
- `time` 属性用于设置防抖时间，0 表示不防抖。
- `type` 属性指定按钮的类型，利用样式实现。
- `size` 属性指定按钮的大小，利用样式 padding 实现。
- `shape` 属性指定按钮的形状，利用样式 border-radius 实现。

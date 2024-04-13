---
demo:
  cols: 2
---

# Message 消息通知

- `⚠️注意： 在该示例代码中 style 必须创建自定义样式文件提供使用`

<code src="./demos/base.tsx">基本使用</code>
<code src="./demos/base2.tsx">基本使用</code>
<code src="./demos/icon.tsx">自定义 icon</code>
<code src="./demos/close.tsx">显示关闭按钮</code>
<code src="./demos/time.tsx">自定义显示时间 6 秒</code>
<code src="./demos/html.tsx">HTML 片段作为正文内容</code>

- `message 还支持使用 HTML 字符串作为正文内容。 需要注意的是 防止XSS 攻击 必须设置useHTMLString为true`
- - `⚠️注意： 在该示例代码中 style 必须创建自定义样式文件提供使用`



## method 介绍

| 方法名          | 描述             | 参数                    | 返回值 |
| --------------- | ---------------- | ----------------------- | ------ |
| Message.info    | 显示普通提示消息 | MessageProps 见下方详情 | void   |
| Message.success | 显示成功提示消息 | MessageProps 见下方详情 | void   |
| Message.warning | 显示警告提示消息 | MessageProps 见下方详情 | void   |
| Message.error   | 显示错误提示消息 | MessageProps 见下方详情 | void   |

## MessageProps 入参详情介绍

| 属性名        | 说明                                       | 类型                          | 默认值     | 版本 |
| ------------- | ------------------------------------------ | ----------------------------- | ---------- | ---- |
| message       | 消息提示内容                               | string \| number \| ReactNode | -          | 1.0  |
| showClose     | 是否显示关闭按钮                           | boolean                       | false      | 1.0  |
| useHTMLString | 是否将 message 属性作为 HTML 片段处理      | string                        | false      | 1.0  |
| onClose       | 关闭回调,只有在 showClose 为 true 时才有效 | () => void                    | () => void | 1.0  |
| icon          | 自定义 Icon                                | React.Fc                      | -          | 1.0  |

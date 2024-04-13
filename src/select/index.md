---
nav:
  title: 使用说明
demo:
  cols: 2
---

# Select 选择器
### 基本用法
<code src="./demos/base-left.tsx">基本用法</code>
<code src="./demos/base-right.tsx">禁用</code>
<code src="./demos/base1.tsx">显示清除按钮</code>
<code src="./demos/base2.tsx">自定义 className 样式</code>
<code src="./demos/base3.tsx">多条选择</code>
<code src="./demos/base4.tsx">搜索选择</code>
<code src="./demos/base5.tsx">自定义下拉菜单模版</code>
<code src="./demos/base6.tsx">自定义下拉菜单的头部</code>


### 组件 Props 参数

| 属性名                | 说明                                          | 是否必填 | 类型                                | 默认值                          | 版本  |
|--------------------|---------------------------------------------|------|-----------------------------------|------------------------------|-----|
| className          | 样式 className 名 必须是 module 类型的样式 否则无法覆盖组件样式  | 否    | string                            | -                            | 1.0 |
| defaultValue       | 默认值                                         | 否    | string \| string[]                | string                       | 1.0 |
| value              | 选中值 再搭配父组件直接控制组件选中值的时候需要用到 参考自定义头部下拉模版 代码示例 | 否    | -                                 | -                            | 1.0 |
| style              | css 行间样式写法 参考代码示例                           | 否    | string                            | width:'150px'                | 1.0 |
| onChange           | 选中值改变时的回调 方法接受当前选中的值                        | 否    | (value: string string[]) => void; | ()=>{}                       | 1.0 |
| bordered           | 是否显示 边框 默认 true 显示                          | 否    | boolean                           | true                         | 1.0 |
| disabled           | 是否禁用                                        | 否    | boolean                           | false                        | 1.0 |
| clearable          | 是否可清空                                       | 否    | boolean                           | false                        | 1.0 |
| search             | 是否可搜索                                       | 否    | boolean                           | false                        | 1.0 |
| collapseTags       | 是否折叠多选                                      | 否    | boolean                           | false                        | 1.0 |
| optionRender       | 自定义下拉模版 内容                                  | 否    | (opt: Options) => React.FC        | null                         | 1.0 |
| optionHeaderRender | 自定义头部下拉模版 内容                                | 否    | (opt: Options) => React.FC ;      | null [Option 参数详解](#Options) | 1.0 |

<span id="Options">Options 参数详解</span>

| 属性名      | 说明   | 类型      | 版本  |
|----------|------|---------|-----|
| value    | 参数值  | string  | 1.0 |
| label    | 下拉文案 | string  | 1.0 |
| disabled | 是否禁用 | boolean | 1.0 |

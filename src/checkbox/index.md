---
nav:
  title: 使用说明
order: 8
demo:
  cols: 2
---

# Checkbox 多选框

### 基本使用

<code src="./demos/base.tsx">基本使用</code>
<code src="./demos/group.tsx">组合使用</code>
<code src="./demos/jsx.tsx">组合JSX使用</code>
 

#### Checkbox Group

| 属性名           | 说明                          | 类型                                       | 默认值      | 支持版本 |
|---------------|-----------------------------|------------------------------------------|----------|------|
| checked       | 是否选中                        | boolean                                  | false    | 1.0  |
| disabled      | 禁用                          | boolean                                  | false    | 1.0  |
| defaultValue  | 默认值                         | string \| number \| number[] \| string[] | -        | 1.0  |
| onChange      | 点击事件                        | (Res:boolean) => void                    | function | 1.0  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean                                  | false    | 1.0  |

#### Checkbox Group

| 属性名          | 说明                 | 类型                             | 默认值      | 支持版本 |
|--------------|--------------------|--------------------------------|----------|------|
| disabled     | 禁用                 | boolean                        | false    | 1.0  |
| defaultValue | 默认值                | number[] \| string[]           | [ ]      | 1.0  |
| onChange     | 选择改变时回调            | (number[] \|string[]) => void  | function | 1.0  |
| options      | 多个组合使用列表数据 详情见代码展示 | [Option参数详解](#Option) Option[] | [ ]      | 1.0  |
| value        | 父组件通过状态控制选择详情见代码展示 | value[ ]                       | [ ]      | 1.0  |

<span id="Option">Option参数详解</span>

| 属性名      | 说明       | 类型               | 版本  |
|----------|----------|------------------|-----|
| label    | 天数日期字符   | string \| number |     |
| value    | 日期类型对象   | string \| number | 1.0 |
| disabled | 当前选项是否禁用 | boolean          | 1.0 |

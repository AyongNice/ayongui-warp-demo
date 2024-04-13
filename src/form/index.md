---
demo:
  cols: 2
order: 21
---
# From 表单
* `⚠️注意： 在该示例代码中 uiStyle 必须创建自定义样式文件提供使用`

<code src="./demos/base.tsx">基本使用</code>
<code src="./demos/base2.tsx">表单验证</code>
<code src="./demos/base3.tsx">表单方法调用</code>
<code src="./demos/base4.tsx">表单大小</code>
<code src="./demos/base5.tsx">表单 字段属性嵌套</code>
<code src="./demos/base6.tsx">使用自定义或第三方 表单控件</code>
<code src="./demos/base7.tsx">多表单联动</code>
<code src="./demos/base8.tsx">多表单联动</code>

**注：**
- ⚠️在使用 动态方法创建 `Form.Item` 内嵌套自身时候, 最外层`Form.Item` 必传 `isWarp`参数, 方法内接收 `props`参数 必须回传给内部嵌套的`Form.Item`
- `time` 属性用于设置防抖时间，0 表示不防抖。
- 自定义或第三方的表单控件，也可以与 `Form` 组件一起使用。只要该组件遵循以下的约定：
- 控件需要接收 `value` 属性。
- 控件需要接收 `onChange` 事件。
- 如果你的表单 数据结构需要 字段属性嵌套, 你可以使用 `Form.Item` 的 `name` 为数组来实现 ,其中 数组第一个元素为父级属性,往后为子级属性

## Form Porps 介绍

| 属性名				          | 说明									                 | 默认值	         | 类型													                                      | 支持版本	     |
|------------------|-----------------------------|--------------|------------------------------------------------------|-----------|
| name					        | 表单名称								                | 			          | string												                                   | 1.0		     |
| size             | 表单尺寸                        | 'middle'				 | 'small'								                                      | 'middle'	 | 'large'												|   1.0		|
| style					       | 表单的样式							                | 			          | React.CSSProperties									                         | 1.0		     |
| labelWidth			    | 标签的宽度							                | '100px'	     | string												                                   | 1.0		     |
| form					        | 表单实例对象   [form方法详解](#form)	 | {}		         | any													                                     | 1.0		     |
| children				     | 表单子元素							                | 			          | React.ReactNode										                            | 1.0		     |
| initialValues			 | 初始值对象							                | {}		         | { [key: string]: any }								                       | 1.0		     |
| autoComplete			  | 自动完成属性							               | 			          | string												                                   | 1.0		     |
| errorInfo				    | 表单校验错误信息						              | 			          | { errorFields: { name: string; errors: string }[] }	 | 1.0		     |
| disabled				     | 是否禁用								                | false		      | boolean												                                  | 1.0		     |
| formLayout       | 表单布局方式                      | 'right'				  | 'left'								                                       | 'right'	  | 'vertical'											|   1.0		|
| onSubmit				     | 表单提交时的回调函数					             | () => {}	    | () => void											                                | 1.0		     |
| onFinish				     | 表单完成时的回调函数					             | () => {}	    | () => void											                                | 1.0		     |
| onFinishFailed		 | 表单完成失败时的回调函数				            | () => {}	    | () => void											                                | 1.0		     |
| onValuesChange		 | 表单值变化时的回调函数				             | () => {}	    | () => void											                                | 1.0		     |

## Itme Porps 介绍

| 属性名      | 说明                                                                              | 默认值 | 类型                           | 支持版本     |
|----------|---------------------------------------------------------------------------------|-----|------------------------------|----------|
| label    | 标签文本                                                                            |     | string                       | 1.0      |
| name     | 表单项名称,类型为数组时候表单属性会进行嵌套                                                          |     | string                       | string[] | 1.0      |
| style    | 自定义样式                                                                           |     | React.CSSProperties          | 1.0      |
| form     | 表单实例对象                                                                          |     | any                          | 1.0      |
| isWarp   | 是否包裹子元素,Item嵌套自身时候 该参数必传                                                        |     | boolean                      | 1.0      |
| rules    | 表单校验规则数组                                                                        |     | Rules[]  [Rules参数详解](#Rules) | 1.0      |
| children | 子元素 当children自定义渲染函数时候 函数接收的props, ref /n 必须回传给Item组件自身， [使用方式见代码示例](#porpsRef) |     | React.ReactNode              | 1.0      |
| index    | 在Form.list 组件中使用必传该参数，为当前元素索引                                                   |     | number                       | 1.0      |

## List Porps 介绍

| 属性名      | 说明                                     | 默认值 | 类型       | 支持版本 |
|----------|----------------------------------------|-----|----------|------|
| name     | 表单数据list集合对应的属性key                     |     | string   | -    | 1.0      |
| children | list自定义渲染函数  [children参数详解](#children) |     | Funtcion | -    | 1.0      |

<span id="children">**children 函数参数详解**</span>

| 属性名								    | 说明					             | 类型	                  | 默认值 | 版本	  |
|----------------|---------------------|----------------------|-----|------|
| fields								 | 循环渲染的list数据	        | boolean              | -	  | 1.0	 |
| add							     | 用于调用添加数据	           | () => void           | -	  | 1.0	 |
| remove								 | 用户删除数据,方法入参数	为key	  | (key:string) => void | -	  | 1.0	 |
| key								    | 子元素循环渲染的 唯一 key     | string               | -	  | 1.0	 |
| props								  | 用于将props 传递给 Itme组件 | Object               | -	  | 1.0	 |

<span id="Rules">**Rules参数详解**</span>

| 属性名								       | 说明					                                                         | 类型	                                 | 默认值 | 版本	  |
|-------------------|-----------------------------------------------------------------|-------------------------------------|-----|------|
| required								  | 是否必传 true必传		                                                   | boolean                             | -	  | 1.0	 |
| message								   | 校验不同的文案提示	                                                      | string                              | -	  | 1.0	 |
| maxLength								 | 最大长度限制			                                                       | number                              | -	  | 1.0	 |
| validator								 | 自定义校验函数 接收name属性和只属性，返回Promise.reject验证失败，返回Promise.resolve验证通过 | (name:string, value:any) => Promise | -	  | 1.0	 |
| trigger	          | 校验时机  'change'	\| 'blur'\| 'submit' 默认 change	                  | string                              | -	  | 1.0	 |

<span id="form">**form方法介绍**</span>
| 方法名 | 说明 | 参数类型 | 返回值类型 | 支持版本 |
| --------------| ------------------------ | --------------------------| --------------- | -------- |
| getFieldValue | 获取表单字段值 | (key:string)  =>string | string | 1.0 |
| setFieldsValue| 设置表单字段值 | { [key: string]: any } | - | 1.0 |
| submit | 提交表单 | ()=>void | 返回当前formData表单数据 | 1.0 |
| resetFields | 重置表单字段值为初始值 | - | - | 1.0 |
| verify | 验证表单 |()=>void | 无 | 1.0 |


# Form 表单

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

import {Modal, Button, Form, Input, Upload, Radio} from 'ayongUI'
import {useState} from "react";
export default () => {
    const [formLayout, setFormLayout] = useState('right');
    const [componentDisabled, setComponentDisabled] = useState(false);
    const onValuesChange = ({layout}) => {
        setFormLayout(layout)
    };
    const submit = (formData) => {
        console.log('submit~~~~', formData)
    }
    return <div style={{width: '588px'}}>
        <Radio
            checked={componentDisabled}
            onChange={(checked) => setComponentDisabled(checked)}
        >
            Form 禁用
        </Radio>
        <Form formLayout={formLayout}
              disabled={componentDisabled}
              initialValues={{layout: formLayout}}
              onValuesChange={onValuesChange}
              onSubmit={submit}
        >
            <Form.Item
                label="布局"
                name="layout"
            >
                <Radio.Group value={formLayout}>
                    <Radio.Button value="left">靠左对齐</Radio.Button>
                    <Radio.Button value="center">剧中对齐</Radio.Button>
                    <Radio.Button value="right">靠右对齐</Radio.Button>
                    <Radio.Button value="vertical">上下布局</Radio.Button>
                    <Radio.Button value="inline">左右布局</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="账户"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}, {
                    maxLength: 2,
                    message: '超出最大长度显示'
                }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="密码"
                name="password"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="附件上传"
                name="file"
                style={{height: '80px'}}
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Upload maxCount={2}/>
            </Form.Item>
            <Form.Item
                label="是否加密"
                name="encrypt"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Radio/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
}



```

### 表单验证

```tsx

import {Modal, Button, Form, Input, Upload, Radio} from 'ayongUI'
import {useState} from "react";

export default () => {
    const [form] = Form.useForm();
    const onFinishFailed = (values: any) => {
        console.log(values);
    };
    const submit = (formData) => {
        console.log('submit~~~~', formData)
    }
    return <Form
        form={form}
        initialValues={{username: 'ayong'}}
        onFinishFailed={onFinishFailed}
        onSubmit={submit}
    >
        <Form.Item
            label="普通校验"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
        >
            <Input/>
        </Form.Item>
        <Form.Item
            label="失焦时候验证"
            name="blur"
            rules={[
                {required: true, message: 'Please input your username!'},
                {
                    trigger: 'blur',
                    maxLength: 7,
                    message: '超出最大长度7',
                },
            ]}
        >
            <Input/>
        </Form.Item>
        <Form.Item
            label="自定义校验"
            name="diy"
            rules={[
                {
                    trigger: 'blur',
                    validator: (name, value) => {
                        const regex = /^(https?:\/\/)/i;
                        console.log('name', name, value, !regex.test(value))
                        if (!regex.test(value)) {
                            return Promise.reject('请输入正确的http 或者https协议的url');
                        }
                        return Promise.resolve();
                    }
                },
            ]}>
            <Input/>
        </Form.Item>
        <Form.Item
            label="是否跨域"
            name="encrypt"
            rules={[{required: true, message: 'Please input your encrypt!'}]}
        >
            <Radio/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                提交
            </Button>
        </Form.Item>
    </Form>
}



```

### 表单方法调用

<span id="porpsRef"></span>
**⚠️在使用 动态方法创建 Form.Item 内嵌套自身时候, 最外层Form.Item 必传 isWarp参数, 方法内接收 props参数
必须回传给内部嵌套的Form.Item**

* `⚠️注意： 在该示例代码中 uiStyle 必须创建自定义样式文件提供使用`

```tsx
import {Button, Form, Input, Select} from 'ayongUI'
import {useState} from "react";
import uiStyle from './index.module.less';

export default () => {
    const [form] = Form.useForm();
    const onFinishFailed = (values: any) => {
        console.log(values);
    };
    const submit = (formData) => {
        console.log('submit~~~~', formData)
    }
    const onReset = () => {
        form.resetFields();
    };
    return <Form
        form={form}
        labelWidth={'150px'}
        onFinishFailed={onFinishFailed}
        onSubmit={submit}
    >
        <Form.Item
            label="账户"
            name="username"
            rules={[
                {required: true, message: 'Please input your username!'},
            ]}
        >
            <Input/>
        </Form.Item>
        <Form.Item
            label="密码"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
        >
            <Input/>
        </Form.Item>
        <Form.Item
            label="身份绑定模式"
            name="mode"
            rules={[{required: true, message: 'Please input your password!'}]}
        >
            <Select
                style={{width: 150}}
                options={[
                    {value: 'noto', label: '不绑定'},
                    {value: 'Phone', label: '手机号'},
                    {value: 'Mailbox', label: '邮箱'},
                    {value: 'Google', label: 'Google账号'},
                ]}
            />
        </Form.Item>
        <Form.Item
            isWarp
        >
            {({getFieldValue, props, ref}) => {
                return getFieldValue('mode') === 'Phone' ?
                    <Form.Item  {...props} ref={ref} name="phone" label="手机号"
                                rules={[
                                    {required: true, message: 'required'},
                                    {maxLength: 2, message: 'maxLength'}
                                ]}>
                        <Input/>
                    </Form.Item> : null
            }}
        </Form.Item>
        <Form.Item>
            <Button type="primary" className={uiStyle.but} htmlType="submit">
                提交
            </Button>
            <Button className={uiStyle.but} onClick={onReset}>
                重置
            </Button>
            <Button
                onClick={() => form.setFieldsValue({
                    mode: 'Phone',
                })}>
                填充
            </Button>
        </Form.Item>
    </Form>
}

```

### 表单大小

```tsx

import {Modal, Button, Form, Input, Upload, Radio} from 'ayongUI'
import {useState} from "react";

export default () => {
    const [size, setSize] = useState('middle');
    const onValuesChange = ({size}) => {
        setSize(size)
    };
    const submit = (formData) => {
        console.log('submit~~~~', formData)
    }
    return <div style={{width: '588px'}}>
        <Form
            size={size}
            onSubmit={submit}
            onValuesChange={onValuesChange}
        >
            <Form.Item
                label="大小"
                name="size"
            >
                <Radio.Group>
                    <Radio.Button value="small">小</Radio.Button>
                    <Radio.Button value="middle">中</Radio.Button>
                    <Radio.Button value="large">大</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="账户"
                name="username"
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="密码"
                name="password"
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="附件上传"
                name="file"
                style={{height: '80px'}}
            >
                <Upload maxCount={2}/>
            </Form.Item>
            <Form.Item
                label="是否加密"
                name="encrypt"
            >
                <Radio/>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
}

```

### 表单 字段属性嵌套

如果你的表单 数据结构需要 字段属性嵌套, 你可以使用 Form.Item 的 name 为数组来实现 ,其中 数组第一个元素为父级属性,往后为子级属性

```tsx

import {Modal, Button, Form, Input, Upload, Radio} from 'ayongUI'
import {useState} from "react";
export default () => {
    const [form] = Form.useForm();
    const onFinishFailed = (values: any) => {
        console.log(values);
    };
    const submit = (formData) => {
        console.log('submit~~~~', formData)
    }
    return <Form
        form={form}
        onFinishFailed={onFinishFailed}
        onSubmit={submit}
    >
        <Form.Item
            label="name"
            name={['user', 'name']}
            rules={[{required: true, message: 'Please input your username!'}]}
        >
            <Input/>
        </Form.Item>
        <Form.Item
            label="phone"
            name={['user', 'phone']}
        >
            <Input/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                提交
            </Button>
        </Form.Item>
    </Form>
}

```

### 使用自定义或第三方 表单控件

自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：

1. 控件需要接收   `value`  属性。
2. 控件需要接收 `onChange` 事件。

```tsx
import {Modal, Button, Form, Input, Upload, Radio, Select} from 'ayongUI'
import React, {useState} from "react";
const PriceInput: React.FC<PriceInputProps> = ({value = {}, onChange}) => {
    const [number, setNumber] = useState(0);
    const [currency, setCurrency] = useState<Currency>('rmb');
    const triggerChange = (changedValue: { number?: number; currency?: Currency }) => {
        onChange({...value, number, currency, ...changedValue});
    };
    const onNumberChange = (value: string) => {
        const newNumber = parseInt(value || '0', 10);
        if (Number.isNaN(newNumber)) {
            return;
        }
        triggerChange({number: newNumber});
    };
    const onCurrencyChange = (newCurrency: Currency) => {
        triggerChange({currency: newCurrency});
    };
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Input
                type="text"
                value={value.number || number}
                onChange={onNumberChange}
                style={{width: 100, marginRight: 8}}
            />
            <Select
                value={value.currency || currency}
                style={{width: 100}}
                onChange={onCurrencyChange}
                options={[
                    {value: 'usd', label: 'USD'},
                    {value: 'eur', label: 'EUR'},
                ]}
            />
        </div>
    );
};

export default () => {
    const [form] = Form.useForm();
    const onFinishFailed = (values: any) => {
        console.log('onFinishFailed', values);
    };
    const submit = (formData) => {
        console.log('submit~~~~', formData)
    }
    return <Form
        form={form}
        onFinishFailed={onFinishFailed}
        onSubmit={submit}
    >
        <Form.Item
            label="count"
            name='count'
            rules={[{required: true, message: 'Please input your username!'}]}
        >
            <PriceInput/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
    </Form>
}



```

### 多表单联动

页面中如果需要多个表单 且有关联 那么你可以 这样使用
* `⚠️注意： 在该示例代码中 uiStyle 必须创建自定义样式文件提供使用`
```tsx

import {useState} from 'react';
import uiStyle from './index.module.less';
import {Modal, Button, Form, Input, Upload, Radio, Select} from 'ayongUI'
export default () => {

    const [open, setOpen] = useState(false);

    const [modalData, setModalData] = useState([{account: '123', role: '1'}])

    const [form] = Form.useForm();

    const [form2] = Form.useForm();

    const onClose = (date) => {
        setOpen(false)
    };
    const onAdd = (date) => {
        try {
            const formData = form.submit();
            const roleList = form2.getFieldValue('roleList');
            form2.setFieldsValue({roleList: [...roleList, formData]});
            onClose()
        } catch (e) {
            console.log('e', e)
        }
    };
    const onModalSubmit = (formData) => {
        console.log('onModalSubmit', formData)
    }
    const onFormSubmit = (formData) => {
        console.log('onFormSubmit', formData)
    }
    return <div>
        <Modal title='添加角色' open={open} onOk={onAdd} onCancel={onClose}>
            <Form form={form} onSubmit={onModalSubmit}>
                <Form.Item
                    label="账号"
                    name='account'
                    rules={[{required: true, message: '请填写账号!'}, {
                        validator: (name, value) => {
                            // 自定义校验 匹配 只有英文 不能有中文字符出现
                            const regex = /^[^\u4e00-\u9fa5\u3000-\u303f\uFF00-\uFFEF\u2000-\u206F\uFF00-\uFFEF\s]+$/;
                            if (value.length !== 6 || !regex.test(value)) {
                                return Promise.reject('请输入6位账号,并且不能有中文');
                            }
                            return Promise.resolve();
                        },
                        message: '超出最大长度显示'
                    }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="角色"
                    name='role'
                >
                    <Select
                        style={{width: 150}}
                        options={[
                            {value: '1', label: '超级管理员'},
                            {value: '2', label: '总经理'},
                            {value: '3', label: '主管'},
                            {value: '9527', label: '普通员工'},
                        ]}
                    />
                </Form.Item>
            </Form>
        </Modal>
        <Form form={form2} onSubmit={onFormSubmit}>
            <Form.Item
                label="名单标题"
                name='title'
                rules={[{required: true, message: '请填写账号!'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="名单列表"
                name='roleList'
            >
                {({getFieldValue}) => {
                    const roleList = getFieldValue('roleList') || [];
                    return <div>
                        {roleList.map((item, index) => {
                            return <Input style={{marginBottom: '15px'}} key={index} value={item?.account} disabled/>
                        })}
                    </div>
                }}
            </Form.Item>
            <Form.Item>
                <Button className={uiStyle.but} type="primary" htmlType="submit">
                    提交
                </Button>
                <Button onClick={() => setOpen(true)}>
                    添加角色
                </Button>
            </Form.Item>
        </Form>
    </div>
}


```

### 动态增减嵌套字段

```tsx


import {Modal, Button, Close, Form, Input, Upload, Radio, Select} from 'ayongUI'
import React from 'react';

export default () => {
    const onSubmit = (formData) => {
        console.log('formData', formData)
    }
    return <Form
        onSubmit={onSubmit}
    >
        <Form.List name="users">
            {
                (fields, {add, remove, props}) => {
                    return <>
                        {fields.map(({key, name, ...restField}, index) => {
                            return <div style={{display: 'flex', alignItems: 'baseline'}} key={key}>
                                <Form.Item
                                    {...props}
                                    index={index}
                                    name={'name'}
                                    label="姓名"
                                    rules={[{required: true, message: 'Missing first name'}]}
                                >
                                    <Input placeholder="First Name"/>
                                </Form.Item>

                                <Form.Item
                                    {...props}
                                    index={index}
                                    name={'account'}
                                    label="账号"
                                    rules={[{required: true, message: 'Missing first name'}]}
                                >
                                    <Input placeholder="First Name"/>
                                </Form.Item>
                                <Close style={{padding: '10px 10px 0px 12px', cursor: 'pointer', width: '30px'}}
                                       onClick={() => remove(key)}/>
                            </div>
                        })}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()}>
                                新增
                            </Button>
                        </Form.Item>
                    </>
                }
            }
        </Form.List>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                提交
            </Button>
        </Form.Item>
    </Form>
};
```

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


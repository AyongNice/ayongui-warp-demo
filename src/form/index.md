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

[//]: # (### 基本使用)

[//]: # ()
[//]: # (```tsx)

[//]: # (import {Modal, Button, Form, Input, Upload, Radio} from 'ayongUI')

[//]: # (import {useState} from "react";)

[//]: # ()
[//]: # (export default &#40;&#41; => {)

[//]: # ()
[//]: # (    const [formLayout, setFormLayout] = useState&#40;'right'&#41;;)

[//]: # (    const [componentDisabled, setComponentDisabled] = useState&#40;false&#41;;)

[//]: # (    const onValuesChange = &#40;{layout}&#41; => {)

[//]: # (        setFormLayout&#40;layout&#41;)

[//]: # (    };)

[//]: # ()
[//]: # (    const submit = &#40;formData&#41; => {)

[//]: # (        console.log&#40;'submit~~~~', formData&#41;)

[//]: # (    })

[//]: # (    return <div style={{width: '588px'}}>)

[//]: # (        <Radio)

[//]: # (            checked={componentDisabled})

[//]: # (            onChange={&#40;checked&#41; => setComponentDisabled&#40;checked&#41;})

[//]: # (        >)

[//]: # (            Form 禁用)

[//]: # (        </Radio>)

[//]: # (        <Form formLayout={formLayout})

[//]: # (              disabled={componentDisabled})

[//]: # (              onValuesChange={onValuesChange})

[//]: # (              submit={submit})

[//]: # (        >)

[//]: # (            <Form.Item)

[//]: # (                label="布局")

[//]: # (                name="layout")

[//]: # (            >)

[//]: # (                <Radio.Group>)

[//]: # (                    <Radio.Button value="left">靠左对齐</Radio.Button>)

[//]: # (                    <Radio.Button value="center">剧中对齐</Radio.Button>)

[//]: # (                    <Radio.Button value="right">靠右对齐</Radio.Button>)

[//]: # (                    <Radio.Button value="vertical">上下布局</Radio.Button>)

[//]: # (                    <Radio.Button value="inline">左右布局</Radio.Button>)

[//]: # (                </Radio.Group>)

[//]: # (            </Form.Item>)

[//]: # (            <Form.Item)

[//]: # (                label="账户")

[//]: # (                name="username")

[//]: # (                rules={[{required: true, message: 'Please input your username!'}, {)

[//]: # (                    maxLength: 2,)

[//]: # (                    message: '超出最大长度显示')

[//]: # (                }]})

[//]: # ()
[//]: # (            >)

[//]: # (                <Input/>)

[//]: # (            </Form.Item>)

[//]: # (            <Form.Item)

[//]: # (                label="密码")

[//]: # (                name="password")

[//]: # (                rules={[{required: true, message: 'Please input your username!'}]})

[//]: # (            >)

[//]: # (                <Input/>)

[//]: # (            </Form.Item>)

[//]: # ()
[//]: # (            <Form.Item)

[//]: # (                label="附件上传")

[//]: # (                name="file")

[//]: # (                style={{height: '80px'}})

[//]: # (                rules={[{required: true, message: 'Please input your username!'}]})

[//]: # (            >)

[//]: # (                <Upload maxCount={2}/>)

[//]: # (            </Form.Item>)

[//]: # (            <Form.Item)

[//]: # (                label="是否跨越")

[//]: # (                name="cors")

[//]: # (                rules={[{required: true, message: 'Please input your username!'}]})

[//]: # (            >)

[//]: # (                <Radio/>)

[//]: # (            </Form.Item>)

[//]: # (            <Form.Item wrapperCol={{offset: 8, span: 16}}>)

[//]: # (                <Button type="primary" htmlType="submit">)

[//]: # (                    Submit)

[//]: # (                </Button>)

[//]: # ()
[//]: # (            </Form.Item>)

[//]: # (        </Form>)

[//]: # ()
[//]: # ()
[//]: # (    </div>)

[//]: # ()
[//]: # (})

[//]: # ()
[//]: # (```)



### 表单验证

[//]: # (```tsx)

[//]: # (import {Modal, Button, Form, Input, Upload, Radio} from 'ayongUI')

[//]: # (import {useState} from "react";)

[//]: # ()
[//]: # (export default &#40;&#41; => {)

[//]: # (    const [form] = Form.useForm&#40;&#41;;)

[//]: # ()
[//]: # (    const onFinishFailed = &#40;values: any&#41; => {)

[//]: # (        console.log&#40;values&#41;;)

[//]: # (    };)

[//]: # (    const submit = &#40;formData&#41; => {)

[//]: # (        console.log&#40;'submit~~~~', formData&#41;)

[//]: # (    })

[//]: # (  )
[//]: # (    return <Form)

[//]: # (        form={form})

[//]: # (        initialValues={{username: 'ayong'}})

[//]: # (        onFinishFailed={onFinishFailed})

[//]: # (        submit={submit})

[//]: # (    >)

[//]: # ()
[//]: # (        <Form.Item)

[//]: # (            label="自定义校验")

[//]: # (            name="diy")

[//]: # (            rules={[)

[//]: # (                {)

[//]: # (                    validator: &#40;name, value&#41; => {)

[//]: # (                        const regex = /^&#40;https?:\/\/&#41;/i;)

[//]: # (                        if &#40;!regex.test&#40;value&#41;&#41; {)

[//]: # (                            return Promise.reject&#40;'请输入正确的http 或者https协议的url'&#41;;)

[//]: # (                        })

[//]: # (                        return Promise.resolve&#40;&#41;;)

[//]: # (                    })

[//]: # (                },)

[//]: # ()
[//]: # (            ]}>)

[//]: # (            <Input/>)

[//]: # (        </Form.Item>)

[//]: # ()
[//]: # (        <Form.Item)

[//]: # (            label="账户")

[//]: # (            name="username")

[//]: # (            rules={[)

[//]: # (                {required: true, message: 'Please input your username!'},)

[//]: # (                {)

[//]: # (                    maxLength: 7,)

[//]: # (                    message: '超出最大长度显示')

[//]: # (                })

[//]: # (            ]})

[//]: # ()
[//]: # (        >)

[//]: # (            <Input/>)

[//]: # (        </Form.Item>)

[//]: # (        <Form.Item)

[//]: # (            label="密码")

[//]: # (            name="password")

[//]: # (            rules={[{required: true, message: 'Please input your password!'}]})

[//]: # (        >)

[//]: # (            <Input/>)

[//]: # (        </Form.Item>)

[//]: # ()
[//]: # (        <Form.Item)

[//]: # (            label="是否跨越")

[//]: # (            name="cors")

[//]: # (            rules={[{required: true, message: 'Please input your cors!'}]})

[//]: # (        >)

[//]: # (            <Radio/>)

[//]: # (        </Form.Item>)

[//]: # (        <Form.Item wrapperCol={{offset: 8, span: 16}}>)

[//]: # (            <Button type="primary" htmlType="submit">)

[//]: # (                提交)

[//]: # (            </Button>)

[//]: # ()
[//]: # (        </Form.Item>)

[//]: # (    </Form>)

[//]: # ()
[//]: # (})

[//]: # (```)

### 表单方法调用


```tsx
import {Button, Form, Input, Select} from 'ayongUI'
import {useState} from "react";

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
        submit={submit}
    >
        {/*<Form.Item*/}
        {/*    label="账户"*/}
        {/*    name="username"*/}
        {/*    rules={[*/}
        {/*        {required: true, message: 'Please input your username!'},*/}
        {/*    ]}*/}

        {/*>*/}
        {/*    <Input/>*/}
        {/*</Form.Item>*/}

        {/*<Form.Item*/}
        {/*    label="密码"*/}
        {/*    name="password"*/}
        {/*    rules={[{required: true, message: 'Please input your password!'}]}*/}
        {/*>*/}
        {/*    <Input/>*/}
        {/*</Form.Item>*/}

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
            {({getFieldValue, props}) => {

                console.log(getFieldValue('mode'))
                return getFieldValue('mode') === 'Phone' ?

                    <Form.Item  {...props} name="Phone" label="手机号"
                                rules={[
                                    {required: true, message: 'required'},
                                ]}>
                        <Input/>
                    </Form.Item> : null
            }}

        </Form.Item>


        <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type="primary" htmlType="submit">
                提交
            </Button>
            <Button onClick={onReset}>
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

[//]: # (### 字段监听 hook useWatch)

[//]: # (useWatch 允许你监听字段变化，同时仅当该字段变化时重新渲染)

[//]: # (```tsx)

[//]: # (import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';)

[//]: # (import {Modal, Button, Form, Input, Upload, Radio} from 'ayongUI')

[//]: # ()
[//]: # (export default &#40;&#41; => {)

[//]: # (    // const [form] = Form.useForm<{ name: string; age: number }>&#40;&#41;;)

[//]: # (    const nameValue = Form.useWatch&#40;'name'&#41;;)

[//]: # ()
[//]: # (    const customValue = Form.useWatch&#40;&#40;values&#41; => `name: ${values.name || ''}`&#41;;)

[//]: # ()
[//]: # (    return &#40;)

[//]: # (        <>)

[//]: # (            <Form layout="vertical">)

[//]: # (                <Form.Item name="name" label="Name &#40;Watch to trigger rerender&#41;">)

[//]: # (                    <Input/>)

[//]: # (                </Form.Item>)

[//]: # (                <Form.Item name="age" label="Age &#40;Not Watch&#41;">)

[//]: # (                    <Input/>)

[//]: # (                </Form.Item>)

[//]: # (            </Form>)

[//]: # ()
[//]: # (            <div>Name Value: {nameValue}</div>)

[//]: # (            <div>Custom Value: {customValue}</div>)

[//]: # (        </>)

[//]: # (    &#41;;)

[//]: # (};)

[//]: # ()
[//]: # (```)

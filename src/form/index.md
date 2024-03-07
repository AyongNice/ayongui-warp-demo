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
        console.log('layout~~~~', layout)
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
              onValuesChange={onValuesChange}
              submit={submit}
        >
            <Form.Item
                label="布局"
                name="layout"
            >
                <Radio.Group>
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
                label="是否跨越"
                name="cors"
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


    const onFinishFailed = (values: any) => {
        console.log(values);
    };
    const submit = (formData) => {
        console.log('submit~~~~', formData)
    }
    return <Form
        onFinishFailed={onFinishFailed}
        submit={submit}
    >
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
            label="是否跨越"
            name="cors"
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

}
```

### 字段监听 hook useWatch
useWatch 允许你监听字段变化，同时仅当该字段变化时重新渲染
```tsx
import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import {Modal, Button, Form, Input, Upload, Radio} from 'ayongUI'

export default () => {
    // const [form] = Form.useForm<{ name: string; age: number }>();
    const nameValue = Form.useWatch('name');

    const customValue = Form.useWatch((values) => `name: ${values.name || ''}`);

    return (
        <>
            <Form layout="vertical">
                <Form.Item name="name" label="Name (Watch to trigger rerender)">
                    <Input/>
                </Form.Item>
                <Form.Item name="age" label="Age (Not Watch)">
                    <Input/>
                </Form.Item>
            </Form>

            <div>Name Value: {nameValue}</div>
            <div>Custom Value: {customValue}</div>
        </>
    );
};

```


import {Button, Form, Input, Upload, Radio} from 'ayongui'
import React from 'react';
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
    return <div style={{width: '100%'}}>
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
                <Radio.Group size='small' value={formLayout}>
                    <Radio.Button value="left">左对齐</Radio.Button>
                    <Radio.Button value="center">剧中</Radio.Button>
                    <Radio.Button value="right">右对齐</Radio.Button>
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



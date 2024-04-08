
import {Button, Form, Input} from 'ayongUI'
import React from 'react';
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

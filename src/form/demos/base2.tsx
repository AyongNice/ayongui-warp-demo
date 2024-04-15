
import {Button, Form, Input, Upload, Radio} from 'ayongui'

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
            label="失焦验证"
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



import {Button, Form, Input, Select} from 'ayongui'
import uiStyle from '../index.module.less';

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

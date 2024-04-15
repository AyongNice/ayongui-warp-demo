
import {Button, Form, Input, Upload, Radio} from 'ayongui'
import {useState} from "react";
export default () => {
    const [size, setSize] = useState('middle');
    const onValuesChange = ({size}) => {
        setSize(size)
    };
    const submit = (formData) => {
        console.log('submit~~~~', formData)
    }
    return <div>
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

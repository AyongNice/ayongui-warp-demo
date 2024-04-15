
import {useState} from 'react';
import uiStyle from '../index.module.less';
import {Modal, Button, Form, Input, Upload, Radio, Select} from 'ayongui'
import React from 'react';
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


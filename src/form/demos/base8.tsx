import { Button, Close, Form, Input } from 'ayongUI';
import React from 'react';

export default () => {
  const onSubmit = (formData) => {
    console.log('formData', formData);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.List name="users">
        {(fields, { add, remove, props }) => {
          return (
            <>
              {fields.map(({ key, name, ...restField }, index) => {
                return (
                  <div key={key}>
                    <Form.Item
                      {...props}
                      index={index}
                      name={'name'}
                      label="姓名"
                      rules={[
                        { required: true, message: 'Missing first name' },
                      ]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>

                    <Form.Item
                      {...props}
                      index={index}
                      name={'account'}
                      label="账号"
                      rules={[
                        { required: true, message: 'Missing first name' },
                      ]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <div style={{textAlign:'right',marginBottom:'7px'}}>
                      <Close onClick={() => remove(key)} />
                    </div>
                  </div>
                );
              })}
              <Form.Item>
                <Button type="dashed" onClick={() => add()}>
                  新增
                </Button>
              </Form.Item>
            </>
          );
        }}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

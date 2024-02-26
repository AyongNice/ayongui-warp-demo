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
    const [open, setOpen] = useState(false);
    const onClose = (date) => {
        setOpen(false)
    };

    const [formLayout, setTextAlign] = useState('right')
    const onChange = (date) => {
        setTextAlign(date)
    };
    return <div style={{width: '588px'}}>
        <Radio.Group style={{marginBottom: '20px'}} onChange={onChange} value={formLayout}>
            <Radio.Button value="left">靠左对齐</Radio.Button>
            <Radio.Button value="center">剧中对齐</Radio.Button>
            <Radio.Button value="right">靠右对齐</Radio.Button>
            <Radio.Button value="vertical">上下布局</Radio.Button>
        </Radio.Group>
        <Form formLayout={formLayout}>
            <Form.Item
                label="账户"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}]}
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
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Upload/>
            </Form.Item>
            <Form.Item
                label="是否跨越"
                name="cors"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Radio/>
            </Form.Item>
        </Form>
    </div>

}
```

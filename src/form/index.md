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

    const [formLayout, setFormLayout] = useState('right')
    const onValuesChange = ({layout}) => {
        setFormLayout(layout)
    };

    const submit = (formData) => {
        console.log('submit~~~~', formData)
    }
    return <div style={{width: '588px'}}>

        <Form formLayout={formLayout}
              onValuesChange={onValuesChange}
              submit={submit}
        >
            <Form.Item
                label="布局"
                name="layout"
                rules={[{required: true, message: 'Please input your username!'}]}
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
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>


    </div>

}
```

```tsx
import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';

const ExampleComponent = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(null);

    useEffect(() => {
        // 在每次渲染前，将当前 count 值存储到 prevCountRef 中
        prevCountRef.current = count;
        console.log(+new Date())
    });
    useEffect(() => {
        // 在每次渲染前，将当前 count 值存储到 prevCountRef 中
        console.log('useEffect')

    }, []);
    useLayoutEffect(() => {
        // 在每次渲染前，将当前 count 值存储到 prevCountRef 中
        console.log('useLayoutEffect')
    }, []);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Current Count: {count}</p>
            <p>Previous Count: {prevCountRef.current !== null ? prevCountRef.current : 'N/A'}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default ExampleComponent;

```

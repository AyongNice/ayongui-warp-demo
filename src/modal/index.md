---
order: 21
---

# Modal 对话框

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
import {Modal, Button} from 'ayongUI'
import {useState} from "react";

export default () => {
    const [open, setOpen] = useState(false);
    const onClose = (date) => {
        setOpen(false)
    };

    return <div>
        <Button type="primary" onClick={() => setOpen(true)}>
            打开弹窗
        </Button>
        <Modal title='ayongUI的Modal' open={open} onOk={onClose} onCancel={onClose} onClose={onClose}>
            <p>这是对话框内容...</p>
            <p>这是对话框内容...</p>
            <p>这是对话框内容...</p>
        </Modal>
    </div>
}
```

### 异步关闭

点击确定后异步关闭对话框，例如提交表单。

```tsx
import {Modal, Button} from 'ayongUI'
import {useState} from "react";

export default () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('模态的内容');

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('模态将在两秒钟后关闭');
        console.log('handleOk')
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                打开异步弹窗
            </Button>
            <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </>
    );
};

```

### 自定义脚页 和 icon

```tsx
import {Modal, Button, Close} from 'ayongUI'
import {useState} from "react";

export default () => {
    const [open, setOpen] = useState(false);
    const onClose = (date) => {
        setOpen(false)
    };

    return <div>
        <Button type="primary" onClick={() => setOpen(true)}>
            打开弹窗
        </Button>
        <Modal title='自定义脚页和icon'
               open={open}
               onClose={onClose}
               closeIcon={<Close/>}
               footerRender={() => {
                   return <footer style={{
                       display: 'flex',
                       justifyContent: 'flex-end',
                       padding: '15px',
                       boxSizing: 'border-box',
                   }}>
                       <Button type='primary'
                               style={{marginRight: '15px'}}
                               onClick={onClose}>diy脚页</Button>
                       <Button style={{marginRight: '15px'}} onClick={onClose}>取消</Button>
                       <Button type='primary'
                               onClick={onClose}>确定</Button>
                   </footer>
               }}
        >
            <p>这是对话框内容...</p>
            <p>这是对话框内容...</p>
            <p>这是对话框内容...</p>
        </Modal>
    </div>
}
```
### 通过API形式调用组件

```tsx
import {Modal, Button, Close} from 'ayongUI'

export default () => {

    return <div>
        <Button type="primary" onClick={() => Modal.info({
            title: 'ceshi'
        })}>
            打开弹窗
        </Button>

    </div>
}
```

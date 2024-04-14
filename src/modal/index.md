---
demo:
  cols: 2
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
<code src="./demos/open.tsx">基本使用</code>
<code src="./demos/awiat.tsx">异步关闭</code>



 

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

    const info = () => {
        Modal.info({
            title: 'Modal.info',
            style: {width: '30%'},
            content: '这是直接通过组件的Modal.API进行调用...',
            okText: '确认',
            cancelText: '取消',
            maskClosable: false,
            placement: 'top',
            onOk: () => {
                console.log('点击了OK')
            },
            onCancel: () => {
                console.log('点击了取消')

            },

        })
    }
    const success = () => {
        Modal.success({
            title: 'Modal.success',
            style: {width: '30%'},
            content: '这是直接通过组件的Modal.API进行调用...',
            okText: '确认',
            cancelText: '取消',
            maskClosable: false,
            placement: 'center',
            onOk: () => {
                console.log('点击了OK')
            },
            onCancel: () => {
                console.log('点击了取消')

            },

        })
    }
    const warning = () => {
        Modal.warning({
            title: 'Modal.warning',
            style: {width: '30%'},
            content: '这是直接通过组件的Modal.API进行调用...',
            okText: '确认',
            cancelText: '取消',
            maskClosable: false,
            placement: 'center',
            onOk: () => {
                console.log('点击了OK')
            },
            onCancel: () => {
                console.log('点击了取消')

            },

        })
    }
    const error = () => {
        Modal.error({
            title: 'Modal.info',
            style: {width: '30%'},
            content: '这是直接通过组件的Modal.API进行调用...',
            okText: '确认',
            cancelText: '取消',
            maskClosable: false,
            placement: 'center',
            onOk: () => {
                console.log('点击了OK')
            },
            onCancel: () => {
                console.log('点击了取消')

            },

        })
    }

    return <div style={{display: 'flex', justifyContent: "space-around"}}>
        <Button type="primary" onClick={info}>
            info
        </Button>
        <Button type="primary" onClick={success}>
            success
        </Button>
        <Button type="primary" onClick={warning}>
            warning
        </Button>
        <Button type="primary" onClick={error}>
            error
        </Button>
    </div>
}
```

## 组件props参数

| 属性名              | 说明                     | 默认值    | 类型                                        | 支持版本 |
| -------------------| ------------------------| ---------| -------------------------------------------| -------- |
| title             | 标题                     | -      | string                                     | 1.0 |
| zIndex            | z-index                  | 999      | number                                     | 1.0 |
| open              | 是否显示,API不需要      | false    | boolean                                    | 1.0 |
| style              | 弹框样式                 | {width: '50%'} | React.CSSProperties         | 1.0 |
| children | 使用JSX方式的插槽内容 | - | React.ReactNode | 1.0 |
| bodyClassName     | 自定义类名               | -      | string                                     | 1.0 |
| headerClassName   | 头部样式                 | -      | string                  | 1.0 |
| type              | API调用弹框类型          | -        | 'info' \| 'success' \| 'warning' \| 'error' | 1.0 |
| content            | API调用弹框内容          | -        | string                                     | 1.0 |
| okText             | API调用弹框确定按钮文案    | -        | string                                     | 1.0 |
| cancelText         | API调用弹框取消按钮文案    | -        | string                                     | 1.0 |
| maskClosable      | 点击遮罩是否关闭,true可以关闭,false禁止关闭 | true     | boolean                                    | 1.0 |
| placement         | 弹出位置                   | 'right'  | 'top'  \| ' cater'    | 1.0 |
| mainRender        | 自定义对话框所有内容      | null    | () => React.ReactNode \|null               | 1.0 |
| headerRender      | 自定义对话框头部内容      | null    | () => React.ReactNode \|null               | 1.0 |
| closeIcon         | 自定义关闭按钮              | Wrongs 详情见icon组件 | React.ReactNode \| null                   | 1.0 |
| footerRender       | 自定义底部渲染内容       | null    | () => React.ReactNode \|null               | 1.0 |
| onOk | 点击确定按钮回调 | () =>void | Function | 1.0 |
| onCancel | 点击取消按钮回调 | () =>void | Function | 1.0 |
| onClose | 关闭回调 | () =>void | Function | 1.0 |


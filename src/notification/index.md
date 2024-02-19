---
order: 22
---
# Notification 通知提醒框

### 全局展示通知提醒信息。

何时使用
在系统四个角显示通知提醒信息。经常用于以下情况：
1. 较为复杂的通知内容。
2. 带有交互的通知，给出用户下一步的行动点。
3. 系统主动推送。

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
import {Notification, Button, Alert} from 'ayongUI'

export default () => {

    const info = () => {
        Notification.info({
            title: 'info',
            placement: 'topRight',
            messages: '这是topRight方向...',
            onClose: () => {
                console.log('点击了onClose')
            },

        })
    }
    const success = () => {
        Notification.success({
            title: 'Notification.success',
            closeIcon: <Alert/>,
            placement: 'topLeft',
            messages: '这是topLeft方向,并且自定义了Icon图标...',
            onClose: () => {
                console.log('点击了onClose')
            },


        })
    }
    const warning = () => {
        Notification.warning({
            title: 'Notification.warning',
            placement: 'bottomLeft',
            duration: 5000,
            messages: '这是bottomLeft方向,并且自定义了5秒后关闭...',
            onClose: () => {
                console.log('点击了onClose')
            },


        })
    }
    const error = () => {
        Notification.error({
            title: 'Notification.info',
            placement: 'bottomRight',
            messages: '这是bottomRight方向...',
            onClose: () => {
                console.log('点击了onClose')
            },


        })
    }
 

    return <div style={{display: 'flex', justifyContent: "space-around"}}>
        <Button type="primary" onClick={info}>
            topRight
        </Button>
        <Button type="primary" onClick={success}>
            topLeft
        </Button>
        <Button type="primary" onClick={warning}>
            bottomLeft
        </Button>
        <Button type="primary" onClick={error}>
            bottomRight
        </Button>
    </div>
}
```


```tsx
import {Notification, Button} from 'ayongUI'

export default () => {

    const info = () => {
        Notification.info({
            title: 'Notification.info',
            messages: '这是info信息,并且自定义了关闭按钮...',
            btn: (close) => {
                return <footer>
                    <Button style={{marginRight: '15px'}} size='small' onClick={close}>取消</Button>
                    <Button type='primary' size='small' onClick={close}>'确定</Button>
                </footer>
            },
        })
    }
    const success = () => {
        Notification.success({
            title: 'Notification.success',
            messages: '这是success信息...',

        })
    }
    const warning = () => {
        Notification.warning({
            title: 'Notification.warning',
            messages: '这是warning信息...',

        })
    }
    const error = () => {
        Notification.error({
            title: 'Notification.error',
            messages: '这是error信息...',
        })
    }

    return <div style={{display: 'flex', justifyContent: "space-around"}}>
        <Button type="primary" onClick={info}>
            自定义关闭按钮
        </Button>
        <Button type="primary" onClick={success}>
            自定义Icon
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

| 属性名       | 说明                     | 默认值    | 类型                                       | 支持版本 |
| ------------| ------------------------| ---------| ------------------------------------------| -------- |
| title      | 标题                     | -       | string                                    | 1.0      |
| zIndex     | 弹框的定位层级           | 999      | number                                    | 1.0      |
| style       | 弹框样式                 | - | Object                             | 1.0      |
| messages    | 消息内容               | -        | Any 所有类型都支持(除布尔值以外)                | 1.0      |
| type       | API调用弹框类型          | -        | 'info' \| 'success' \| 'warning' \| 'error' | 1.0      |
| message     | API调用弹框内容          | -        | string                                    | 1.0      |
| placement  | 弹出位置                   | 'topRight' | 'topRight' \| 'topLeft' \| 'bottomLeft' \| 'bottomRight' | 1.0      |
| onClose    | 关闭回调                 | -        | () => void                                | 1.0      |
| closeIcon  | 关闭按钮                 | null     | React.Fc \| null                         | 1.0      |
| btn        | 自定义按钮               | null     | () =>React.Fc \| null                    | 1.0      |
| duration   | 显示时间 毫秒            | 1600     | number                                    | 1.0      |


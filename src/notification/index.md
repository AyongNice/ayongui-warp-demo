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
import {Notification, Button} from 'ayongUI'

export default () => {

    const info = () => {
        Notification.info({
            title: 'Notification.info',
            placement: 'topRight',
            content: '这是直接通过组件的Notification.API进行调用...',
            onClose: () => {
                console.log('点击了onClose')
            },

        })
    }
    const success = () => {
        Notification.success({
            title: 'Notification.success',
            placement: 'topLeft',
            content: '这是直接通过组件的Notification.API进行调用...',
            onClose: () => {
                console.log('点击了onClose')
            },


        })
    }
    const warning = () => {
        Notification.warning({
            title: 'Notification.warning',
            placement: 'bottomLeft',
            content: '这是直接通过组件的Notification.API进行调用...',
            onClose: () => {
                console.log('点击了onClose')
            },


        })
    }
    const error = () => {
        Notification.error({
            title: 'Notification.info',
            placement: 'bottomRight',
            content: '这是直接通过组件的Notification.API进行调用...',
            onClose: () => {
                console.log('点击了onClose')
            },


        })
    }
    const top = () => {
        Notification.info({
            title: 'Notification.info',
            placement: 'top',
            content: '这是直接通过组件的Notification.API进行调用...',
            onClose: () => {
                console.log('点击了onClose')
            },


        })
    }
    const bottom = () => {
        Notification.info({
            title: 'Notification.info',
            placement: 'bottom',
            content: '这是直接通过组件的Notification.API进行调用...',
            onClose: () => {
                console.log('点击了onClose')
            },


        })
    }
    const left = () => {
        Notification.info({
            title: 'Notification.info',
            placement: 'left',
            content: '这是直接通过组件的Notification.API进行调用...',
            onClose: () => {
                console.log('点击了onClose')
            },


        })
    }
    const right = () => {
        Notification.info({
            title: 'Notification.info',
            placement: 'right',
            content: '这是直接通过组件的Notification.API进行调用...',
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
        <Button type="primary" onClick={top}>
            top
        </Button>
        <Button type="primary" onClick={bottom}>
            bottom
        </Button>
        <Button type="primary" onClick={left}>
            left
        </Button>
        <Button type="primary" onClick={right}>
            right
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
          placement:'',
            style: {width: '30%'},
            content: '这是直接通过组件的Notification.API进行调用...',
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
    const success = () => {
        Notification.success({
            title: 'Notification.success',
            style: {width: '30%'},
            content: '这是直接通过组件的Notification.API进行调用...',
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
        Notification.warning({
            title: 'Notification.warning',
            style: {width: '30%'},
            content: '这是直接通过组件的Notification.API进行调用...',
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
        Notification.error({
            title: 'Notification.info',
            style: {width: '30%'},
            content: '这是直接通过组件的Notification.API进行调用...',
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

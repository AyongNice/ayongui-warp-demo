---
order: 20
---
# Drawer 抽屉

## 介绍
抽屉组件，提供了抽屉弹出的方式展示内容。 通常用于在PC端操作按钮，出现的抽屉面板。


### 基本使用
 
```tsx
import {useState} from 'react'
import {Drawer, Button} from 'ayongUI'
import DirectionSelector from './chebox.tsx'

export default () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(() => false);
    };
    const onChange = (direction) => {
        setPlacement(direction)
        console.log('direction', direction)
    }

    return <React.Fragment>

        <Button onClick={showDrawer}>Open {open ? 1 : 0}</Button>
        <DirectionSelector onChange={onChange}/>

        <Drawer
            title="Basic Drawer"
            open={open}
            placement={placement}
            onClose={onClose}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    </React.Fragment>
}

```



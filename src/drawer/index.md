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
  }

  return <React.Fragment>

    <Button type='primary' onClick={showDrawer}>Open</Button>
    <DirectionSelector onChange={onChange}/>

    <Drawer
      title="ayongUI的抽屉组件"
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

### 渲染在当前dom节点中

```tsx
import {useState, useRef, useEffect} from 'react'
import {Drawer, Button} from 'ayongUI'
import DirectionSelector from './chebox.tsx'

export default () => {
    const [open, setOpen] = useState(false);
    const [dom, setDom] = useState(null);
    useEffect(() => {
        console.log('ffff', document.getElementById('modal-root'))
        setDom(document.getElementById('modal-root'))
    }, [])
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(() => false);
    };
    const drawerRef = useRef(null); // 创建一个 ref

    return <div className='drawer-wrapper'
                id='modal-root'
                ref={drawerRef}
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: 200,
                    width: '500px',
                    background: '#00000005'
                }}>

        <Button type='primary' onClick={showDrawer}>Open</Button>

        <Drawer
            title="ayongUI的抽屉组件"
            getContainer={false}
            open={open}
            placement='right'
            onClose={onClose}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>


    </div>
}

```

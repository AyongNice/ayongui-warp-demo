---
order: 20
---

# Drawer 抽屉

## 介绍

抽屉组件，提供了抽屉弹出的方式展示内容。 通常用于在PC端操作按钮，出现的抽屉面板。

### 基本使用
基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。
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
渲染在当前 dom 里。自定义容器，查看 getContainer。
```tsx
import {useState, useRef, useEffect} from 'react'
import {Drawer, Button} from 'ayongUI'
import DirectionSelector from './chebox.tsx'

export default () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(() => false);
  };

  const drawerRef = useRef(null); // 创建一个 ref

  return <div
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

### 抽屉嵌套

在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。<br/>
***温馨提示 如果使用抽屉嵌套,那么组件内部会将 `maskClosable`和`getContainer` 强制设置 `false`***

```tsx
import {useState} from 'react'
import {Drawer, Button} from 'ayongUI'
import DirectionSelector from './chebox.tsx'

export default () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const [open2, setOpen2] = useState(false);


    const showDrawer = () => {
        setOpen(true);
    };
    const showDrawer2 = () => {
        setOpen2(true);
    };
    const onClose = () => {
        setOpen(() => false);
    };
    const onClose2 = () => {
        setOpen2(() => false);
    };
    const onChange = (direction) => {
        setPlacement(direction)
    }

    return <React.Fragment>
        <Button type='primary' onClick={showDrawer}>Open</Button>
        <DirectionSelector onChange={onChange}/>

        <Drawer
            title="抽屉嵌套"
            open={open}
            placement={placement}
            onClose={onClose}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <Button type='primary' onClick={showDrawer2}>Open</Button>
            <Drawer
                title="Two-level Drawer"
                onClose={onClose2}
                size='150px'
                open={open2}
                placement={placement}
            >

                This is two-level drawer
            </Drawer>
        </Drawer>
    </React.Fragment>
}

```
### 自定义内部样式

```tsx
import {useState} from 'react'
import {Drawer, Button} from 'ayongUI'
import DirectionSelector from './chebox.tsx'
import style from './index.module.less'

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
            headerClassName={style.headerClassName}
            bodyClassName={style.bodyClassName}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    </React.Fragment>
}

```

import React,{useState} from 'react'
import {Drawer, Button, Radio} from 'ayongUI'
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
        < br />
        <Radio.Group onChange={onChange} value={placement}>
            <Radio value="top">top</Radio>
            <Radio value="bottom">bottom</Radio>
            <Radio value="left">left</Radio>
            <Radio value="right">right</Radio>
        </Radio.Group>
        <Drawer
            title="ayongUI的抽屉组件"
            open={open}
            placement={placement}
            onClose={onClose}
        >
            <p>这是对话框内容...</p>
            <p>这是对话框内容...</p>
            <p>这是对话框内容...</p>
        </Drawer>
    </React.Fragment>
}

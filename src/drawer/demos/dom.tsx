import { Button, Drawer, Radio } from 'ayongUI';
import { useState } from 'react';

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
    setPlacement(direction);
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: 200,
        width: '500px',
        background: '#00000005',
        boxSizing: 'border-box',
        padding: '15px',
      }}
    >
      <Radio.Group onChange={onChange} value={placement}>
        <Radio value="top">top</Radio>
        <Radio value="bottom">bottom</Radio>
        <Radio value="left">left</Radio>
        <Radio value="right">right</Radio>
      </Radio.Group>

      <br />
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>

      <Drawer
        title="ayongUI的抽屉组件"
        getContainer={false}
        open={open}
        placement={placement}
        onClose={onClose}
      >
        <p>这是对话框内容...</p>
        <p>这是对话框内容...</p>
        <p>这是对话框内容...</p>
      </Drawer>
    </div>
  );
};

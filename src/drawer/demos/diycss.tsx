import { Button, Close, Drawer, Radio } from 'ayongui';
import React, { useState } from 'react';
import style from './index.module.less';

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
    <React.Fragment>
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
        title="ayongui的抽屉组件"
        open={open}
        placement={placement}
        onClose={onClose}
        closeIcon={<Close />}
        headerClassName={style.headerClassName}
        bodyClassName={style.bodyClassName}
      >
        <p>这是对话框内容...</p>
        <p>这是对话框内容...</p>
        <p>这是对话框内容...</p>
      </Drawer>
    </React.Fragment>
  );
};

import { Button, Drawer, Radio } from 'ayongui';
import React, { useState } from 'react';

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
        title="抽屉嵌套"
        open={open}
        placement={placement}
        onClose={onClose}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <Button type="primary" onClick={showDrawer2}>
          Open
        </Button>
        <Drawer
          title="Two-level Drawer"
          onClose={onClose2}
          size="150px"
          open={open2}
          placement={placement}
        >
          This is two-level drawer
        </Drawer>
      </Drawer>
    </React.Fragment>
  );
};

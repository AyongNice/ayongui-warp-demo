import React from 'react';
import { Button } from 'ayongui';
import butStyle from './index.module.less';

export default () => {
  return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button className={butStyle.diy}>自定义样式</Button>
        <Button type="primary" href="https://github.com/AyongNice/ayongui">
          href-跳转按钮
        </Button>
      </div>
  );
};


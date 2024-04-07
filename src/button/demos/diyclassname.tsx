import React from 'react';
import { Button } from 'ayongUI';
import butStyle from './index.module.less';

export default () => {
  return <Button className={butStyle.diy}>自定义样式</Button>;
};
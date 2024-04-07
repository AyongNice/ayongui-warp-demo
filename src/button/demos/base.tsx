import { Button } from 'ayongUI';
import React from 'react';
export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button>默认类型</Button>
      <Button type="text">文字类型</Button>
      <Button type="primary" disabled>
        禁用 
      </Button>
      <Button type="primary">primary-主题按钮</Button>
    </div>
  );
};

import { Button } from 'ayongUI';
import React from 'react';
export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button>默认类型</Button>
      <Button type="primary">主题按钮</Button>
    </div>
  );
};

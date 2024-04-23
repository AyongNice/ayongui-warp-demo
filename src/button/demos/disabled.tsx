import { Button } from 'ayongui';
import React from 'react';
export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" disabled>
        禁用
      </Button>

      <Button type="text">文字类型</Button>
    </div>
  );
};

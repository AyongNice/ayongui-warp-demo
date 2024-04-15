import React from 'react';
import { Button } from 'ayongui';
export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    

      <Button type="error">危险按钮</Button>
      <Button type="warn">警告按钮</Button>
      <Button type="safe">安全按钮</Button>
    </div>
  );
};
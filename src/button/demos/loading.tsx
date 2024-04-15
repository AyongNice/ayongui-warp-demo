import React from 'react';
import { Button } from 'ayongui';

export default () => {
  const onClick = () => {};
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" onClick={onClick} time={1000}>
        ayongui
      </Button>
      <Button type="primary" loading>
        loading
      </Button>
    </div>
  );
};
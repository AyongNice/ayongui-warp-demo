import { Input } from 'ayongui';
import React from 'react';

export default () => {
  const onClick = () => {};
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Input type="primary" onClick={onClick} time={1000}>
        ayongui
      </Input>
      <Input type="primary" loading>
        loading
      </Input>
    </div>
  );
};

import React from 'react';
import { Button } from 'ayongUI';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button shape="strong">直角-按钮</Button>
      <Button shape="round">round-椭圆钮</Button>

      <Button shape="circle">C</Button>

    </div>
  );
};
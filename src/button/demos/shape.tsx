import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <a-button shape="strong" text="直角-按钮" />
      <a-button shape="round" text="round-椭圆钮" />
      <a-button shape="circle" text="C" />
    </div>
  );
};

import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {React.createElement('ayong-button', {
        shape: 'strong',
        text: '直角-按钮',
      })}
      {React.createElement('ayong-button', {
        shape: 'round',
        text: 'round-椭圆钮',
      })}
      {React.createElement('ayong-button', {
        shape: 'circle',
        text: 'C',
      })}
    </div>
  );
};

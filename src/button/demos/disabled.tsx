import React from 'react';
export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {React.createElement('ayong-button', { type: 'primary', disabled: true, text: '禁用' })}
      {React.createElement('ayong-button', { type: 'text', text: '文字类型' })}
    </div>
  );
};

import React from 'react';
export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {React.createElement('ayong-button', { type: 'error', text: '危险按钮' })}
      {React.createElement('ayong-button', { type: 'warn', text: '警告按钮' })}
      {React.createElement('ayong-button', { type: 'safe', text: '安全按钮' })}
    </div>
  );
};
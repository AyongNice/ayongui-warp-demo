import React from 'react';

export default () => {
  const handleClick = () => {
    console.log('ayong-button clicked');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {React.createElement('ayong-button', { text: '默认按钮' })}
      {React.createElement('ayong-button', {
        type: 'primary',
        text: '主题按钮',
        onClick: handleClick,
      })}
    </div>
  );
};

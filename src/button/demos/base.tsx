import React from 'react';

export default () => {
  const handleClick = () => {
    console.log('a-button clicked');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <a-button text="默认按钮" />
      <a-button type="primary" text="主题按钮" onClick={handleClick} />
    </div>
  );
};

import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <a-button type="error" text="危险按钮" />
      <a-button type="warn" text="警告按钮" />
      <a-button type="safe" text="安全按钮" />
    </div>
  );
};
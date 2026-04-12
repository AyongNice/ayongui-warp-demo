import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <a-button type="primary" disabled={true} text="禁用" />
      <a-button type="text" text="文字类型" />
    </div>
  );
};

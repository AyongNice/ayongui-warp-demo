import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <a-button type="primary" text="🚀 Send" />
      <a-button text="🔊 Sound" />
      <a-button type="primary" text="⚡ Save" />
    </div>
  );
};

import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {React.createElement('ayong-button', {
        type: 'primary',
        text: '🚀 Send',
      })}
      {React.createElement('ayong-button', {
        text: '🔊 Sound',
      })}
      {React.createElement('ayong-button', {
        type: 'primary',
        text: '⚡ Save',
      })}
    </div>
  );
};

import React from 'react';

export default () => {
  const onClick = () => {};
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <a-button loading={true} onClick={onClick} text="Loading" />
    </div>
  );
};

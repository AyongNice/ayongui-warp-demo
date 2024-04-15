import React from 'react';
import { Button, Sound, Save, Send, Poweroff } from 'ayongui';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" icon={<Send />}>
        Send
      </Button>

        <Button icon={<Sound />}>Sound</Button>

        <Button type="primary" icon={<Poweroff />}>
        Save
      </Button>
    </div>
  );
};
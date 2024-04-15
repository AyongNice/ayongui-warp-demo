import React from 'react';
import {Switch} from 'ayongui';

export default () => {

  return (
    <div>
      <Switch value={true} disabled style={{marginBottom: '20px'}}/>

      <Switch value={false} disabled/>
    </div>
  )
}
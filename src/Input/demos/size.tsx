import React, {useEffect, useState} from 'react';
import {Input, Button, UserHollow, Letter} from 'ayongui'
import type {InputProps} from 'ayongui'

export default () => {
  return <div>
    <Input size='small' placeholder='这是最小的'/>

    <br/>
    <Input placeholder='这是默认大小'/>

    <br/>
    <Input size='large' placeholder='请是最大的'/>
  </div>
}

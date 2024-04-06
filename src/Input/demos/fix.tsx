import React, {useEffect, useState} from 'react';
import {Input, Button, UserHollow, Letter} from 'ayongUI'
import type {InputProps} from 'ayongUI'

export default () => {
  const [modelValue, setValue] = useState('');
  const [modelValue1, setValue1] = useState('');
  const prefixN = <UserHollow/>
  const suffix = <Letter/>
  return <div>
    <Input value={modelValue} type="text" prefix={prefixN} placeholder='请输入姓名' />
    <br/>
    <Input value={modelValue1} type="number" suffix={suffix} placeholder='请输入姓名' />
  </div>
}

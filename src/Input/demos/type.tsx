import React, {useEffect, useState} from 'react';
import {Input, Button, UserHollow} from 'ayongUI'
import type {InputProps} from 'ayongUI'

export default () => {
  const [modelValue, setValue] = useState('');

  return <Input value={modelValue} type="number"/>
}
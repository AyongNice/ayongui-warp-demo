import React, {useEffect, useState} from 'react';
import {Input, Button, UserHollow} from 'ayongui'
import type {InputProps} from 'ayongui'

export default () => {
  const [modelValue, setValue] = useState('');

  return <Input value={modelValue} type="number"/>
}
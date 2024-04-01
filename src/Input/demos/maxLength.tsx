import React, {useEffect, useState} from 'react';
import {Input, Button, UserHollow} from 'ayongUI'
import type {InputProps} from 'ayongUI'

export default () => {
    const [modelValue, setValue] = useState('');
    const [modelValue2, setValue2] = useState('');
    const onChange = (value) => {
        console.log(value)
        setValue(value)
    }
    return <React.Fragment>
        <Input value={modelValue} onChange={onChange} maxLength={8}/>
        <br/>
        <Input value={modelValue2} onChange={setValue2}/>
    </React.Fragment>
}
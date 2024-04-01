import React, {useEffect, useState} from 'react';
import {Input, Button} from 'ayongUI'
import type {InputProps} from 'ayongUI'

export default () => {
    const [modelValue, setValue] = useState('');
    const [clerabledValue, setClerabledValue] = useState('');

    const [textAreaValue, setTextAreaValue] = useState('');
    return <React.Fragment>
        <Input value={modelValue} onChange={setValue}/>
        <br/>
        <Input value={clerabledValue} clerabled onChange={setClerabledValue}/>
        <br/>

        <Input.TextArea value={textAreaValue} onChange={setTextAreaValue}/>
    </React.Fragment>
}
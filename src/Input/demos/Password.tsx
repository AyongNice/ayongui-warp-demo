import React, {useEffect, useState} from 'react';
import {Input, Moon, Button, Sunny} from 'ayongUI'
import type {InputProps} from 'ayongUI'

export default () => {
    const [modelValue, setValue] = useState('');
    const [visible, setPasswordVisible] = React.useState(false);


    return <React.Fragment>
        <Input value={modelValue} type="Password"/>
        <br/>
        <Input value={modelValue} type="Password" visibilityToggle={
            {
                visible,
                iconRender: (visible) => {
                    return visible ? <Sunny/> : <Moon/>
                },
                onVisibleChange: setPasswordVisible
            }
        }/>
        <br/>
        <Button type='primary'
                onClick={() => setPasswordVisible(!visible)}>{visible ? '隐藏' : '显示'}密码 </Button>
    </React.Fragment>
}
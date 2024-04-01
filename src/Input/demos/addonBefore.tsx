import React, {useEffect, useState} from 'react';
import {Input, Button, Select, UserHollow} from 'ayongUI'
import type {InputProps} from 'ayongUI'

const {Option} = Select;
export default () => {

    const [modelValue, setValue] = useState('');

    const onChange = (value) => {
        console.log(value)
        setValue(value)
    }

    return <React.Fragment>
        <Input addonBefore="http://" addonAfter=".com" defaultValue="ayongui"/>
        <br/>
        <Input
            value={modelValue}
            onChange={onChange}
            addonBefore={() => <Select style={{width: '80px'}}
                                       defaultValue="https://"
                                       bordered={false}
                                       options={[
                                           {value: 'http://', label: 'http://'},
                                           {value: 'https://', label: 'https://'},
                                       ]}
            />}
            defaultValue="ayongui"
            addonAfter={() => <Select style={{width: '70px'}}
                                      defaultValue=".com"
                                      bordered={false}
                                      options={[
                                          {value: '.com', label: '.com'},
                                          {value: '.love', label: '.love'},
                                          {value: '.cn', label: '.cn'},
                                      ]}
            />}
        />

    </React.Fragment>
}
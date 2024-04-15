import React from 'react';
import {Switch} from 'ayongui';


export default () => {

    const onChange = (value) => {
        console.log('change', value)
    }

    return <Switch value={true} onChange={onChange}/>
}
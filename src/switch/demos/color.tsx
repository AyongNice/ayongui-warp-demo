import React from 'react';
import {Switch} from 'ayongui';

export default () => {

    return (
        <div>
            <Switch activeColor='#fbc00d' value={true} title={'设置打开状态颜色'} style={{marginBottom: '20px'}}/>

            <Switch inactiveColor='#83eca3' value={true} title={'设置关闭状态颜色'}/>
        </div>
    )
}
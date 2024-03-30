# Input
```tsx  hideCode=true inline=true
import {usePrefersColor} from 'dumi';
import React, {useEffect} from 'react';
import {setThemeVariables} from "ayongUI";
import {ModeTheme} from '../../globe/theme.ts'


export default () => {
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor();
  useEffect(() => {
    setThemeVariables(new ModeTheme()[color])
  }, [color])

};
```

### 基本使用

```tsx
import React, {useEffect,useState} from 'react';
import {Input,Button} from 'ayongUI'
import type {InputProps} from 'ayongUI'

export default () => {
    const [modelValue, setValue] = useState('');

    return (<Input value={modelValue} >
        </Input >)
}
```

### input类型
```tsx
import React, {useEffect,useState} from 'react';
import {Input,Button,UserHollow} from 'ayongUI'
import type {InputProps} from 'ayongUI'

export default () => {
    const [modelValue, setValue] = useState('');
    
    return (<Input value={modelValue} type="number" >
        </Input >)
}
```

### input 大小
```tsx
import React, {useEffect, useState} from 'react';
import {Input, Button, UserHollow, Letter} from 'ayongUI'
import type {InputProps} from 'ayongUI'

export default () => {
    return <div>
        <Input size='small' placeholder='这是最小的'/>
      
        <br/>
        <Input placeholder='这是默认大小'/>

        <br/>
        <Input size='large' placeholder='请是最大的'/>
    </div>
}
```

### 插槽 prefix | suffix
```tsx
import React, {useEffect,useState} from 'react';
import {Input,Button,UserHollow,Letter} from 'ayongUI'
import type {InputProps} from 'ayongUI'

export default () => {
    const [modelValue, setValue] = useState('');
    const [modelValue1, setValue1] = useState('');
    const prefixN = <UserHollow/>
    const suffix=<Letter/>
    return (<div style={{display:'flex',columnGap: '5px'}}>
            <Input value={modelValue} type="text" prefix={prefixN} placeholder='请输入姓名'>
            </Input >
            <Input value={modelValue1} type="number" suffix={suffix} placeholder='请输入姓名'>
            </Input >
        </div>)
}
```


| 属性名   | 说明                                        | 类型    | 默认值  | 版本 |
| -------- | ------------------------------------------- | ------ | ------- | ---- |
| value  | 绑定的值                                       | string|number | '' | 1.0  |
| placeholder  | input占位符                              | string | 请输入值 | 1.0  |
| type     | input类型 'number' \| 'text' \| 'password' | string | test | 1.0  |
| prefix    | 输入框前置插槽                              | - | - | 1.0  |
| suffix | 输入框后置插槽                               | - | -  | 1.0  |

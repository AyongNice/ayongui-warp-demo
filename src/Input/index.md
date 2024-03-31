---
demo:
  cols: 2
---


<code src="./demos/size.tsx">input 大小</code>

<code src="./demos/fix.tsx">插槽 prefix | suffix</code>

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
import React, {useEffect, useState} from 'react';
import {Input, Button} from 'ayongUI'
import type {InputProps} from 'ayongUI'

export default () => {
    const [modelValue, setValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    return <React.Fragment>
        <Input value={modelValue} onChange={setValue}/>
        <br/>
        <Input.TextArea value={textAreaValue} onChange={setTextAreaValue}/>
    </React.Fragment>
}
```

### input类型

```tsx
import React, {useEffect, useState} from 'react';
import {Input, Button, UserHollow} from 'ayongUI'
import type {InputProps} from 'ayongUI'

export default () => {
  const [modelValue, setValue] = useState('');

  return <Input value={modelValue} type="number"/>
}
```

### 前置/后置标签
 

```tsx
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
```

### 密码框

```tsx
import React, {useEffect, useState} from 'react';
import {Input, Moon, Button, Sunny} from 'ayongUI'
import type {InputProps} from 'ayongUI'
import {Record} from "immutable";

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
```

 

[//]: # (### input 大小)

[//]: # ()

[//]: # (```tsx)

[//]: # (import React, {useEffect, useState} from 'react';)

[//]: # (import {Input, Button, UserHollow, Letter} from 'ayongUI')

[//]: # (import type {InputProps} from 'ayongUI')

[//]: # ()

[//]: # (export default &#40;&#41; => {)

[//]: # (  return <code src="./size.tsx">分栏 1</code>)

[//]: # (})

[//]: # (```)

[//]: # (### 插槽 prefix | suffix)

[//]: # (```tsx)

[//]: # (import React, {useEffect, useState} from 'react';)

[//]: # (import {Input, Button, UserHollow, Letter} from 'ayongUI')

[//]: # (import type {InputProps} from 'ayongUI')

[//]: # ()

[//]: # (export default &#40;&#41; => {)

[//]: # (  const [modelValue, setValue] = useState&#40;''&#41;;)

[//]: # (  const [modelValue1, setValue1] = useState&#40;''&#41;;)

[//]: # (  const prefixN = <UserHollow/>)

[//]: # (  const suffix = <Letter/>)

[//]: # (  return &#40;<div style={{display: 'flex', columnGap: '5px'}}>)

[//]: # (    <Input value={modelValue} type="text" prefix={prefixN} placeholder='请输入姓名'>)

[//]: # (    </Input>)

[//]: # (    <Input value={modelValue1} type="number" suffix={suffix} placeholder='请输入姓名'>)

[//]: # (    </Input>)

[//]: # (  </div>&#41;)

[//]: # (})

[//]: # (```)

| 属性名         | 说明                                       | 类型     | 默认值    | 版本  |
|-------------|------------------------------------------|--------|--------|-----|
| value       | 绑定的值                                     | string | number | ''  | 1.0  |
| placeholder | input占位符                                 | string | 请输入值   | 1.0 |
| type        | input类型 'number' \| 'text' \| 'password' | string | test   | 1.0 |
| prefix      | 输入框前置插槽                                  | -      | -      | 1.0 |
| suffix      | 输入框后置插槽                                  | -      | -      | 1.0 |

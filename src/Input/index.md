---
demo:
  cols: 2
---

### 基本使用

```tsx
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
```

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

### maxLength、 trim

```tsx
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


### 组件Props参数

| 属性名             | 描述                                         | 类型           | 默认值                                                       | 支持版本  |
|------------------|----------------------------------------------|----------------|--------------------------------------------------------------|------------|
| value            | 输入框的值                                   | string         | ''                                                           | 1.0        |
| disabled         | 是否禁用输入框                                | boolean        |                                                              | 1.0        |
| type             | 输入框的类型                                 | string         | 'text'                                                       | 1.0        |
| className        | 自定义样式类名                               | string         | ''                                                           | 1.0        |
| style            | 自定义样式对象                               | object         | {}                                                           | 1.0        |
| defaultValue     | 输入框的默认值                               | string         | ''                                                           | 1.0        |
| addonBefore      | 输入框前置内容                               | React.Node     | null                                                         | 1.0        |
| addonAfter       | 输入框后置内容                               | React.Node     | null                                                         | 1.0        |
| size             | 输入框尺寸                                   | string         | 'normal'                                                   | 1.0        |
| maxLength        | 输入框的最大长度                             | number         | null                                                         | 1.0        |
| visibilityToggle | 控制可见性的配置对象                         | VisibilityToggle         | [VisibilityToggle参数详解](#VisibilityToggle)  | 1.0        |
| placeholder      | 输入框的占位符文本                           | string         | '请输入值'                                                   | 1.0        |
| prefix           | 输入框前缀元素                               | React.Node     | null                                                         | 1.0        |
| suffix           | 输入框后缀元素                               | React.Node     | null                                                         | 1.0        |
| clerabled        | 是否启用清除按钮                             | boolean        | true                                                         | 1.0        |
| onFocus          | 输入框获得焦点时的回调函数                   | function       | () => {}                                                     | 1.0        |
| onBlur           | 输入框失去焦点时的回调函数                   | function       | () => {}                                                     | 1.0        |
| onKeyUp          | 键盘按键抬起时的回调函数                     | function       | () => {}                                                     | 1.0        |
| onChange         | 输入框值发生变化时的回调函数                 | function       | (e) => {}                                                    | 1.0        |
| onChangeBefore   | 输入框值变化前的回调函数,<br/>可以用于自定义校验,返回true阻止输入| function       | (e) => boolean                                               | 1.0        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; |                                     |                  |                                        |      |


<span id="VisibilityToggle">VisibilityToggle参数详解</span>

| 属性名     | 说明                        | 类型     | 版本  |
|---------|---------------------------|--------|-----|
| visible | 用于受控状态控制密码是否可见，默认为 `false`                     | boolean | 1.0 |
| iconRender    |自定义密码可见性切换图标的渲染函数                    | (visible:boolean) => React.Node    | 1.0 |
| onVisibleChange    | 密码可见性变化的回调函数                       | (visible:boolean) => {} | 1.0 |
 


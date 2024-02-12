# Radio 单选框

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
import {Radio} from 'ayongUI'
import {useState} from "react";

export default () => {
  const [value, setValue] = useState('apple')
  const onChange = (date) => {
    setValue(date)
  };
  return <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <Radio value="alone" checked={true} onChange={onChange}>单个使用</Radio>
    <Radio value="banana" disabled checked={false} onChange={onChange}>禁用</Radio>
    <Radio value="select" disabled checked={true} onChange={onChange}>默认选中+禁用</Radio>
  </div>
}
```

### 多个组合使用

```tsx
import {Radio} from 'ayongUI'
import {useState} from "react";

export default () => {
  const [value, setValue] = useState('apple')
  const onChange = (date) => {
    setValue(date)
  };
  return <div>
    <Radio.Group onChange={onChange} value={value}>
      <Radio value="apple">A</Radio>
      <Radio value="banana">B</Radio>
      <Radio disabled value="ccc">C</Radio>
    </Radio.Group>
  </div>
}
```

### 单个按钮模式

```tsx
import {Radio} from 'ayongUI'
import {useState} from "react";

export default () => {
  const [value, setValue] = useState('apple')
  const onChange = (date) => {
    setValue(date)
  };
  return <div style={{height: '165px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
    <Radio.Button onChange={onChange} size='large' value="large">单个按钮</Radio.Button>
    <Radio.Button onChange={onChange} value="apple">单个按钮</Radio.Button>
    <Radio.Button onChange={onChange} size='small' value="small">单个按钮</Radio.Button>
  </div>
}
```

### 组合按钮模式

```tsx
import {Radio} from 'ayongUI'
import {useState} from "react";

export default () => {
  const [value, setValue] = useState('apple')
  const [value2, setValue2] = useState('apple')
  const [value3, setValue3] = useState('apple')
  const onChange = (date) => {
    setValue(date)
  };
  const onChange2 = (date) => {
    setValue2(date)
  };
  const onChange3 = (date) => {
    setValue3(date)
  };
  return <div style={{height: '165px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>

    <Radio.Group onChange={onChange} size='large' value={value}>
      <Radio.Button value="apple">模式A</Radio.Button>
      <Radio.Button value="banana">模式B</Radio.Button>
      <Radio.Button value="ccc">模式C</Radio.Button>
    </Radio.Group>
    <Radio.Group onChange={onChange2} value={value2}>
      <Radio.Button value="apple">模式A</Radio.Button>
      <Radio.Button value="banana">模式B</Radio.Button>
      <Radio.Button value="ccc">模式C</Radio.Button>
    </Radio.Group>
    <Radio.Group onChange={onChange3} size='small' value={value3}>
      <Radio.Button value="apple">模式A</Radio.Button>
      <Radio.Button value="banana">模式B</Radio.Button>
      <Radio.Button value="ccc">模式C</Radio.Button>
    </Radio.Group>
  </div>
}
```

## 组件Props参数

| 属性名       | 说明                   | 默认值     | 类型                                                   | 支持版本 |
|-----------|----------------------|---------|------------------------------------------------------|------|
| value     | 多个组合时候当前值            | -       | string \| number                                     | 1.0  |
| className | 自定义样式类名最外层的样式        | -       | string                                               | 1.0  |
| checked   | 是否选中 单个使用需要用到        | false   | boolean                                              | 1.0  |
| disabled  | 禁用                   | false   | boolean                                              | 1.0  |
| children  | 插槽内容                 | -       | React.ReactNode                                      | 1.0  |
| size      | 按钮类型的大小 继承Button组件参数 | default | 'large' \| 'default' \| 'small' \| 'mini'            | 1.0  |
| type      | 按钮类型 继承Button组件参数    | primary | 'primary' \| 'dashed' \| 'safe' \| 'error' \| 'warn' | 1.0  |

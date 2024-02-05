---
order: 20
---

# DatePicker 日期选择框

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
import {DatePicker} from 'ayongUI'
import type {DatePickerProps} from 'ayongUI'

export default () => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  return <div style={{display: "flex", justifyContent: 'space-around'}}>
    <DatePicker onChange={onChange}/>
    <DatePicker onChange={onChange} showTime/>
    <DatePicker onChange={onChange} picker="week"/>
  </div>
}
```
### 配置默认值 || 父组件控制状态 value

```tsx
import {DatePicker, Button} from 'ayongUI'
import type {DatePickerProps} from 'ayongUI'
import {useState} from "react";

export default () => {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    const [value, setValue] = useState(new Date('2024-11-15'))
    const onClick = () => {
        //加加减减value的值，来控制DatePicker的状态值
        setValue(new Date(value.getTime() + 1000 * 60 * 60 * 24))
        console.log('父组件控制日期状态值',value);
    }
    return <div style={{display: "flex", justifyContent: 'space-around'}}>
        <DatePicker onChange={onChange} defaultValue={new Date('2024-11-15')}/>
        <Button onClick={onClick}>父组件控制日期状态值</Button>
        <DatePicker value={value}/>
    </div>
}
```

### 月份、季度、年份

```tsx
import {DatePicker} from 'ayongUI'
import type {DatePickerProps} from 'ayongUI'

export default () => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  return <div style={{display: "flex", justifyContent: 'space-around'}}>

    <DatePicker onChange={onChange} picker="month"/>
    <DatePicker onChange={onChange} picker="quarter"/>
    <DatePicker onChange={onChange} picker="year"/>

  </div>
}
```

### 日期范围选择

```tsx
import {RangePicker} from 'ayongUI';

export default () => {
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };
  return <div style={{display: "flex", justifyContent: 'space-around'}}>
    <RangePicker onChange={onChange} />
    <RangePicker onChange={onChange} showTime/>
  </div>
}
```

```

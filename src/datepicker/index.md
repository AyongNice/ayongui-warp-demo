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
### 配置默认值 defaultValue || 父组件受控状态 value
****需要注意！ 组件value 和 defaultValue 的数据格式需要 Date 格式****
*温馨提示！父组件通过value直接控制日期组件时候， 日期组件在改变日期数据时候 不会单独触发onChange事件； 因为此时日期的数据的状态在父组件维护，所以也不会需要再次单独触发onChange事件；只有点击交互日期组件才会触发onChange事件*
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
        /**
         * 此代码用来模拟 子组件的时间 需要由父组件状态直接控制（ 数据模拟后端接口获取的动态数据）
         * 需要注意！ 组件value 和 defaultValue 的数据格式需要 Date 格式
         * 
         */
        setValue(new Date(value.getTime() + 1000 * 60 * 60 * 12))
       
    }
    return <div style={{display: "flex", justifyContent: 'space-around'}}>
        <DatePicker onChange={onChange} showTime defaultValue={new Date('2024-11-08 21:39:59')}/>
        <Button onClick={onClick}>父组件控制日期状态值</Button>
        <DatePicker showTime value={value}/>
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

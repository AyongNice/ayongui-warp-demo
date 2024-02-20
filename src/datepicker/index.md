---
order: 20
---

# DatePicker 日期选择

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
### 禁止选择

```tsx
import {DatePicker} from 'ayongUI'
import type {DatePickerProps, DayItem} from 'ayongUI'

export default () => {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    const disabledTime = (item: DayItem) => {

        //针对2024-03-08禁用选择
        if (item.comprehensiveStr === '2024-03-08') {
            return true
        }
        return false

    }
    return <div style={{display: "flex", justifyContent: 'space-around'}}>
        <DatePicker onChange={onChange} disabledTime={disabledTime}/>
        <DatePicker disabled/>

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
        <Button onClick={onClick}>父组件控制日期状态=></Button>
        <DatePicker showTime value={value}/>
    </div>
}
```



### 日期范围选择

```tsx
import {RangePicker} from 'ayongUI';

export default () => {
    const onChange = (date, dateString) => {

    };
    return <div style={{display: "flex", justifyContent: 'space-around'}}>
        <RangePicker onChange={onChange}/>
        <RangePicker onChange={onChange} showTime/>
    </div>
}
```

## 组件Props参数



### DatePicker && RangePicker 共同参数



| 属性名                                           | 说明                                                         | 默认值      | 类型             | 支持版本 |
| ------------------------------------------------ | ------------------------------------------------------------ | ----------- | ---------------- | -------- |
| className                                        | 日期选择框的className 样式<br/> className名 必须是module类型的样式 否则无法覆盖组件样式 | -           | string           |          |
| picker                                           | 选择模式 day \| week \| month \|quarter \| year              | day         | string           |          |
| defaultValue                                     | 日期默认值 详情使用见使用说明                                | -           | Date             | 1.0      |
| value                                            | 由父组件的状态控制日期组件显示,在value发生改变时 日期组件不会再次出发 onChange事件 | -           | Date             | 1.0      |
| onClear                                          | 点击清楚按钮触发                                             | () => void  | Function         | 1.0      |
| footerRender                                     | 底部自定义渲染                                               | null        | Function \| null | 1.0      |
| showTime                                         | 是否打开时分秒选择                                           | false       | boolean          | 1.0      |
| disabledTime                                     | 禁止选择日期范围 传入方法返回 true 禁止选择 false 允许选择 详情详见代码实例 | () => false | Function         | 1.0      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; |                                                              |             |                  |          |



## 不同参数

### RangePicker参数

| **属性名**         | 说明                                                         | 默认值 | 类型 | **支持版本** |
| ------------------ | ------------------------------------------------------------ | ------ | ---- | ------------ |
| onChange           | 日期发生变化时候触发该事件[DayItem参数详解](#DayItem)  day数据结构为字符类型数组<br/>只有在picker为 week时候会有dateString参数 |        |      |              |
| &emsp;&emsp;&emsp; |                                                              |        |      |              |



### DatePicker参数

| **属性名** | 说明                                                         | 默认值                           | 类型     | **支持版本** |
| ---------- | ------------------------------------------------------------ | -------------------------------- | -------- | ------------ |
| onChange   | 日期发生变化时候触发该事件,<br/> [DayItem参数详解](#DayItem) 只有在picker为 week时候会有dateString参数  并且day数据结构为数组 | (day:DayItem,dateString) => void | Function | 1.0          |

<span id="DayItem">DayItem参数详解</span>

| 属性名           | 说明                              | 类型    | 版本 |
| ------- | --------------------------------- | ------- | ---- |
| date             | 天数日期字符                      | number  | 1.0  |
| comprehensive    | 日期类型对象                      | File    | 1.0  |
| comprehensiveStr | 日期字符  例如 2024-02-03         | string  | 1.0  |
| monthSortMode    | 日期模式 0 上个月 1 当月 2 下个月 | number  | 1.0  |
| isSelected       | 是否选中                          | number  | 1.0  |
| isRangeSelected  | 是否下拉框显示范围内              | boolean | 1.0  |
| isToday          | 是否是今年今天                    | boolean | 1.0  |

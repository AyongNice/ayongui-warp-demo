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
        // console.log(date, dateString);
    };
    return <div style={{display: "flex", justifyContent: 'space-around'}}>
        <DatePicker onChange={onChange}/>
        <DatePicker onChange={onChange} picker="week"/>
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
        <RangePicker onChange={onChange}/>
    </div>
}
```


```

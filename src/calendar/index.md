# Calendar 日历

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
import {Calendar, Select} from 'ayongUI'

export default () => {
  return <Calendar/>
}
```

### 默认值+ 通过状态控制日期

```tsx
import {Calendar, Select} from 'ayongUI'

export default () => {
  return <Calendar defaultValue='2024-02'/>
}
```

### 日期单选

```tsx
import {Calendar, Select} from 'ayongUI'

export default () => {
  const onChange = (dayItem) => {
    console.log(dayItem)
  }
  return <Calendar selectedMode='single' onChange={onChange}/>
}
```

### 日期多选

```tsx
import {Calendar, Select} from 'ayongUI'

export default () => {

  const onChange = (dayItem) => {
    console.log(dayItem)
  }
  return <Calendar selectedMode='multiple' onChange={onChange}/>
}
```

### card卡片模式

`我们可以通过配置style 的宽度来调整日历大小`

```tsx
import {Calendar, Select} from 'ayongUI'

export default () => {
  return <Calendar style={{width: '50px', height: '50px'}}/>
}
```

### 自定义单元格渲染内容

```tsx
import {Calendar, Select} from 'ayongUI'
import style from './index.module.less'

export default () => {
  return <Calendar dayCellRender={(item) => {
    return <div className={style.ayongcalen}>
      {item.date}
      {item.date === '08' ? <p>这是一个自定义日期</p> : ''}
    </div>
  }}/>
}
```

### 组件Props参数

| 属性名             | 说明                                           | 是否必填 | 类型                                      | 默认值                          | 版本     |
| ------------------ |----------------------------------------------|--------|-----------------------------------------|------------------------------|--------|
| selectedMode  | 选择模式 noSelect 可根据选择日期进行切换。single单选  multiple多选 | 否       | 'noSelect' \| 'single' \| 'multiple' | noSelect      | 1.0  |
| style              | css行间样式写法 参考代码示例                             | 否 | string                                  | width:'150px'                | 1.0    |
| onChange           | 选中值改变时的回调 方法接受当前选中的值   [DayItem参数详解](#DayItem)                      | 否 | (value: string  string[]) => void;      | ()=>{}                       | 1.0 |
| disabled           | 禁用                                |   否    | boolean                                 | false                        | 1.0 |
| dayCellRender | 自定义日期渲染             | 否 | (day: DayItem) => React.ReactNode | null;                        |     |

<span id="DayItem">DayItem参数详解</span>

| 属性名           | 说明                                              | 类型    | 版本 |
| ---------------- | ------------------------------------------------- | ------- | ---- |
| date             | 天数日期字符                                      | string  | 1.0  |
| comprehensive    | Date  日期格式数据(JS数据类型)                    | string  | 1.0  |
| comprehensiveStr | 年月日 字符; "2024-02-02"                         | boolean | 1.0  |
| monthSortMode    | 日期在跟当前显示范围对比 0 上个月 1 当月 2 下个月 | number  | 1.0  |
| isSelected       | 是否选中                                          | boolean | 1.0  |
| isRangeSelected  | 是否在范围内                                      | boolean | 1.0  |
| isToday          | 是否是今年今天                                    | boolean | 1.0  |

# pagination 分页器

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
import {Pagination} from 'ayongUI'

export default () => {
    const [modelValue, setValue] = useState('');

    const onSizeChange = (pageSize) => {
        console.log('页码显示大小变化了!', pageSize)
    }
    const onCurrentChange = (pageNo) => {
        console.log('当前页码变化了', pageNo)
    }


    return <Pagination onSizeChange={onSizeChange} onCurrentChange={onCurrentChange}/>
}
```

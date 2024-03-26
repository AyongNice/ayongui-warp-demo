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

    const onCurrentChange = (pageNo) => {
        console.log('当前页码变化了', pageNo)
    }
    return <Pagination total={150} onCurrentChange={onCurrentChange}/>
}
```


### 展示所有配置

```tsx
import React, {useEffect, useState} from 'react';
import {Pagination} from 'ayongUI'

export default () => {


    const onSizeChange = (pageSize) => {
        console.log('页码显示大小变化了!', pageSize)
    }
    const onCurrentChange = (pageNo) => {
        console.log('当前页码变化了', pageNo)
    }


    return <Pagination
        total={50}
        showQuickJumper
        showSizeChanger
        onSizeChange={onSizeChange}
        onCurrentChange={onCurrentChange}
    />
}
```


### 自定义分页大小

```tsx
import React, {useEffect, useState} from 'react';
import {Pagination} from 'ayongUI'

export default () => {


    const onSizeChange = (pageSize) => {
        console.log('页码显示大小变化了!', pageSize)
    }
    const onCurrentChange = (pageNo) => {
        console.log('当前页码变化了', pageNo)
    }


    return <Pagination
        total={50}
        pageSizeOptions={[15,30]}
        showSizeChanger
        onSizeChange={onSizeChange}
        onCurrentChange={onCurrentChange}
    />
}
```

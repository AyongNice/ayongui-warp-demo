---
demo:
  cols: 2
---
# pagination 分页器

```tsx  hideCode=true inline=true
import {usePrefersColor} from 'dumi';
import React, {useEffect} from 'react';
import {setThemeVariables} from "ayongui";
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
import {Pagination} from 'ayongui'

export default () => {

    const onCurrentChange = (pageNo) => {
        // console.log('当前页码变化了', pageNo)
    }
    return <Pagination total={150} onCurrentChange={onCurrentChange}/>
}
```


### 展示所有配置

```tsx
import React, {useEffect, useState} from 'react';
import {Pagination} from 'ayongui'

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

<code src="./demos/min.tsx">迷你版分页器</code>
<code src="./demos/diysize.tsx">自定义分页范围大小</code>

 
 


### 分页器 入参详情介绍
| 属性名             | 说明                               | 默认值 | 类型                                  | 支持版本 |
|--------------------|--------------------------------------|--------|---------------------------------------|----------|
| total              | 总数                                 | -      | number                                |          |
| current            | 当前页                               | -      | number                                |          |
| pageSize           | 每页条数                             | -      | number                                |          |
| disabled           | 是否禁用                             | -      | boolean                               |          |
| showJumpInput      | 是否显示跳转输入框                   | -      | boolean                               |          |
| showSizeChanger    | 是否显示每页条数选择器               | -      | boolean                               |          |
| hideOnSinglePage   | 只有一页时是否隐藏                   | -      | boolean                               |          |
| pageSizeOptions    | 每页条数选择器可选值                 | -      | string[] \| number[]                  |          |
| onChange           | 页码变化回调                         | -      | (pageNo: number) => void              |          |
| size               | 大小                                 | -      | string                                |          |
| showQuickJumper   | 是否显示跳转                         | -      | boolean                               |          |
| onSizeChange       | 大小变化回调                         | -      | (pageSize: number) => void            |          |
| onCurrentChange    | 当前页变化回调                       | -      | (pageNo: number) => void              |          |

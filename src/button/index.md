---
nav:
  title: 使用说明
---

# Button


Demo:
这是一个button组件使用说明

### 基本用法

```tsx

import React from 'react';
import {Button, Message} from 'ayongUI';
import style from "./index.module.less";

export default () => {
   

    return (
        <React.Fragment>
          <Button className={style.button}>默认类型</Button>
          <Button className={style.button} type='dashed'>dashed-虚线按钮</Button>
          <Button className={style.button} type='primary'>primary-主题按钮</Button>
          <Button className={style.button} type='error'>dangerous-危险按钮</Button>
          <Button className={style.button} type='warn'>warn-警告按钮</Button>
          <Button className={style.button} type='safe'>safe-安全按钮</Button>
        </React.Fragment>
    );
};
```


### shape形状设置

```tsx

import React from 'react';
import {Button, Message} from 'ayongUI';
import style from "./index.module.less";

export default () => {
 
    return (
        <React.Fragment>
            <Button className={style.button}>默认-按钮</Button>
            <Button className={style.button} shape='strong'>直角-按钮</Button>
            <Button className={style.button} shape='round'>round-椭圆钮</Button>
            <Button className={style.button} type='primary' href='https://github.com/AyongNice/ayongUI'>
                href-跳转按钮
            </Button>
        </React.Fragment>
    );
};
```


### 自定义 className 样式

```tsx

import React from 'react';
import {Button, Message} from 'ayongUI';
import style from "./index.module.less";

export default () => {
 
    return (
      <Button className={style.diy}>
        自定义样式
      </Button>
    );
};
```

### 设置防抖 1000毫秒


```tsx 

import React from 'react';
import {Button, Message} from 'ayongUI';
import style from "./index.module.less";

export default () => {
    const onClick = () => {

    };
    return (
        <Button type='primary' onClick={onClick} time={1000}>
            small-ayongUI
        </Button>
    );
};
```

| 属性名   | 说明                                        | 类型   | 默认值  | 版本 |
| -------- | ------------------------------------------- | ------ | ------- | ---- |
| type     | 按钮类型 'primary' \| 'default' \| 'dashed' | string | default | 1.0  |
| time     | 防抖时间设置 0 为不防抖                     | number | -       | 1.0  |
| size     | 按钮大小 'large' \| 'default' \| 'small'    | string | default | 1.0  |
| shape    | 按钮形状 'circle' \| 'default' \| 'round'   | string | default | 1.0  |
| htmlType | 原生button类型                              | string | button  | 1.0  |


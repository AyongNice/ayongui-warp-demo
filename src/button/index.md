---
nav:
  title: Components
---

# Button


Demo:
这是一个button组件使用说明

```tsx

import React from 'react';
import {Button, Message} from 'ayongUI';
import style from "./index.module.less";

export default () => {
    const onClick = () => {

    };

    return (
        <React.Fragment>
          <Button onClick={onClick} className={style.button}>默认类型</Button>
          <Button className={style.button} type='dashed'>dashed-虚线按钮</Button>
          <Button className={style.button} type='primary'>primary-主题按钮</Button>
          <Button className={style.button} type='error'>dangerous-危险按钮</Button>
          <Button className={style.button} type='warn'>warn-警告按钮</Button>
          <Button className={style.button} type='safe'>safe-安全按钮</Button>
        </React.Fragment>
    );
};
```

| **属性名** | **说明** | 类型 | **默认值** | 版本 |
| ---------- | -------- | ---- | ---------- | ---- |
|            |          |      |            |      |
|            |          |      |            |      |
|            |          |      |            |      |


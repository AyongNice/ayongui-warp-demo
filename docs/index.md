---
hero:
  title: AyongUI
  description: <p class='description'> AyongUI 是一个功能丰富的 React UI组件库 可以帮助开发者更加「高效」地搭建出 「优美」页面 ～</p>
  actions:
    - text: 让我们开始吧
      link: /components/button

#
#features:
#
#  - title: 组件丰富，选用自如
#    emoji: 🌈
#    description: 大量实用组件满足你的需求，灵活定制与拓展
#
#  - title: 关注阿勇学前端
#    description: 获取组件库最新版本动态  </br>  最新的前端技术文章博客
---


```tsx  hideCode=true inline=true
import {usePrefersColor} from 'dumi';
import React, {useEffect} from 'react';
import {setThemeVariables} from "ayongUI";
import {ModeTheme} from '../globe/theme.ts'

export default () => {
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor();
  useEffect(() => {
    setThemeVariables(new ModeTheme()[color])
  }, [color])

};
```

```tsx hideCode=true inline=true
import React from 'react';
import style from './index.module.less';
import './index.less'

export default () => {

    const descriptionLsit = [
        {
            title: '关注微信公众号:阿勇学前端',
            img: <img src='/ayonguidocs/images/weixin.png'/>,
            description: <p>最新的组件库版本动态 <br/> 最新的前端技术文章博客</p>
        },

    ]

    return <div className={style.warp}>

        {descriptionLsit.map((item, index) => {
            return <dd className={style.ddbox} key={index}>
                <h3>{item.title}</h3>
                {item.description}
                {item.img}

            </dd>
        })}
    </div>
}
```

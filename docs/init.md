# 安装初始化

<span style="color: #808080;">使用 npm 或 yarn 或 pnpm 安装
我们推荐使用 npm 或 yarn 或 pnpm
的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</span>

## 下载

[//]: # "#### npm"

[//]: #

[//]: # "```clickhouse"

[//]: # "      npm install ayongUI --save"

[//]: # "```"

[//]: # "#### yarn"

[//]: #

[//]: # "```clickhouse"

[//]: # "      yarn add ayongUI  "

[//]: # "```"

[//]: # "#### pnpm"

[//]: #

[//]: # "```clickhouse"

[//]: # "      pnpm install ayongUI --save"

[//]: # "```"

```tsx hideCode=true inline=true
import React, {useState} from 'react';
import './index.less';

const TabSwitcher = () => {
    const [activeTab, setActiveTab] = useState('npm');
    const list = [
      {name: 'npm', install: 'npm install ayongUI --save'},
      {
        name: 'yarn',
        install: 'yarn add ayongUI '
      },
      {name: 'pnpm', install: 'pnpm install ayongUI --save'}
    ]
    const handleTabClick = (item) => {
      setActiveTab(item.name);
    };

    return (
      <div>
        <div className="tabs">
          {list.map((item, index) => {
            return <div
              key={index}
              className={`tab ${activeTab === item.name ? 'active' : ''}`}
              onClick={() => handleTabClick(item)}
            >
              {item.name}
            </div>
          })}
        </div>

        <div className="tab-content">
          {list.map((item, index) => {
            if (activeTab === item.name) {
              return <pre>{item.install}</pre>
            }
          })}
        </div>
      </div>
    );
  }
;

export default TabSwitcher;
```

## 样式配置

<span style="color: #808080;">我们需要在项目入口文件 main.js 中引入 ayongUI 的样式文件：</span>

```tsx | pure
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";

import './index.css' //引入项目全局样式
import 'ayongUI/style.css' //引入组件样式

const root: ReactDOM.Root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

```

## 自定义主题色

### CSS固定配置主题色

***<span style="color: #808080;">我们只需要在项目全局样式 `index.css`
中添加如下代码即可：</span> [组件全局样式配置表详情](#ayonUIcss)***

```css | pure
:root {
  --ayong-primary: #8aabec; /* 更改ayongUI主题色 */
}
```

***<span style="color: #808080;">并且在项目入口文件 ` main.js ` 中引入</span>***

```tsx | pure
import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";

import './index.css' //引入项目全局样式
import 'ayongUI/style.css' //引入组件样式

const root: ReactDOM.Root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

```

### JS动态配置主题色

***<span style="color: #808080;">我们还提供了 JS动态配置主题色 方式,</br>那么什么业务场景需要动态配置主题色?</br>
例如项目有切换全局主题色需求
那么组件内部的主题色也要动态的切换</span>***

```tsx  | pure
import React, {useEffect} from 'react';
import {setThemeVariables} from "ayongUI";

export default () => {
    return <div onClick={() => setThemeVariables({'ayong-primary': '#FF8CB8FF'})}>切换主题色</div>
};
```

<span id="ayonUIcss"  style="color:#8aabec;">**组件全局样式字段表详情**</span>

| 样式名        | 值       | 说明           |
| ------------- | -------- | -------------- |
| ayong-primary | \#8aabec | 组件全局主题色 |
|               |          |                |
|               |          |                |


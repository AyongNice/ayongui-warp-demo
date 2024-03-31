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
import style from './index.module.less';


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
                <div className={style.tabs}>
                    {list.map((item, index) => {
                        return <div
                            key={index}
                            className={`${style.tab} ${activeTab === item.name ? style.active : ''}`}
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

<span style="color: #808080;">我们需要在项目入口文件 main.js 中引入 ayongUI 的样式文件：为了保证 自定义className可以覆盖组件内部样式
一定要将组件样式 引入在 App.tsx 之前!!!</span>

```tsx | pure
import React from 'react';
import {createRoot} from 'react-dom/client';

import 'ayongUI/style.css'; //引入组件样式

import App from './App.tsx';

import {BrowserRouter} from "react-router-dom";

import './index.css' //引入项目全局样式


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
import React from 'react';
import {createRoot} from 'react-dom/client';
import 'ayongUI/style.css'; //引入组件样式


import App from './App.tsx';
import {BrowserRouter} from "react-router-dom";

import './index.css'; //引入项目全局样式

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

| 样式名                       | 值         | 说明                      |
|---------------------------|-----------|-------------------------|
| ayong-primary             | \#8aabec  | 组件全局主题色                 |
| ayong-safe                | #8e8e8e   | 安全                      |
| ayong-error               | #ad0000   | 危险                      |
| ayong-warn                | #d6af0c   | 警告                      |
| ayong-font-color          | #fff      |                         |
| ayong-selected-font-color | #ffffff   | 选中文字颜色                  |
| ayong-selected-bg-color   | #8aabec   | 选中背景色                   |
| ayong-font-dark           | #222731   |                         |
| ayong-light               | #fff      |                         |
| ayong-bolck               | #000      | 黑夜色                     |
| ayong-table-thead-color   | #f5f5f5   |                         |
| ayong-beige               | #EDF9E6FF | 米黄 message组件            |
| ayong-leaf-yellow         | #d1eac1   | 叶黄  message组件           |
| ayong-apricot-yellow      | #58BA2DFF | 杏黄  message组件           |
| ayong-message-error       | #f79797   |                         |
| ayong-grey                | #dcdfe6   | 灰色                      |
| ayong-primary-grey        | #f0f4fd   | 主题灰                     |
| ayong-premium-grey        | #ededed   | 高级灰                     |
| ayong-stone-gray          | #9b9ea4   | 石灰色 字体颜色 边框颜色  select字体 |
| ayong-dark-green-gray     | #747679   | 浅莲灰  table字体            |
| ayong-grey-crescent       | #f4f4f5   | 月牙灰色                    |
| ayong-carbon-gray         | #222731   | 碳灰色                     |

# Select 选择器




```tsx  hideCode=true inline=true
import {usePrefersColor} from 'dumi';
import React, {useEffect} from 'react';
import {setThemeVariables} from "ayongUI";
import {ModeTheme} from '../../globe/theme.ts'

export default ({children}) => {
    // color 为当前应用的主题色，dark or light
    const [color] = usePrefersColor();
    useEffect(() => {
        setThemeVariables(new ModeTheme()[color])
    }, [color])

};
```


### 基本用法

  ```tsx
import React from 'react';
import {Select} from 'ayongUI';
export default () => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };
    return (<React.Fragment>
        <Select
            onChange={handleChange}
            style={{width: 150}}
            options={[
                {value: 'jack', label: 'Jack'},
                {value: 'lucy', label: 'Lucy'},
                {value: 'Yiminghe', label: 'yiminghe'},
                {value: 'ayong', label: 'ayong'},
                {value: 'ui-com', label: 'ui-com'},
                {value: 'ayong5', label: 'ayong5'},
                {value: 'ayong1', label: 'ayong1'},
                {value: 'ayong2', label: 'ayong2'},
                {value: 'ayong3', label: 'ayon3'},
                {value: 'disabled', label: 'Disabled', disabled: true},
            ]}
        />

        <span>&nbsp;&nbsp;&nbsp;</span>

        <Select
            defaultValue='jack'
            onChange={handleChange}
            style={{width: 150}}
            options={[
                {value: 'jack', label: 'Jack'},
                {value: 'disabled', label: 'Disabled', disabled: true},
            ]}
        />

        <span>&nbsp;&nbsp;&nbsp;</span>

        <Select
            defaultValue='ayong'
            style={{width: 150}}
            disabled
            onChange={handleChange}
            options={[
                {value: 'ayong', label: 'ayong'},
            ]}
        />
    </React.Fragment>)
};

  ```

### 显示清除按钮

```tsx
import React from 'react';
import {Select} from 'ayongUI';
import style from './index.module.less';

export default () => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };
    return (<React.Fragment>
        <Select
            defaultValue='jack'
            clearable
            style={{width: 150}}
            onChange={handleChange}
            options={[
                {value: 'jack', label: 'Jack'},
            ]}
        />
    </React.Fragment>)
};
```

### 自定义className 样式

```tsx
import React from 'react';
import {Select} from 'ayongUI';
import style from './index.module.less';

export default () => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };
    return (<React.Fragment>
        <Select
            className={style.diy}
            defaultValue='jack'
            clearable
            options={[
                {value: 'jack', label: 'Jack'},
            ]}
        />
    </React.Fragment>)
};
```

### 多条选择

  ```tsx
import React from 'react';
import {Select} from 'ayongUI';

export default () => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };
    return (<div style={{display: 'flex'}}>
        <Select
            mode='multiple'
            defaultValue={['lucy', 'jack']}
            style={{width: '300px'}}
            onChange={handleChange}
            options={[
                {value: 'jack', label: 'Jack'},
                {value: 'lucy', label: 'Lucy'},
                {value: 'Yiminghe', label: 'yiminghe'},
                {value: 'ayong', label: 'ayong'},
                {value: 'ui-com', label: 'ui-com'},
                {value: 'ayong5', label: 'ayong5'},
                {value: 'ayong1', label: 'ayong1'},
                {value: 'ayong2', label: 'ayong2'},
                {value: 'ayong3', label: 'ayon3'},
                {value: 'disabled', label: 'Disabled', disabled: true},
            ]}
        />
        <span>&nbsp;&nbsp;&nbsp;</span>
        <Select
            mode='tag'
            search
            defaultValue={['lucy', 'jack']}
            style={{width: 300}}
            onChange={handleChange}
            options={[
                {value: 'jack', label: 'Jack'},
                {value: 'lucy', label: 'Lucy'},
                {value: 'Yiminghe', label: 'yiminghe'},
                {value: 'ayong', label: 'ayong'},
                {value: 'ui-com', label: 'ui-com'},
                {value: 'ayong5', label: 'ayong5'},
                {value: 'ayong1', label: 'ayong1'},
                {value: 'ayong2', label: 'ayong2'},
                {value: 'ayong3', label: 'ayon3'},
                {value: 'disabled', label: 'Disabled', disabled: true},
            ]}
        />

    </div>)
};

  ```

### 搜索选择

  ```tsx
import React from 'react';
import {Select} from 'ayongUI';

export default () => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };
    return (<React.Fragment>
        <Select
            search
            mode='tag'
            defaultValue={['lucy']}
            style={{width: 300}}
            onChange={handleChange}
            options={[
                {value: 'jack', label: 'Jack'},
                {value: 'lucy', label: 'Lucy'},
                {value: 'Yiminghe', label: 'yiminghe'},
                {value: 'ayong', label: 'ayong'},
                {value: 'ui-com', label: 'ui-com'},
                {value: 'ayong5', label: 'ayong5'},
                {value: 'ayong1', label: 'ayong1'},
                {value: 'ayong2', label: 'ayong2'},
                {value: 'ayong3', label: 'ayon3'},
                {value: 'disabled', label: 'Disabled', disabled: true},
            ]}
        />

      <span>&nbsp;&nbsp;&nbsp;</span>
      
      <Select
        search
        defaultValue='lucy'
        style={{width: 300}}
        onChange={handleChange}
        options={[
          {value: 'jack', label: 'Jack'},
          {value: 'lucy', label: 'Lucy'},
          {value: 'Yiminghe', label: 'yiminghe'},
          {value: 'ayong', label: 'ayong'},
          {value: 'ui-com', label: 'ui-com'},
          {value: 'ayong5', label: 'ayong5'},
          {value: 'ayong1', label: 'ayong1'},
          {value: 'ayong2', label: 'ayong2'},
          {value: 'ayong3', label: 'ayon3'},
          {value: 'disabled', label: 'Disabled', disabled: true},
        ]}
      />
    </React.Fragment>)
};

  ```

### 自定义下拉菜单模版

  ```tsx
import React from 'react';
import {Select} from 'ayongUI';
import style from "./index.module.less";

export default () => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };
    return (<React.Fragment>
        <Select
            defaultValue='lucy'
            style={{width: 300}}
            onChange={handleChange}
            options={[
                {value: 'jack', label: 'Jack'},
                {value: 'lucy', label: 'Lucy'},
                {value: 'Yiminghe', label: 'yiminghe'},
                {value: 'ayong', label: 'ayong'},
                {value: 'ui-com', label: 'ui-com'},
                {value: 'ayong5', label: 'ayong5'},
                {value: 'ayong1', label: 'ayong1'},
                {value: 'ayong2', label: 'ayong2'},
                {value: 'ayong3', label: 'ayon3'},
                {value: 'disabled', label: 'Disabled', disabled: true},
            ]}
            optionRender={(option) => {
                return <div>
                    <span className={style.diyOption}> {option.label}</span>
                    <span
                        className={style.diyOption}> {option.label}</span>
                </div>

            }}
        />
    </React.Fragment>)
};

  ```


### 自定义下拉菜单的头部

  ```tsx
import {useEffect, useState} from 'react';
import {Select} from 'ayongUI';
import style from "./index.module.less";

export default () => {
    const [checked, setChecked] = useState<boolean>(false);
    const [value, setValue] = useState<string[]>(['lucy']);
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };
    const options = [
        {value: 'jack', label: 'Jack'},
        {value: 'lucy', label: 'Lucy'},
        {value: 'Yiminghe', label: 'yiminghe'},
        {value: 'ayong', label: 'ayong'},
        {value: 'ui-com', label: 'ui-com'},
        {value: 'ayong5', label: 'ayong5'},
        {value: 'ayong1', label: 'ayong1'},
        {value: 'ayong2', label: 'ayong2'},
        {value: 'ayong3', label: 'ayon3'},
        {value: 'disabled', label: 'Disabled', disabled: true},
    ]
    useEffect(() => {
        setValue((prevState) => {
            return checked ? options.map(_ => _.value) : []
        })
    }, [checked])
    const onChecked = (e) => {
        setChecked(!checked)
    }
    const onChange = (e) => {

    }
    return (<React.Fragment>
        <Select
            defaultValue={['lucy']}
            style={{width: 300}}
            value={value}
            collapseTags
            onChange={handleChange}
            options={options}
            optionHeaderRender={(option) => {
                return <input type='radio'
                              onClick={onChecked}
                              onChange={() => {
                              }} checked={checked}/>
            }}
        />
    </React.Fragment>)
};

  ```

### 组件Props参数

| 属性名             | 说明                                           | 是否必填 | 类型                                      | 默认值                          | 版本     |
| ------------------ |----------------------------------------------|--------|-----------------------------------------|------------------------------|--------|
| className          | 样式 className名 必须是module类型的样式 否则无法覆盖组件样式         |   否    | string                                  | -                            |     1.0    |
| defaultValue       | 默认值                                          | 否 | string \| string[]                      | string                       | 1.0   |
| value              | 选中值 再搭配父组件直接控制组件选中值的时候需要用到  参考自定义头部下拉模版 代码示例 | 否     | -                                       | -                            | 1.0    |
| style              | css行间样式写法 参考代码示例                             | 否 | string                                  | width:'150px'                | 1.0    |
| onChange           | 选中值改变时的回调 方法接受当前选中的值                         | 否 | (value: string  string[]) => void;      | ()=>{}                       | 1.0 |
| disabled           | 是否禁用                                         |   否    | boolean                                 | false                        | 1.0 |
| clearable          | 是否可清空                                        | 否 | boolean                                 | false                        | 1.0    |
| search             | 是否可搜索                                        |    否    | boolean                                 | false                        | 1.0 |
| collapseTags       | 是否折叠多选                                       |    否    | boolean                                 | false                        | 1.0 |
| optionRender       | 自定义下拉模版 内容                                   |    否    | (opt: Options) => React.FC              | null                         |   1.0      |
| optionHeaderRender | 自定义头部下拉模版  内容                                |   否    | (opt: Options) => React.FC ; | null  [Option参数详解](#Options) |    1.0     |

<span id="Options">Options参数详解</span>

| 属性名   | 说明     | 类型    | 版本 |
| -------- | -------- | ------- | ---- |
| value    | 参数值   | string  | 1.0  |
| label    | 下拉文案 | string  | 1.0  |
| disabled | 是否禁用 | boolean | 1.0  |


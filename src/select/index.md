# Select 选择器

### 基本用法

  ```tsx
import React from 'react';
import {Select} from 'ayongUI';

console.log(Select);
export default () => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };
    return (<div style={{display: "flex"}}>
        <Select
            defaultValue='lucy'
            style={{width: 150}}
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

        <span>&nbsp;&nbsp;</span>

        <Select
            defaultValue='jack'
            style={{width: 150}}
            onChange={handleChange}
            options={[
                {value: 'jack', label: 'Jack'},
                {value: 'disabled', label: 'Disabled', disabled: true},
            ]}
        />

        <span>&nbsp;&nbsp;</span>

        <Select
            defaultValue='ayong'
            style={{width: 150}}
            disabled
            onChange={handleChange}
            options={[
                {value: 'ayong', label: 'ayong'},
            ]}
        />
    </div>)
};

  ```

### 显示清除按钮

```tsx
import React from 'react';
import {Select} from 'ayongUI';
export default () => {
  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };
  return (<React.Fragment>
    <Select
      defaultValue='jack'
      style={{width: 150}}
      clearable
      onChange={handleChange}
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

console.log(Select);
export default () => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };
    return (<React.Fragment>
        <Select
            defaultValue={['lucy', 'jack']}
            style={{width: 300}}
            clearable
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

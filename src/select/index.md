
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
    return (<React.Fragment>
      <Select
        defaultValue={["lucy", "jack"]}
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

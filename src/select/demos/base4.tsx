import { Select } from 'ayongui';
import React from 'react';

export default () => {
  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };
  return (
    <React.Fragment>
      <Select
        search
        mode="tag"
        defaultValue={['lucy']}
        style={{ width: 300, marginBottom: 20}}
        onChange={handleChange}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'ayong', label: 'ayong' },
          { value: 'ui-com', label: 'ui-com' },
          { value: 'ayong5', label: 'ayong5' },
          { value: 'ayong1', label: 'ayong1' },
          { value: 'ayong2', label: 'ayong2' },
          { value: 'ayong3', label: 'ayon3' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
    

      <Select
        search
        defaultValue="lucy"
        style={{ width: 300 }}
        onChange={handleChange}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'ayong', label: 'ayong' },
          { value: 'ui-com', label: 'ui-com' },
          { value: 'ayong5', label: 'ayong5' },
          { value: 'ayong1', label: 'ayong1' },
          { value: 'ayong2', label: 'ayong2' },
          { value: 'ayong3', label: 'ayon3' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
    </React.Fragment>
  );
};

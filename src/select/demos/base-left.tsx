import React from 'react';
import { Select } from 'ayongUI';
export default () => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };
    return (
        <React.Fragment>
            <Select
                onChange={handleChange}
                style={{ width: 150 }}
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
            
            <span>&nbsp;&nbsp;&nbsp;</span>
            
            <Select
                defaultValue="jack"
                onChange={handleChange}
                style={{ width: 150 }}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
            />
          
        </React.Fragment>
    );
};
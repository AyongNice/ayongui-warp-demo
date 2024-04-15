import React from 'react';
import { Select } from 'ayongui';
export default () => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };
    return (
        <React.Fragment>
            <Select
                clearable
                style={{ width: 150 }}
                onChange={handleChange}
                options={[
                    { value: 'docs', label: 'docs' },
                    { value: 'ayong', label: 'ayong' },
                ]}
            />
        </React.Fragment>
    );
};
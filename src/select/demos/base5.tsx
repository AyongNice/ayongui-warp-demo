import React from 'react';
import { Select } from 'ayongUI';
import style from '../index.module.less';

export default () => {
    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };
    return (
        <React.Fragment>
            <Select
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
                optionRender={(option) => {
                    return (
                        <div>
                            <span className={style.diyOption}> {option.label}</span>
                            <span className={style.diyOption}> {option.label}</span>
                        </div>
                    );
                }}
            />
        </React.Fragment>
    );
};
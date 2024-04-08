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
                className={style.diy}
                defaultValue="jack"
                clearable
                options={[{ value: 'jack', label: 'Jack' }]}
            />
        </React.Fragment>
    );
};
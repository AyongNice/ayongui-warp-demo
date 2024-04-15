import {useEffect, useState} from 'react';
import {Select} from 'ayongui';
import React from 'react';
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
    ];
    useEffect(() => {
        setValue((prevState) => {
            return checked ? options.map((_) => _.value) : [];
        });
    }, [checked]);
    const onChecked = (e) => {
        setChecked(!checked);
    };
    const onChange = (e) => {
    };
    return (
        <React.Fragment>
            <Select
                defaultValue={['lucy']}
                style={{width: 300}}
                value={value}
                collapseTags
                onChange={handleChange}
                options={options}
                optionHeaderRender={(option) => {
                    return (
                        <input
                            type="radio"
                            onClick={onChecked}
                            onChange={() => {
                            }}
                            checked={checked}
                        />
                    );
                }}
            />
        </React.Fragment>
    );
};
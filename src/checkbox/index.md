---
order: 17
---

# Checkbox 多选框

### 基本使用

```tsx
import {Checkbox} from 'ayongUI'
import type {CheckboxProps} from 'ayongUI'

export default () => {
    const onChange = (res) => {
        console.log(res);
    };
    return <div>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <Checkbox onChange={onChange} checked disabled>Checkbox</Checkbox>
        <Checkbox onChange={onChange} disabled>Checkbox</Checkbox>
    </div>
}
```

### 组合使用

  ```tsx
import {useState} from 'react'
import {Checkbox} from 'ayongUI'
import type {CheckboxProps} from 'ayongUI'

const plainOptions = [
    {label: 'Apple', value: 'Apple'},
    {label: 'Pear', value: 'Pear'},
    {label: 'Orange', value: 'Orange', disabled: false}
];
const defaultCheckedList = [{label: 'Pear', value: 'Pear'}];
export default () => {
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

    const onChange = (list) => {
        console.log('list', list)
        setCheckedList(list);
    };

    const onCheckAllChange: CheckboxProps['onChange'] = (checked) => {
        console.log(checked)
        setCheckedList(checked ? plainOptions : []);
    };

    return <div>
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            Check all
        </Checkbox>
        <Checkbox.Group onChange={onChange}
                        value={checkedList}
                        options={plainOptions}/>
    </div>
}

```

   



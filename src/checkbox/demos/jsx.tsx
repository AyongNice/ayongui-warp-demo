import {useState} from 'react'
import {Checkbox} from 'ayongui'
import type {CheckboxProps} from 'ayongui'


const defaultCheckedList = [{label: 'UI', value: 'UI'}];
export default () => {
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);

    const checkAll = 3 === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < 3;

    const onChange = (list) => {
        setCheckedList(list);
   
    };

    const onCheckAllChange: CheckboxProps['onChange'] = (checked) => {
        setCheckedList(checked ? ['ayong', 'UI', '阿勇学前端'] : []);
    };

    return <div>
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            Check all
        </Checkbox>
        <Checkbox.Group onChange={onChange}
                        value={checkedList}
        >
            <Checkbox value='ayong'>ayong</Checkbox>
            <Checkbox value='UI' checked>UI</Checkbox>
            <Checkbox value='阿勇学前端' checked disabled>阿勇学前端</Checkbox>
        </Checkbox.Group>
    </div>
}
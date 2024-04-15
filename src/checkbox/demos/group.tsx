import type { CheckboxProps } from 'ayongui';
import { Checkbox } from 'ayongui';
import React, { useState } from 'react';

const plainOptions = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
const defaultCheckedList = [{ label: 'Pear', value: 'Pear' }];
export default () => {
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps['onChange'] = (checked) => {
    setCheckedList(checked ? plainOptions.map((_) => _.value) : []);
  };

  return (
    <div>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
      <Checkbox.Group
        onChange={onChange}
        value={checkedList}
        options={plainOptions}
      />
    </div>
  );
};

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
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps['onChange'] = (checked) => {
    setCheckedList(checked ? plainOptions.map(_ => _.value) : []);
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

### 组合JSX使用

  ```tsx
import {useState} from 'react'
import {Checkbox} from 'ayongUI'
import type {CheckboxProps} from 'ayongUI'


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

  ```
### 组件Propose

#### Checkbox Group

| 属性名           | 说明                          | 类型                                       | 默认值      | 支持版本 |
|---------------|-----------------------------|------------------------------------------|----------|------|
| checked       | 是否选中                        | boolean                                  | false    | 1.0  |
| disabled      | 禁用                          | boolean                                  | false    | 1.0  |
| defaultValue  | 默认值                         | string \| number \| number[] \| string[] | -        | 1.0  |
| onChange      | 点击事件                        | (Res:boolean) => void                    | function | 1.0  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean                                  | false    | 1.0  |

#### Checkbox Group

| 属性名          | 说明                 | 类型                             | 默认值      | 支持版本 |
|--------------|--------------------|--------------------------------|----------|------|
| disabled     | 禁用                 | boolean                        | false    | 1.0  |
| defaultValue | 默认值                | number[] \| string[]           | [ ]      | 1.0  |
| onChange     | 选择改变时回调            | (number[] \|string[]) => void  | function | 1.0  |
| options      | 多个组合使用列表数据 详情见代码展示 | [Option参数详解](#Option) Option[] | [ ]      | 1.0  |
| value        | 父组件通过状态控制选择详情见代码展示 | value[ ]                       | [ ]      | 1.0  |

<span id="Option">Option参数详解</span>

| 属性名      | 说明       | 类型               | 版本  |
|----------|----------|------------------|-----|
| label    | 天数日期字符   | string \| number |     |
| value    | 日期类型对象   | string \| number | 1.0 |
| disabled | 当前选项是否禁用 | boolean          | 1.0 |

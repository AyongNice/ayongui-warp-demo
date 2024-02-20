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
import {Checkbox} from 'ayongUI'
import type {CheckboxProps} from 'ayongUI'

export default () => {
    const onChange = (res) => {
        console.log(res);
    };
    return <div>
        <Checkbox.Group onChange={onChange}>
            <Checkbox value='ayong'>ayong</Checkbox>
            <Checkbox value='UI'>UI</Checkbox>
            <Checkbox value='公众号'>公众号</Checkbox>
        </Checkbox.Group>
    </div>
}

```

   



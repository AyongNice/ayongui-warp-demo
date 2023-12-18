# Rate


### 基本用法

```tsx  hideCode=true inline=true
import React, {useEffect} from 'react';
import {Rate, Table, Alert} from 'ayongUI';
import CodeDisplayCom from "@/code-display/code-display.tsx";
import useExpandableList from "@/code-display/code-display.tsx";
import global from '@/config/index.ts';
const Ratepage: React.FC = () => {
    const {expandedItems, handleExpandAll} = useExpandableList([1, 2, 3, 4]);
    return (<>
        <fieldset>
            <legend></legend>
            <Rate/>
        </fieldset>
    </>)

}
export default Ratepage;
```


### 只读

```tsx  hideCode=true inline=true
import React, {useEffect} from 'react';
import {Rate, Table, Alert} from 'ayongUI';
import CodeDisplayCom from "@/code-display/code-display.tsx";
import useExpandableList from "@/code-display/code-display.tsx";
import global from '@/config/index.ts';
const Ratepage: React.FC = () => {
    const {expandedItems, handleExpandAll} = useExpandableList([1, 2, 3, 4]);
    return (<>
        <fieldset>
            <legend></legend>
            <Rate disabled value={3}/>
        </fieldset>
    </>)

}
export default Ratepage;
```

### 自定义color

```tsx  hideCode=true inline=true
import React, {useEffect} from 'react';
import {Rate, Table, Alert} from 'ayongUI';
import CodeDisplayCom from "@/code-display/code-display.tsx";
import useExpandableList from "@/code-display/code-display.tsx";
import global from '@/config/index.ts';
const Ratepage: React.FC = () => {
    const {expandedItems, handleExpandAll} = useExpandableList([1, 2, 3, 4]);
    return (<>
        <fieldset>
            <legend></legend>
            <Rate color='#cbbcf7' value={3}/>
        </fieldset>
    </>)

}
export default Ratepage;
```


### 自定义icon

```tsx  hideCode=true inline=true
import React, {useEffect} from 'react';
import {Rate, Table, Alert} from 'ayongUI';
import CodeDisplayCom from "@/code-display/code-display.tsx";
import useExpandableList from "@/code-display/code-display.tsx";
import global from '@/config/index.ts';
const Ratepage: React.FC = () => {
    const {expandedItems, handleExpandAll} = useExpandableList([1, 2, 3, 4]);
    return (<>
        <fieldset>
            <legend></legend>
            <Rate value={3} icon={Alert}/>
        </fieldset>
    </>)

}
export default Ratepage;
```


| **属性名** | 说明 | 类型 | **默认值** | 版本 |
| ---------- | ---- | ---- | ---------- | ---- |
|            |      |      |            |      |
|            |      |      |            |      |
|            |      |      |            |      |
|            |      |      |            |      |


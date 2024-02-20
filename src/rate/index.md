# Rate 评分


### 基本用法

```tsx  
import React, {useEffect} from 'react';
import {Rate, Table, Alert} from 'ayongUI';;
const Ratepage: React.FC = () => {
    return <Rate/>
}
export default Ratepage;
```


### 只读

```tsx  
import React, {useEffect} from 'react';
import {Rate, Table, Alert} from 'ayongUI';
const Ratepage: React.FC = () => {
    return <Rate disabled value={3}/>
}
export default Ratepage;
```

### 自定义color

```tsx 
import React, {useEffect} from 'react';
import {Rate, Table, Alert} from 'ayongUI';
const Ratepage: React.FC = () => {
    return <Rate color='#cbbcf7' value={3}/>
}
export default Ratepage;
```


### 自定义icon

```tsx
import React, {useEffect} from 'react';
import {Rate, Table, Alert} from 'ayongUI';
const Ratepage: React.FC = () => {
    return <Rate value={3} icon={Alert}/>
}
export default Ratepage;
```


| **属性名** | 说明           | 类型    | **默认值** | 版本 |
| ---------- | -------------- | ------- | ---------- | ---- |
| count      | 评分数量       | number  | 5          | 1.0  |
| color      | 自定义高亮颜色 | boolean | gold       | 1.0  |
| value      | 当前分数       | number  | 0          | 1.0  |
| disabled   | 是否只读       | boolean | false      | 1.0  |


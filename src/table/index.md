# Table

### 指定 data 和 columns数据基本写法

```tsx  hideCode=true inline=true
import {usePrefersColor} from 'dumi';
import React, {useEffect} from 'react';
import {setThemeVariables} from "ayongUI";

export default ({children}) => {
    // color 为当前应用的主题色，dark or light
    const [color] = usePrefersColor();

    function mode() {
        this.light = {
            themeBulue: '#40a9ff',
            themeWithe: '#fff'
        }
        this.dark = {
            themeBulue: '#53728b',
            themeWithe: '#b0b0b0'
        }
        this.undefined = this.light
    }

    useEffect(() => {
        console.log(color)
        setThemeVariables(new mode()[color])
    }, [color])

};
```

 


```tsx
import React, {useEffect} from 'react';

import {Table} from 'ayongUI';
import style from './index.module.less';

const data = [

    {

        key: '1',

        age: 32,

        name: 'John Brown',

        address: 'New York No. 1 Lake Park',

        tags: ['nice', 'developer'],

    },

    {

        key: '2',

        age: 42,

        name: 'Jim Green',

        address: 'London No. 1 Lake Park',

        tags: ['loser'],

    },

    {

        key: '3',

        age: 58,

        name: 'Joe Black',

        address: 'Sydney No. 1 Lake Park',

        tags: ['cool', 'teacher'],

    },

];

const columns = [

    {

        title: '姓名',

        dataIndex: 'name',

        key: 'name',

    },

    {

        title: '年龄',

        dataIndex: 'age',

        key: 'age',

    },

    {

        title: '住址',

        dataIndex: 'address',

        key: 'address',

    },

];
/** 动态设置 年龄58岁的行样式 **/
const cellActiveClassName = (record: Item) => {
    if (record.age === 58) return style.active;
};
const App = () => {

    return <Table
        data={data}
        columns={columns}
        className={style.diyTable}
        cellActiveClassName={cellActiveClassName}
    />

};

export default App;
```

### JSX风格写法

```tsx
import React from 'react';
import {Table} from 'ayongUI';
import style from './index.module.less';

const Column = Table.Column;
const data = [
    {
        key: '1',
        age: 32,
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        age: 42,
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        age: 32,
        name: 'Joe Black',
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const App = () => (
    <Table data={data} className={style.diyTable}>
        <Column title="Age" dataIndex="age" key={1}/>
        <Column title="Address" dataIndex="address" key={2}/>
        <Column
            key={3}
            title="Tags"
            dataIndex="tags"
            render={(tags: string[]) => (
                <>
                    {tags.map((tag: string) => (
                        <span style={{color: 'blue'}} key={tag}>{tag}</span>
                    ))}
                </>
            )}
        />
    </Table>
);
export default App;
```
### 指定排序
* `排序功能需要在 columns 列数据中传入，指定用的 指定排序规则，defaultSortOrder 非必传字段为指定默认排序（升序/降序），可选值为 'ascend' 或 'descend'，或者设置为 false（默认值，表示不排序）。1`

```tsx

import React from 'react';
import {Table} from 'ayongUI';
import style from './index.module.less';
const data = [
    {
        key: '1',
        age: 32,
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        age: 42,
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        age: 32,
        name: 'Joe Black',
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        defaultSortOrder: 'ascend',//指定默认排序方式分为  ascend descend 两种方式
        sorter: (a, b) => a.age - b.age,//指定排序规则
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];
const App = () => (
    <Table className={style.diyTable} columns={columns} data={data}/>
);
export default App;
```
## 表头分组
```tsx

import React from 'react';
import {Table} from 'ayongUI'
import style from './index.module.less';

const ColumnGroup = Table.ColumnGroup;
;
const Column = Table.Column;
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        defaultSortOrder: 'ascend',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];
const data: Item[] = [
    {
        key: '1',
        age: 32,
        firstName: 'John',
        lastName: 'Brown',
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        age: 42,
        firstName: 'Jim',
        lastName: 'Green',
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        age: 58,
        firstName: 'Joe',
        lastName: 'Black',
        name: 'Joe Black',
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const App = () =>
    <Table data={data} className={style.diyTable}>
        <Column title='First Name' dataIndex='firstName' key={10}/>
        <ColumnGroup title='Name' key={666}>
            <Column title='Last Name' dataIndex='lastName' key={11}/>
            <Column title='Age' dataIndex='age' key={1}/>
        </ColumnGroup>
        <Column title='Address' dataIndex='address' key={200}/>
        <Column
            key={3}
            title='Tags'
            dataIndex='tags'
            render={(tags: string[]) => (
                <>
                    {tags.map((tag: string) => (
                        <span style={{color: 'blue'}} key={tag}>
										{tag}
									</span>
                    ))}
                </>
            )}
        />
    </Table>
export default App;
```
## 可拖拽表格

```tsx

import React from 'react';
import {Table} from 'ayongUI';
import style from './index.module.less';

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        defaultSortOrder: 'ascend',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];
const data = [
    {
        key: '1',
        age: 32,
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        age: 42,
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        age: 32,
        name: 'Joe Black',
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const App = () =>
    <Table
        draggable
        data={data}
        columns={columns}
        className={style.diyTable}
    />
export default App;
```
## 展开折叠行
```tsx
import React from 'react';
import {Table} from 'ayongUI';
import style from './index.module.less';
const Column = Table.Column;

interface Item {
    key: string;
    age: number;
    firstName: string;
    lastName: string;
    name: string;
    address: string;
    tags: string[];
}

const data = [
    {
        key: '1',
        age: 32,
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        age: 42,
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        age: 32,
        name: 'Joe Black',
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        defaultSortOrder: 'ascend',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];
const App = () => (
    <Table className={style.diyTable}
           expandable={{
               expandedRowRender: (record: Item) => (<p>{record.name} 为你展示展开折叠行功能</p>),
               onExpandChange: (index: number, state: boolean) => {
               },
               expandedRowKeys: [0, 2]
           }} columns={columns} data={data}/>
)
export default App;
```
## 自定义展开/折叠按钮
```tsx

import React from 'react';
import {Table, Minusround, Plusround} from 'ayongUI';
import style from './index.module.less';
const Column = Table.Column;
const data = [
    {
        key: '1',
        age: 32,
        name: 'John Brown',
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        age: 42,
        name: 'Jim Green',
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        age: 32,
        name: 'Joe Black',
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        defaultSortOrder: 'ascend',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];
const App = () => (
        <Table className={style.diyTable}
               expandable={{
                   expandedRowRender: (record) => (<p>{record.name} 为你展示展开折叠行功能</p>),
                   expandIcon: ({onExpand, record, expanded}: {
                       record: number,
                       expanded: boolean,
                       onExpand: (record: number) => void
                   }) => {
                       return (
                           <span onClick={() => onExpand(record)}>
                                   {expanded ? <Minusround/> : <Plusround/>}
                           </span>)

                   },
                   expandedRowKeys: [0, 2]
               }} columns={columns} data={data}/>
)
export default App;
```
## Porps 介绍

| 属性名       | 说明                                      | 类型                                          | 默认值 | 版本 |
| ------------ | ----------------------------------------- | --------------------------------------------- | ------ | ---- |
| data         | 数据类型参照示例代码                      | DataItem[]                                    | -      | 1.0  |
| columns      | 列数据 数据类型参照示例代码               | Column[]                                      | -      | 1.0  |
| className    | 样式类名                                  | string                                        | -      | 1.0  |
| draggable    | 是否可拖拽                                | boolean                                       | false  | 1.0  |
| onDdragAfter | 拖拽后的回调,接受拖拽后的新行数据、列数据 | (data: DataItem[], column: Column[]) => void; | -      | 1.0  |
| expandable   | 扩展展开设置                              | 详情见Expandable类型介绍                      | -      | 1.0  |

## expandable 展开功能参数 介绍

| 属性名            | 说明                                                         | 类型                                    | 默认值 | 版本 |
| ----------------- | ------------------------------------------------------------ | --------------------------------------- | ------ | ---- |
| expandedRowRender | 展开的行内容,可接受当前行的数据item,使用方式见代码示例       | (item:DataItem) => React.FC             | -      | 1.0  |
| expandedRowKeys   | 具有展开的行的下标索引, 使用方式见代码示例                   | string[]                                | -      | 1.0  |
| onExpandChange    | 只有使用默认展开图标才有此参数!点击展开的回调,接受当前行数据的索引下标 与 当前展开状态 | (index: number, state: boolean) => void | -      | 1.0  |
| expandIcon        | 自定义展开的图标,接收 expandIconProps 参数,详见下方讲解      | (props: expandIconProps) => ReactNode;  | -      | 1.0  |
## expandIconProps 自定义展开icon参数 介绍

| 属性名   | 说明                                         | 类型                     | 默认值 | 版本 |
| -------- | -------------------------------------------- | ------------------------ | ------ | ---- |
| expanded | 当前展开状态 true展开;false关闭              | boolean                  | false  | 1.0  |
| record   | 当前展开下标                                 | number                   | -      | 1.0  |
| onExpand | 自定义展开icon! 必传字段用于动态改变icon状态 | (record: number) => void | -      | 1.0  |


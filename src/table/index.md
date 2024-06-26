# Table 表格

### 指定 data 和 columns 数据基本写法

```tsx hideCode=true inline=true
import { usePrefersColor } from 'dumi';
import React, { useEffect } from 'react';
import { setThemeVariables } from 'ayongui';
import { ModeTheme } from '../../globe/theme.ts';

export default ({ children }) => {
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor();
  useEffect(() => {
    setThemeVariables(new ModeTheme()[color]);
  }, [color]);
};
```
* `⚠️注意： 在该示例代码中 style 必须创建自定义样式文件提供使用`
```tsx
import React, { useEffect } from 'react';

import { Table } from 'ayongui';
import style from './index.module.less';

const data = [
  {
    key: '1',

    age: 32,

    name: 'Ayong',

    address:
      '人马座B星，这颗神秘的星球位于人马座星系中，其赤经为18小时36分钟56秒，赤纬为负24度45分41秒，处于南半球。被紫色的宏伟天空和奇特的地貌所环绕，人马座B星因其独特之美而闻名于宇宙',

    tags: ['nice', 'developer'],
  },

  {
    key: '2',

    age: 42,

    name: 'ayong',

    address: '河南省五星乡',

    tags: ['loser'],
  },

  {
    key: '3',

    age: 58,

    name: 'ui-component',

    address: '半人马星座-黑洞',

    tags: ['cool', 'teacher'],
  },
];

const columns = [
  {
    title: '姓名',

    dataIndex: 'name',

    key: 'name',
    render: (count,row) => {
      return count;
    },
  },

  {
    title: '年龄',

    dataIndex: 'age',

    key: 'age',
  },

  {
    title: '住址',
    showOverflowTooltip:true,
    dataIndex: 'address',

    key: 'address',
  },
];
/** 动态设置 年龄58岁的行样式 **/
const cellActiveClassName = (record: Item) => {
  if (record.age === 58) return style.active;
};
const App = () => {
  return (
    <Table
      data={data}
      columns={columns}
      className={style.diyTable}
      cellActiveClassName={cellActiveClassName}
    />
  );
};

export default App;
```

### JSX 风格写法
* `⚠️注意： 在该示例代码中 style 必须创建自定义样式文件提供使用`
```tsx
import React from 'react';
import { Table } from 'ayongui';
import style from './index.module.less';

const Column = Table.Column;
const data = [
  {
    key: '1',
    age: 32,
    name: 'Ayong',
    address:
      '赤经为21小时56分钟51秒，赤纬为负24度45分41秒-牵牛星 ',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    age: 42,
    name: 'ayong',
    address: '河南省五星乡',
    tags: ['loser'],
  },
  {
    key: '3',
    age: 32,
    name: 'ui-component',
    address: '半人马星座-黑洞',
    tags: ['cool', 'teacher'],
  },
];
const App = () => (
  <Table data={data} demo="jsx" className={style.diyTable}>
    <Column title="Age" dataIndex="age" key={1} />
    <Column title="Address" showOverflowTooltip dataIndex="address" key={2} />
    <Column
      key={3}
      title="Tags"
      dataIndex="tags"
      render={(tags: string[]) => (
        <>
          {tags.map((tag: string) => (
            <span style={{ color: 'blue' }} key={tag}>
              {tag}
            </span>
          ))}
        </>
      )}
    />
  </Table>
);
export default App;
```

### 指定排序

- `排序功能需要在 columns 列数据中传入，指定用的 指定排序规则，defaultSortOrder 非必传字段为指定默认排序（升序/降序），可选值为 'ascend' 或 'descend'，或者设置为 false（默认值，表示不排序）。`
* `⚠️注意： 在该示例代码中 style 必须创建自定义样式文件提供使用`
```tsx
import React from 'react';
import { Table } from 'ayongui';
import style from './index.module.less';
const data = [
  {
    key: '1',
    age: 32,
    name: 'Ayong',
    address: '赤经为21小时56分钟51秒，赤纬为负24度45分41秒-牵牛星',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    age: 42,
    name: 'ayong',
    address: '河南省五星乡',
    tags: ['loser'],
  },
  {
    key: '3',
    age: 32,
    name: 'ui-component',
    address: '半人马星座-黑洞',
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
    defaultSortOrder: 'ascend', //指定默认排序方式分为  ascend descend 两种方式
    sorter: (a, b) => a.age - b.age, //指定排序规则
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
const App = () => (
  <Table className={style.diyTable} columns={columns} data={data} />
);
export default App;
```

### 表头分组
* `⚠️注意： 在该示例代码中 style 必须创建自定义样式文件提供使用`
```tsx
import React from 'react';
import { Table } from 'ayongui';
import style from './index.module.less';

const ColumnGroup = Table.ColumnGroup;
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
    name: 'Ayong',
    address: '赤经为21小时56分钟51秒，赤纬为负24度45分41秒-牵牛星',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    age: 42,
    firstName: 'Jim',
    lastName: 'Green',
    name: 'ayong',
    address: '河南省五星乡',
    tags: ['loser'],
  },
  {
    key: '3',
    age: 58,
    firstName: 'Joe',
    lastName: 'Black',
    name: 'ui-component',
    address: '半人马星座-黑洞',
    tags: ['cool', 'teacher'],
  },
];
const App = () => (
  <Table data={data} demo="Group" className={style.diyTable}>
    <Column title="First Name" dataIndex="firstName" key={10} />
    <ColumnGroup title="Name" key={666}>
      <Column title="Last Name" dataIndex="lastName" key={11} />
      <Column title="Age" dataIndex="age" key={1} />
    </ColumnGroup>
    <Column title="Address" dataIndex="address" key={200} />
    <Column
      key={3}
      title="Tags"
      dataIndex="tags"
      render={(tags: string[]) => (
        <>
          {tags.map((tag: string) => (
            <span style={{ color: 'blue' }} key={tag}>
              {tag}
            </span>
          ))}
        </>
      )}
    />
  </Table>
);
export default App;
```

### 可拖拽表格
* `⚠️注意： 在该示例代码中 style 必须创建自定义样式文件提供使用`
```tsx
import React from 'react';
import { Table } from 'ayongui';
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
    name: 'Ayong',
    address: '赤经为21小时56分钟51秒，赤纬为负24度45分41秒-牵牛星',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    age: 42,
    name: 'ayong',
    address: '河南省五星乡',
    tags: ['loser'],
  },
  {
    key: '3',
    age: 32,
    name: 'ui-component',
    address: '半人马星座-黑洞',
    tags: ['cool', 'teacher'],
  },
];
const App = () => (
  <Table draggable data={data} columns={columns} className={style.diyTable} />
);
export default App;
```

### 展开折叠行
* `⚠️注意： 在该示例代码中 style 必须创建自定义样式文件提供使用`
```tsx
import React from 'react';
import { Table } from 'ayongui';
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
    name: 'Ayong',
    address: '赤经为21小时56分钟51秒，赤纬为负24度45分41秒-牵牛星',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    age: 42,
    name: 'ayong',
    address: '河南省五星乡',
    tags: ['loser'],
  },
  {
    key: '3',
    age: 32,
    name: 'ui-component',
    address: '半人马星座-黑洞',
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
  <Table
    className={style.diyTable}
    expandable={{
      expandedRowRender: (record: Item) => (
        <p>{record.name} 为你展示展开折叠行功能</p>
      ),
      onExpandChange: (index: number, state: boolean) => {},
      expandedRowKeys: [0, 2],
    }}
    columns={columns}
    data={data}
  />
);
export default App;
```

### 多条选择
* `⚠️注意： 在该示例代码中 style 必须创建自定义样式文件提供使用`
```tsx
import React, { useState } from 'react';
import { Table, Minusround, Plusround, Radio } from 'ayongui';

import type { DataItem, Column } from 'ayongui';
import style from './index.module.less';

const Column = Table.Column;
const data: DataItem = [
  {
    key: '1',
    age: 32,
    name: 'Ayong',
    address: '赤经为21小时56分钟51秒，赤纬为负24度45分41秒-牵牛星',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    age: 42,
    name: 'ayong',
    address: '河南省五星乡',
    tags: ['loser'],
  },
  {
    key: '3',
    age: 32,
    name: 'ui-component',
    address: '半人马星座-黑洞',
    tags: ['cool', 'teacher'],
  },
];
const columns: Column = [
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

const App = () => {
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>(
    'checkbox',
  );
  const rowSelection = {
    onChange: (selectList: DataItem[]) => {
      console.log(`selectList:  `, selectList);
    },
    getCheckboxProps: (record: DataItem) => ({
      disabled: record.name === 'Ayong', // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <React.Fragment>
      <Radio.Group
        onChange={(value) => {
          console.log(value);
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group>
      <Table
        className={style.diyTable}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        data={data}
      />
    </React.Fragment>
  );
};
export default App;
```

### 自定义展开/折叠按钮
* `⚠️注意： 在该示例代码中 style 必须创建自定义样式文件提供使用`
```tsx
import React from 'react';
import { Table, Minusround, Plusround } from 'ayongui';
import style from './index.module.less';
const Column = Table.Column;
const data = [
  {
    key: '1',
    age: 32,
    name: 'Ayong',
    address: '赤经为21小时56分钟51秒，赤纬为负24度45分41秒-牵牛星',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    age: 42,
    name: 'ayong',
    address: '河南省五星乡',
    tags: ['loser'],
  },
  {
    key: '3',
    age: 32,
    name: 'ui-component',
    address: '半人马星座-黑洞',
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
  <Table
    className={style.diyTable}
    expandable={{
      expandedRowRender: (record) => (
        <p>{record.name} 为你展示展开折叠行功能</p>
      ),
      expandIcon: ({
        onExpand,
        record,
        expanded,
      }: {
        record: number;
        expanded: boolean;
        onExpand: (record: number) => void;
      }) => {
        return (
          <span onClick={() => onExpand(record)}>
            {expanded ? <Minusround /> : <Plusround />}
          </span>
        );
      },
      expandedRowKeys: [0, 2],
    }}
    columns={columns}
    data={data}
  />
);
export default App;
```

## Porps 介绍

| 属性名       | 说明                                      | 类型                                          | 默认值 | 版本 |
| ------------ | ----------------------------------------- | --------------------------------------------- | ------ | ---- |
| data         | 数据类型参照示例代码                      | DataItem[]                                    | -      | 1.0  |
| columns      | 列数据 数据类型参照示例代码               | Column[] [Column 参数详解](#Column)                                    | -      | 1.0  |
| className    | 样式类名                                  | string                                        | -      | 1.0  |
| draggable    | 是否可拖拽                                | boolean                                       | false  | 1.0  |
| onDdragAfter | 拖拽后的回调,接受拖拽后的新行数据、列数据 | (data: DataItem[], column: Column[]) => void; | -      | 1.0  |
| expandable   | 扩展展开设置                              | [expandable 参数详解](#expandable)            | -      | 1.0  |
| rowSelection | 表格选择 多选、 单选                      | [rowSelection 参数详解](#rowSelection)        | -      | 1.0  |

<span id="Column">**Column 参数详解接口文档**</span>

#### 属性

| 属性名            | 描述                                           | 类型                          | 
|-------------------|------------------------------------------------|-------------------------------|
| key               | 列的唯一标识符                                 | string \| number             |
| title             | 列标题                                         | string                        |
| width               | 列宽度                                         | string   \| number                      |
| dataIndex         | 列数据在数据源中对应的字段名                   | string                        |
| firstName         | 表头分组的第一个表头名称                       | string                        |
| lastName          | 表头分组的最后一个表头名称                     | string                        |
| tags              | 表头分组的分组对应的标签显示                   | string[]                      |
| defaultSortOrder  | 默认的排序顺序                                 | "ascend" \| "descend"        |
| sorter          | 自定义业务逻辑排序函数                         | (row: DataItem, row: DataItem) => boolean |
| render          | 自定义渲染函数                                 | (data: any, record: DataItem) => ReactNode |
| showOverflowTooltip | 是否显示溢出文本的Tooltip提示                         | boolean                       |


**注：** `sorter` 函数用于自定义业务逻辑排序，`render` 函数用于自定义渲染列内容。



<span id="expandable">**expandable 参数详解**</span>

| 属性名            | 说明                                                                                   | 类型                                    | 默认值 | 版本 |
| ----------------- | -------------------------------------------------------------------------------------- | --------------------------------------- | ------ | ---- |
| expandedRowRender | 展开的行内容,可接受当前行的数据 item,使用方式见代码示例                                | (item:DataItem) => React.FC             | -      | 1.0  |
| expandedRowKeys   | 具有展开的行的下标索引, 使用方式见代码示例                                             | string[]                                | -      | 1.0  |
| onExpandChange    | 只有使用默认展开图标才有此参数!点击展开的回调,接受当前行数据的索引下标 与 当前展开状态 | (index: number, state: boolean) => void | -      | 1.0  |
| expandIcon        | 自定义展开的图标,接收 [expandIconProps 参数详解](#expandIconProps) 参数,详见下方讲解   | (props: expandIconProps) => ReactNode;  | -      | 1.0  |

<span id="expandIconProps">**expandIconProps 参数详解**</span>

| 属性名   | 说明                                            | 类型                     | 默认值 | 版本 |
| -------- | ----------------------------------------------- | ------------------------ | ------ | ---- |
| expanded | 当前展开状态 true 展开;false 关闭               | boolean                  | false  | 1.0  |
| record   | 当前展开下标                                    | number                   | -      | 1.0  |
| onExpand | 自定义展开 icon! 必传字段用于动态改变 icon 状态 | (record: number) => void | -      | 1.0  |

<span id="rowSelection">**rowSelection 参数详解**</span>

| 属性名           | 说明                                             | 类型                        | 默认值   | 版本 |
| ---------------- | ------------------------------------------------ | --------------------------- | -------- | ---- |
| type             | 选择模式中 checkbox 多选。radio 单选             | string                      | checkbox | 1.0  |
| onChange         | 选择变化触发函数,方法参数 选中的列表             | (selectedRowKeys:daItme[])  | -        | 1.0  |
| getCheckboxProps | 方法返回值选框为每个默认参数 record 为当前行数据 | (record: DataType) => Props | -        | 1.0  |

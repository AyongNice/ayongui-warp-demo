---
demo:
  cols: 2
---

# Upload 文件上传

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
 
<code src="./demos/base.tsx">基本使用</code>
<code src="./demos/base2.tsx">基本使用</code>
<code src="./demos/customRequest.tsx">customRequest 自定义上传</code>
<code src="./demos/base3.tsx">上传数量、自定义dom、文件多/单选</code>
<code src="./demos/fileList.tsx">fileList 上传文件</code>

### 组件 Props 参数

| 属性名            | 说明                                                                                                                                             | 是否必填 | 类型                                                             | 默认值                     | 支持版本 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------- | -------------------------- | -------- |
| className         | 样式 className 名 必须是 module 类型的样式 否则无法覆盖组件样式                                                                                  | 否       | string                                                           | -                          | 1.0      |
| mode              | 模式 分为 'default' 默认 'avatar' 头像                                                                                                           | 否       | string                                                           | default                    | 1.0      |
| uplaodText        | 默认模式下上传按钮的文案                                                                                                                         | 否       | string                                                           | 上传文件                   | 1.0      |
| style             | 模式 为'avatar' 头像 时候的头像样式                                                                                                              | 否       | CSSProperties                                                    | width: 86,<br/>height: 86, | 1.0      |
| uplaodRender      | 自定义上传按钮,点击事件需要手绑定回调方法中的 onUplaod 详情见使用示例                                                                            | 否       | (onUplaod: Function) => React.ReactNode null                     | null                       | 1.0      |
| maxUploadFileSize | 限制文件大小，单位 kb,不配置不限制                                                                                                               | 否       | number \| null                                                   | null                       | 1.0      |
| disabled          | 是否禁用                                                                                                                                         | 否       | boolean                                                          | false                      | 1.0      |
| maxCount          | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件                                                                                        | 否       | number \| null                                                   | null                       | 1.0      |
| accept            | 接受上传的文件类型接受上传的文件类型，详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | 否       | string                                                           | null                       | 1.0      |
| action            | 上传的地址                                                                                                                                       | 否       | string                                                           | false                      | 1.0      |
| name              | 发到后台的文件参数名                                                                                                                             | 否       | string                                                           | file                       | 1.0      |
| method            | 网络请求方法                                                                                                                                     | 否       | string                                                           | GTE                        | 1.0      |
|                   |                                                                                                                                                  |          |                                                                  |                            |          |
| data              | 上传所需参数 组件会以表单格式上传 da ta 中 键值对参数                                                                                            | 否       | object                                                           | null                       | 1.0      |
| headers           | 设置上传的请求头部参数                                                                                                                           | 否       | object                                                           | {}                         | 1.0      |
| withCredentials   | 上传请求时是否携带 cookie true 带 false 不带                                                                                                     | 否       | boolean                                                          | true                       | 1.0      |
| beforeUpload      | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise\<false> 则停止上传                                                               | 否       | (file: UploadFile \| boolean) => boolean \| Promise\<UploadFile> | ()=>{}                     | 1.0      |
| onRemove          | 删除文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise\<false> 则停止删除                                                               | 否       | (file: UploadFile \| boolean) => boolean \| Promise\<UploadFile> | ()=>{}                     | 1.0      |
| onChange          | 上传文件改变时的状态                                                                                                                             | 否       | (file: UploadFile) => void                                       | ()=>{}                     | 1.0      |
| customRequest     | 通过覆盖默认的上传行为，可以自定义自己的上传实现 使用见代码示例                                                                                  | 否       | (file: UploadFile) => void                                       | null                       | 1.0      |
| fileList          | 已经上传的文件列表（受控）                                                                                                                       | 否       | [UploadFile[]参数详解](#UploadFile)                              | []                         | 1.0      |
| defaultFileList   | 默认已经上传的文件列表 一般用于表单回显                                                                                                          | 否       | [UploadFile[]参数详解](#UploadFile)                              | []                         | 1.0      |

​ <span id="UploadFile">UploadFile 参数详解</span>

| 属性名  | 说明                                         | 类型   | 版本 |
| ------- | -------------------------------------------- | ------ | ---- |
| percent | 上传进度                                     | number | 1.0  |
| file    | 文件对象                                     | File   | 1.0  |
| name    | 文件名                                       | string | 1.0  |
| status  | 上传状态，不同状态展示颜色也会有所不同 error | string | 1.0  |
| uid     | 唯一标识符，不设置时会自动生成               | number | 1.0  |

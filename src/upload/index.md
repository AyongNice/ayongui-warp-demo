# Upload 文件上传

```tsx  hideCode=true inline=true
import {usePrefersColor} from 'dumi';
import React, {useEffect} from 'react';
import {setThemeVariables} from "ayongUI";
import {ModeTheme} from '../../globe/theme.ts'

export default ({children}) => {
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor();
  useEffect(() => {
    setThemeVariables(new ModeTheme()[color])
  }, [color])

};
```

### 默认基本功能

```tsx  
import React, {useEffect} from 'react';
import {Upload, Button, Uploads} from 'ayongUI';
import type {UploadProps, UploadFile} from 'ayongUI';
import style from './index.module.less';

const UpalodPage: React.FC = () => {

  const porps: UploadProps = {
    action: '/api/weekend/upload-img',
    data: {
      'isPublic': true
    },
    headers: {
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    },
    onRemove: (file: UploadFile) => {
      return new Promise(async (resolve, reject) => {
        file && file.name === 'file.png' ? resolve(false) : resolve(true);
      })
    },
    beforeUpload: (file: UploadFile) => {
      return new Promise((resolve) => resolve(true))
    },
    onChange: (file: UploadFile) => {
      console.log('onChange', file)
    }
  }
  return <Upload {...porps} multiple/>

}
export default UpalodPage;
```

### 默认基本功能演示2

```tsx  
import React, {useEffect} from 'react';
import {Upload, Button, Uploads} from 'ayongUI';
import style from './index.module.less';

const UpalodPage: React.FC = () => {
    const beforeUpload = () => {
        return new Promise((resolve) => resolve(false))
    }
    const onRemove = (file: any) => {
        return new Promise(async (resolve, reject) => {
            file && file.name === 'file.png' ? resolve(false) : resolve(true);
        })
    }
    const onChange = (file: any) => {
        console.log('onChange', file)
    }
    return <React.Fragment>
        <Upload className={style.upload} maxFileSize={1024} uplaodText='限制大小1M'/>
        <Upload className={style.upload} beforeUpload={beforeUpload} uplaodText='停止上传'/>
        <Upload className={style.upload} onRemove={onRemove} uplaodText='停止删除文件'/>
        <Upload disabled uplaodText='禁用上传'/>
    </React.Fragment>

}
export default UpalodPage;
```

### 默认基本功能演示3

```tsx  
import React, {useEffect} from 'react';
import {Upload, Button, Uploads} from 'ayongUI';
import style from './index.module.less';

const UpalodPage: React.FC = () => {

    const onChange = (file: UploadFile) => {
    }
    return <React.Fragment>
        <Upload className={style.upload} onChange={onChange} maxCount={1} uplaodText='上传单个文件'/>
        <Upload className={style.upload} onChange={onChange} multiple uplaodText='多选文件'/>

        <Upload className={style.upload} uplaodRender={(onUplaod) => {
            return <Button onClick={onUplaod} type='warn'> <Uploads style={{color: '#fff'}}/> 自定义dom节点上传</Button>
        }}/>
        <Upload uplaodText='自定义icon渲染' iconRender={() => <img style={{width: "18px"}}
                                                                   src={require('.././assets/pdflogo.png')}/>}
        />


    </React.Fragment>

}
export default UpalodPage;
```

### 头像上传

```tsx  
import React, {useEffect} from 'react';
import {Upload} from 'ayongUI';
import type {UploadFile} from 'ayongUI';
const UpalodPage: React.FC = () => {
  const onChange = (file: UploadFile) => {
    console.log('onChange', file)
  }
  return <Upload
    mode='avatar'
    style={{
      width: 86,
      height: 86
    }}
    onChange={onChange}
  />
}
export default UpalodPage;
```

### fileList上传文件

* `在Upload组件中,父组件如果想完全控制自定义 文件的上传进度、结果、icon、上传状态; 可以通过参数 fileList (受控参数)来控制 Upload组件所有交互`

```tsx
import React, {useState} from 'react';
import {Button, Upload} from 'ayongUI';
import type {UploadFile} from 'ayongUI';

export default () => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onChange = (file: UploadFile) => {
    setFileList((prevState) => [...prevState, file])
  }
  const defaultFileList = [{name: 'file.png'}];

  return <React.Fragment>

    <Upload
      fileList={fileList}
      onChange={onChange}
      defaultFileList={defaultFileList}
    />
  </React.Fragment>
};
```

### customRequest 自定义上传

* `在Upload组件中,通过覆盖默认的上传行为(子组件将不会自动网络请求上传文件)，可以自定义自己的上传实现`

```tsx
import React, {useState} from 'react';
import {Button, Upload} from 'ayongUI';
import type {UploadFile} from 'ayongUI';

export default () => {
    const [fileList, setFileList] = useState<UploadFile[]>([])

    const customRequest = (file: UploadFile) => {
        setFileList((prevState) => [...prevState, file]);
        /**
         * 手动发起网络请求上传文件上传逻辑
         */
    }
    /** 上传文件之前回调 **/
    const beforeUpload = (file: UploadFile) => {
        return new Promise((resolve) => resolve(true))
    }
    /** 删除文件之前回调 **/
    const onRemove = (file: UploadFile) => {
        return new Promise(async (resolve, reject) => {
            file && file.name === 'file.png' ? resolve(false) : resolve(true);
        })
    }
    return <Upload
        onRemove={onRemove}
        beforeUpload={beforeUpload}
        customRequest={customRequest}
    />
};
```

### 组件Props参数

| 属性名               | 说明                                                                                                                          | 是否必填 | 类型                                                               | 默认值                        | 支持版本 |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------|------|------------------------------------------------------------------|----------------------------|------|
| className         | 样式 className名 必须是module类型的样式 否则无法覆盖组件样式                                                                                     | 否    | string                                                           | -                          | 1.0  |
| mode              | 模式 分为 'default' 默认 'avatar' 头像                                                                                              | 否    | string                                                           | default                    | 1.0  |
| uplaodText        | 默认模式下上传按钮的文案                                                                                                                | 否    | string                                                           | 上传文件                       | 1.0  |
| style             | 模式 为'avatar' 头像 时候的头像样式                                                                                                     | 否    | CSSProperties                                                    | width: 86,<br/>height: 86, | 1.0  |
| uplaodRender      | 自定义上传按钮,点击事件需要手绑定回调方法中的onUplaod 详情见使用示例                                                                                     | 否    | (onUplaod: Function) => React.ReactNode  null                    | null                       | 1.0  |
| maxUploadFileSize | 限制文件大小，单位 kb,不配置不限制                                                                                                         | 否    | number \| null                                                   | null                       | 1.0  |
| disabled          | 是否禁用                                                                                                                        | 否    | boolean                                                          | false                      | 1.0  |
| maxCount          | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件                                                                                              | 否    | number \| null                                                   | null                       | 1.0  |
| accept            | 接受上传的文件类型接受上传的文件类型，详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | 否    | string                                                           | null                       | 1.0  |
| action            | 上传的地址                                                                                                                       | 否    | string                                                           | false                      | 1.0  |
| name              | 发到后台的文件参数名                                                                                                                  | 否    | string                                                           | file                       | 1.0  |
| method            | 网络请求方法                                                                                                                      | 否    | string                                                           | GTE                        | 1.0  |
|                   |                                                                                                                             |      |                                                                  |                            |      |
| data              | 上传所需参数 组件会以表单格式上传da ta中 键值对参数                                                                                               | 否    | object                                                           | null                       | 1.0  |
| headers           | 设置上传的请求头部参数                                                                                                                 | 否    | object                                                           | {}                         | 1.0  |
| withCredentials   | 上传请求时是否携带 cookie  true带false不带                                                                                              | 否    | boolean                                                          | true                       | 1.0  |
| beforeUpload      | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise\<false> 则停止上传                                                                       | 否    | (file: UploadFile \| boolean) => boolean \| Promise\<UploadFile> | ()=>{}                     | 1.0  |
| onRemove          | 删除文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise\<false> 则停止删除                                                                       | 否    | (file: UploadFile \| boolean) => boolean \| Promise\<UploadFile> | ()=>{}                     | 1.0  |
| onChange          | 上传文件改变时的状态                                                                                                                  | 否    | (file: UploadFile) => void                                       | ()=>{}                     | 1.0  |
| customRequest     | 通过覆盖默认的上传行为，可以自定义自己的上传实现 使用见代码示例                                                                                            | 否    | (file: UploadFile) => void                                       | null                       | 1.0  |
| fileList          | 已经上传的文件列表（受控）                                                                                                               | 否    | [UploadFile[]参数详解](#UploadFile)                                  | []                         | 1.0  |
| defaultFileList   | 默认已经上传的文件列表 一般用于表单回显                                                                                                        | 否    | [UploadFile[]参数详解](#UploadFile)                                  | []                         | 1.0  |

​  <span id="UploadFile">UploadFile参数详解</span>

| 属性名     | 说明                        | 类型     | 版本  |
|---------|---------------------------|--------|-----|
| percent | 上传进度                      | number | 1.0 |
| file    | 文件对象                      | File   | 1.0 |
| name    | 文件名                       | string | 1.0 |
| status  | 上传状态，不同状态展示颜色也会有所不同 error | string | 1.0 |
| uid     | 唯一标识符，不设置时会自动生成           | number | 1.0 |





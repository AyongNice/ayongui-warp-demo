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

### 默认基本功能演示1

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
        <Upload action={'/api/weekend/upload-img'} onChange={onChange} className={style.upload}/>
        <Upload className={style.upload} maxFileSize={1024} uplaodText='限制大小1M'/>
        <Upload className={style.upload} beforeUpload={beforeUpload} uplaodText='停止上传'/>
        <Upload className={style.upload} onRemove={onRemove} uplaodText='停止删除文件'/>
    </React.Fragment>

}
export default UpalodPage;
```

### 默认基本功能演示2

```tsx  
import React, {useEffect} from 'react';
import {Upload, Button, Uploads} from 'ayongUI';
import style from './index.module.less';

const UpalodPage: React.FC = () => {

    const onChange = (file: any) => {
        console.log('onChange', file)
    }
    return <React.Fragment>
        <Upload className={style.upload} disabled uplaodText='禁用上传'/>
        <Upload className={style.upload} onChange={onChange} maxCount={1} uplaodText='上传单个'/>
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

const UpalodPage: React.FC = () => {
    const onChange = (file: any) => {
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


### 自定义上传文件

* `在Upload组件中,父组件如果想完全控制自定义 文件的上传进度、结果、icon、上传状态; 可以通过参数 fileList (受控参数)来控制 Upload组件所有交互`

```tsx
import React, {useState} from 'react';
import {Button, Upload} from 'ayongUI';

export default () => {
    const [fileList, setFileList] = useState<any[]>([])

    const onChange = (file: any) => {
        setFileList((prevState) => {
            prevState.push({name: file.name})
            return prevState
        })
        console.log('onChange', file, fileList)
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

# Upload 文件上传


### 默认点击上传
```tsx  
import React, {useEffect} from 'react';
import {Upload} from 'ayongUI';
import style from './index.module.less';

const Ratepage: React.FC = () => {
    const beforeUpload = () => {
        return new Promise((resolve) => resolve(false))
    }

    return <React.Fragment>
        <Upload className={style.upload}/>
        <Upload className={style.upload} maxFileSize={1024} uplaodText='限制大小1M'/>
        <Upload beforeUpload={beforeUpload} uplaodText='停止上传'/>
    </React.Fragment>

}
export default Ratepage;
```


 
 ### 头像上传
```tsx  
import React, {useEffect} from 'react';
import {Upload} from 'ayongUI';
import style from './index.module.less';
const Ratepage: React.FC = () => {
    return  <Upload className={style.avatar} mode='avatar'/>
}
export default Ratepage;
```

### 自定义dom节点上传
```tsx  
import React, {useEffect} from 'react';
import {Upload, Uploads, Button} from 'ayongUI';

const Ratepage: React.FC = () => {
    return <Upload uplaodRender={(onUplaod) => {
        return <Button onClick={onUplaod} type='primary'> <Uploads/> 上传附件</Button>
    }}/>
}
export default Ratepage;
```

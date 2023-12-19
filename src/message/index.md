
# Message 消息通知


## 基本用法

```tsx
import {Button, Message} from 'ayongUI';
import style from './index.module.less';

const App = () => (
    <>
        <Button className={style.buttonMes}
                onClick={() => Message.info({message: 'This is a info message'})}>info-消息</Button>

        <Button className={style.buttonMes} type='primary'
                onClick={() => Message.success({message: 'This is a info message'})}>success-消息</Button>

        <Button className={style.buttonMes} type='warn'
                onClick={() => Message.warning({message: 'This is a info message'})}>warning-消息</Button>
        <Button type='error'
                onClick={() => Message.error({message: 'This is a info message'})}>error-消息</Button>
    </>
);
export default App;
```




## 显示关闭按钮
```tsx
import {Button, Message} from 'ayongUI';
import style from './index.module.less';

const App = () => {
    const onMessage = () => {
        Message.info({
            message: 'This is a info message',
            showClose: true,
            onClose: () => {
                console.log('关闭了')
            }
        })
    }
    return <Button className={style.buttonMes} onClick={onMessage}>info-消息</Button>
}
export default App;





```
## 使用 HTML 片段作为正文内容
##### message 还支持使用 HTML 字符串作为正文内容。 需要注意的是 防止XSS 攻击 必须设置useHTMLString为true
```tsx
import {Button, Message} from 'ayongUI';
import style from './index.module.less';
const onUseHTML = () => {
    Message.info({
        message: <h2>这是一个HTML内容</h2>,
        useHTMLString: true,
    })
}
const App = () => {
    return <Button className='button-mes' onClick={onUseHTML}>Use HTML String</Button>
}

export default App; 
```


## 自定义时长
##### 自定义显示时间6秒
```tsx
import {Button, Message} from 'ayongUI';
import style from './index.module.less';
const App = () => {
    const onDuration = () => {
        Message.info({
            message: 'This is a info message',
            duration: '6',
        })
    }
    return (<Button className='button-mes' onClick={onDuration}>自定义时长</Button>)
}
export default App;

```




## 自定义icon

```tsx

import {Button, Message,Setting} from 'ayongUI';
import style from './index.module.less';

const App = () => {
    const onDiyIcon = () => {
        Message.info({
            message: 'This is a diy Icon message',
            icon: <Setting/>,
            useHTMLString: true,
        })
    }
    return  <Button className='button-mes' onClick={onDiyIcon}>自定义icon</Button>
}
export default App;
```
# method 介绍
| 方法名          | 描述             | 参数                   | 返回值 |
| --------------- | ---------------- | ---------------------- | ------ |
| Message.info    | 显示普通提示消息 | MessageProps见下方详情 | void   |
| Message.success | 显示成功提示消息 | MessageProps见下方详情 | void   |
| Message.warning | 显示警告提示消息 | MessageProps见下方详情 | void   |
| Message.error   | 显示错误提示消息 | MessageProps见下方详情 | void   |






# MessageProps入参详情介绍
| 属性名        | 说明                                   | 类型                          | 默认值     | 版本 |
| ------------- | -------------------------------------- | ----------------------------- | ---------- | ---- |
| message       | 消息提示内容                           | string \| number \| ReactNode | -          | 1.0  |
| showClose     | 是否显示关闭按钮                       | boolean                       | false      | 1.0  |
| useHTMLString | 是否将 message 属性作为 HTML 片段处理  | string                        | false      | 1.0  |
| onClose       | 关闭回调,只有在showClose为true时才有效 | () => void                    | () => void | 1.0  |
| icon          | 自定义 Icon                            | React.Fc                      | -          | 1.0  |


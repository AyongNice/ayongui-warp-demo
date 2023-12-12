
# Message 消息通知


### 基本用法

  ```tsx
import {Button, Message} from 'ayongUI';
import style from './index.module.less';

const App = () => (
    <>
        <Button
            className={style.buttonMes}
            onClick={() => Message.info({message: 'This is a info message'})}
        >
            info-消息
        </Button>

        <Button className={style.buttonMes}
                type='primary'
                onClick={() => Message.success({message: 'This is a info message'})}
        >
            success-消息
        </Button>

        <Button className={style.buttonMes}
                type='warn'
                onClick={() => Message.warning({message: 'This is a info message'})}
        >
            warning-消息
        </Button>

        <Button type='error'
                onClick={() => Message.error({message: 'This is a info message'})}
        >
            error-消息
        </Button>
    </>
);
export default App;


  ```

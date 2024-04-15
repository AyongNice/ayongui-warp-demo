import {Radio} from 'ayongui'
import {useState} from "react";

export default () => {
    const [value, setValue] = useState('apple')
    const onChange = (date) => {
        setValue(date)
        console.log('onChange~~', date)
    };
    return <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {/*{value}*/}
        <Radio value={true} onChange={onChange}>单个使用</Radio>
        <Radio disabled value={false} onChange={onChange}>禁用</Radio>
        <Radio disabled value={true} onChange={onChange}>默认选中+禁用</Radio>
    </div>
}
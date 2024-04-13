import {Radio} from 'ayongUI'
import {useState} from "react";

export default () => {
    const [value, setValue] = useState(['apple'])
    const onChange = (date) => {
        setValue(date)
        console.log('onChange~~', date)
    };
    return <div>

        <Radio.Group onChange={onChange} value={value}>
            <Radio value="apple">A</Radio>
            <Radio value="banana">B</Radio>
            <Radio disabled value="ccc">C</Radio>
        </Radio.Group>
    </div>
}
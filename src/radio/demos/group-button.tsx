import { Radio } from 'ayongUI';
import { useState } from 'react';

export default () => {
  const [value, setValue] = useState('apple');
  const [value2, setValue2] = useState('apple');
  const [value3, setValue3] = useState('apple');
  const onChange = (date) => {
    console.log(date);
    setValue(date);
  };
  const onChange2 = (date) => {
    setValue2(date);
  };
  const onChange3 = (date) => {
    setValue3(date);
  };
  return (
    <div
      style={{
        height: '165px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Radio.Group onChange={onChange3} size="small" value={value3}>
        <Radio.Button value="apple">模式A</Radio.Button>
        <Radio.Button value="banana">模式B</Radio.Button>
        <Radio.Button value="ccc">模式C</Radio.Button>
      </Radio.Group>

      <Radio.Group onChange={onChange2} value={value2}>
        <Radio.Button value="apple">模式A</Radio.Button>
        <Radio.Button value="banana">模式B</Radio.Button>
        <Radio.Button value="ccc">模式C</Radio.Button>
      </Radio.Group>
      <Radio.Group onChange={onChange} size="large" value={value}>
        <Radio.Button value="apple">模式A</Radio.Button>
        <Radio.Button value="banana">模式B</Radio.Button>
        <Radio.Button value="ccc">模式C</Radio.Button>
      </Radio.Group>
    </div>
  );
};

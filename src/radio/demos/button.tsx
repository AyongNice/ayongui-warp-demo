import { Radio } from 'ayongui';
import { useState } from 'react';

export default () => {
  const [value, setValue] = useState('apple');
  const onChange = (date) => {
    setValue(date);
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
      <Radio.Button onChange={onChange} size="small" value="small">
        单个按钮
      </Radio.Button>

      <Radio.Button onChange={onChange} value="apple">
        单个按钮
      </Radio.Button>
      <Radio.Button onChange={onChange} size="large" value="large">
        单个按钮
      </Radio.Button>
    </div>
  );
};

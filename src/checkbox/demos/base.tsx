import { Checkbox } from 'ayongui';
import React from 'react';

export default () => {
  const onChange = (res) => {
    console.log(res);
  };
  return (
    <div>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <Checkbox onChange={onChange} checked disabled>
        Checkbox
      </Checkbox>
      <Checkbox onChange={onChange} disabled>
        Checkbox
      </Checkbox>
    </div>
  );
};

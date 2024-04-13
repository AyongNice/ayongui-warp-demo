import { Select } from 'ayongUI';
import React from 'react';
export default () => {
  return (
    <React.Fragment>
      <Select
        defaultValue="ayong"
        style={{ width: 150 }}
        disabled
        options={[{ value: 'ayong', label: 'ayong' }]}
      />
    </React.Fragment>
  );
};

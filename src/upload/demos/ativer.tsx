import type { UploadFile } from 'ayongui';
import { Upload } from 'ayongui';
import React from 'react';
const UpalodPage: React.FC = () => {
  const onChange = (file: UploadFile) => {
    console.log('onChange', file);
  };
  return (
    <Upload
      mode="avatar"
      style={{
        width: 86,
        height: 86,
      }}
      onChange={onChange}
    />
  );
};

import React, {useState} from 'react';
import {Button, Upload} from 'ayongui';
import type {UploadFile} from 'ayongui';

export default () => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onChange = (file: UploadFile) => {
    setFileList((prevState) => [...prevState, file])
  }
  const defaultFileList = [{name: 'file.png'}];

  return <React.Fragment>

    <Upload
      fileList={fileList}
      onChange={onChange}
      defaultFileList={defaultFileList}
    />
  </React.Fragment>
};
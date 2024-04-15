import type { UploadFile } from 'ayongui';
import { Upload } from 'ayongui';
import React, { useState } from 'react';

export default () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const customRequest = (file: UploadFile) => {
    setFileList((prevState) => [...prevState, file]);
    /**
     * 手动发起网络请求上传文件上传逻辑
     */
  };
  /** 上传文件之前回调 **/
  const beforeUpload = (file: UploadFile) => {
    return new Promise((resolve) => resolve(true));
  };
  /** 删除文件之前回调 **/
  const onRemove = (file: UploadFile) => {
    return new Promise(async (resolve, reject) => {
      file && file.name === 'file.png' ? resolve(false) : resolve(true);
    });
  };
  return (
    <Upload
      onRemove={onRemove}
      beforeUpload={beforeUpload}
      customRequest={customRequest}
    />
  );
};

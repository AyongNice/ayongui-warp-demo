import { Upload } from 'ayongui';
import React from 'react';
import style from './index.module.less';

export default () => {
  const beforeUpload = () => {
    return new Promise((resolve) => resolve(false));
  };
  const onRemove = (file: any) => {
    return new Promise(async (resolve, reject) => {
      file && file.name === 'file.png' ? resolve(false) : resolve(true);
    });
  };
  const onChange = (file: any) => {
    console.log('onChange', file);
  };
  return (
    <React.Fragment>
      <Upload
        className={style.upload}
        maxFileSize={1024}
        uplaodText="限制大小1M"
      />
      <Upload
        className={style.upload}
        beforeUpload={beforeUpload}
        uplaodText="停止上传"
      />
      <Upload
        className={style.upload}
        onRemove={onRemove}
        uplaodText="停止删除文件"
      />
      <Upload disabled uplaodText="禁用上传" />
    </React.Fragment>
  );
};

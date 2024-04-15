import { Button, Upload, Uploads } from 'ayongui';
import React from 'react';
import style from './index.module.less';

export default () => {
  const onChange = (file: UploadFile) => {};
  return (
    <React.Fragment>
      <Upload
        className={style.upload}
        onChange={onChange}
        maxCount={1}
        uplaodText="上传单个文件"
      />
      <Upload
        className={style.upload}
        onChange={onChange}
        multiple
        uplaodText="多选文件"
      />

      <Upload
        className={style.upload}
        uplaodRender={(onUplaod) => {
          return (
            <Button onClick={onUplaod} type="warn">
              {' '}
              <Uploads style={{ color: '#fff' }} /> 自定义dom节点上传
            </Button>
          );
        }}
      />
      <Upload
        uplaodText="自定义icon渲染"
        iconRender={() => (
          <img
            style={{ width: '18px' }}
            src={require('../../assets/pdflogo.png')}
          />
        )}
      />
    </React.Fragment>
  );
};

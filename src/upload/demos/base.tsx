// import Button from 'ayongUI/radio/demos/button';
import type { UploadFile } from 'ayongui';
import { Button, Upload } from 'ayongui';
import React from 'react';

export default () => {
  const porps: UploadProps = {
    action: '/api/weekend/upload-img',
    data: {
      isPublic: true,
    },
    headers: {
      Authorization: 'Bearer YOUR_ACCESS_TOKEN',
    },
    onRemove: (file: UploadFile) => {
      return new Promise(async (resolve, reject) => {
        file && file.name === 'file.png' ? resolve(false) : resolve(true);
      });
    },
    beforeUpload: (file: UploadFile) => {
      return new Promise((resolve) => resolve(true));
    },
    onChange: (file: UploadFile) => {
      console.log('onChange', file);
    },
  };

  const qeruys = async () => {
    //post 请求
    fetch('/api/expertLookBoard/queryAllExpertInfoQuery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        typeEcharts: '01'
      }),
    })
      .then((res) => res.json())
      .then((res) => {})
  };

  return (
    <Upload {...porps} multiple />
  );
};

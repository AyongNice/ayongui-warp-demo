import React from 'react';
import butStyle from './index.module.less';

export default () => {
  return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {React.createElement('ayong-button', {
          'class-name': 'diy',
          text: '自定义样式',
        })}
        {React.createElement('ayong-button', {
          type: 'primary',
          href: 'https://github.com/AyongNice/ayongui',
          text: 'href-跳转按钮',
        })}
      </div>
  );
};


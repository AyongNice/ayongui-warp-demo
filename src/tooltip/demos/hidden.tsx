import { Button, Tooltip } from 'ayongUI';
import React from 'react';

export default () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Tooltip
        width="300px"
        whiteSpace="wrap"
        title="这是一行很长的文字,很荣幸作为代码示例出现在大家面前;他超出了您规定的300px,所以换行了,在换行文本设置中必须指定width大小 和whiteSpace='wrap'"
        placement="top"
      >
        <Button>换行展示</Button>
      </Tooltip>
    </div>
  );
};

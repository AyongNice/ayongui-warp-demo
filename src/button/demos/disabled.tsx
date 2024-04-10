import { Button } from 'ayongUI';
import React from 'react';
export default () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button type="text">文字类型</Button>
            <Button type="primary" disabled>
                禁用
            </Button>
        </div>
    );
};

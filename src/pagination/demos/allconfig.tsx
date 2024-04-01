import React, {useEffect, useState} from 'react';
import {Pagination} from 'ayongUI'

export default () => {


    const onSizeChange = (pageSize) => {
        console.log('页码显示大小变化了!', pageSize)
    }
    const onCurrentChange = (pageNo) => {
        console.log('当前页码变化了', pageNo)
    }


    return <Pagination
        total={50}
        showQuickJumper
        showSizeChanger
        onSizeChange={onSizeChange}
        onCurrentChange={onCurrentChange}
    />
}
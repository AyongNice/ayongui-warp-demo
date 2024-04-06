import React   from "react";
import {Tooltip,Button} from 'ayongUI'

export default () => {
  return <div style={{display: "flex", justifyContent: 'space-around'}}>
    <Tooltip title='向上弹出' placement="top">
      <Button >top</Button>
    </Tooltip >

    <Tooltip title='向右弹出' placement="right">
      <Button >right</Button>
    </Tooltip >


    <Tooltip  title='向下弹出' placement="bottom">
      <Button >bottom</Button>
    </Tooltip >

    <Tooltip title='向左弹出' placement="left">
      <Button >left</Button>
    </Tooltip >
  </div>
}

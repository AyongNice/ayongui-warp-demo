import {useState} from 'react'
import {Tooltip,Button} from 'ayongui'


export default () => {

  const [color,setColor]= useState('#14d8ff');

  return <div>
    <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
   
   <br/>
   <br/>

    <Tooltip placement="top" title='你可以想用你喜欢的颜色' color={color}  >
      <Button >在色块中选择颜色</Button>
    </Tooltip >
  </div>
}

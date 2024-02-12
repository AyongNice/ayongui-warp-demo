---
order: 21
---

# Modal 对话框
```tsx  hideCode=true inline=true
import {usePrefersColor} from 'dumi';
import React, {useEffect} from 'react';
import {setThemeVariables} from "ayongUI";
import {ModeTheme} from '../../globe/theme.ts'

export default () => {
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor();
  useEffect(() => {
    setThemeVariables(new ModeTheme()[color])
  }, [color])

};
```

### 基本使用

```tsx
import {Modal, Button} from 'ayongUI'
import {useState} from "react";

export default () => {
    const [open, setOpen] = useState(false);
    const onClose = (date) => {
        setOpen(false)
        console.log(open)
    };
    return <div>
        <Button type="primary" onClick={() => setOpen(true)}>
            Open Modal
        </Button>
        <Modal open={open} onClose={onClose}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    </div>
}
```

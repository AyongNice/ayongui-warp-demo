import {Modal, Button} from 'ayongui'
import {useState} from "react";

export default () => {
    const [open, setOpen] = useState(false);
    const onClose = (date) => {
        setOpen(false)
    };

    return <div>
        <Button type="primary" onClick={() => setOpen(true)}>
            打开弹窗
        </Button>
        <Modal title='ayongui的Modal' open={open} onOk={onClose} onCancel={onClose} onClose={onClose}>
            <p>这是对话框内容...</p>
            <p>这是对话框内容...</p>
            <p>这是对话框内容...</p>
        </Modal>
    </div>
}
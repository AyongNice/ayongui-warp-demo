import { Button, Message } from 'ayongui';

const App = () => {
  const onMessage = () => {
    Message.info({
      message: 'This is a info message',
      showClose: true,
      onClose: () => {
        console.log('关闭了');
      },
    });
  };
  return <Button onClick={onMessage}>info-消息</Button>;
};
export default App;
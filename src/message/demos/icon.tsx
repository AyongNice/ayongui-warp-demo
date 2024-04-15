import { Button, Message, Setting } from 'ayongui';

const App = () => {
  const onDiyIcon = () => {
    Message.info({
      message: 'This is a diy Icon message',
      icon: <Setting />,
      useHTMLString: true,
    });
  };
  return <Button onClick={onDiyIcon}>自定义icon</Button>;
};
export default App;
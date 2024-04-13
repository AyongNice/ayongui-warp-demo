

import { Button, Message } from 'ayongUI';

const App = () => {
  const onDuration = () => {
    Message.info({
      message: 'This is a info message',
      duration: '6',
    });
  };
  return <Button onClick={onDuration}>自定义时长</Button>;
};
export default App;
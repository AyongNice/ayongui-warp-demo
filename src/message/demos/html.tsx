import { Button, Message } from 'ayongui';
const onUseHTML = () => {
  Message.info({
    message: <h2>这是一个HTML内容</h2>,
    useHTMLString: true,
  });
};
const App = () => {
  return <Button onClick={onUseHTML}>Use HTML String</Button>;
};

export default App;
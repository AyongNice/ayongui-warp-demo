import { Button, Message } from 'ayongUI';


const App = () => (
  <div style={{display:'flex',justifyContent:'space-around'}}>
    <Button
      onClick={() => Message.info({ message: 'This is a info message' })}
    >
      info-消息
    </Button>

    <Button
      type="primary"
      onClick={() => Message.success({ message: 'This is a info message' })}
    >
      success-消息
    </Button>
  </div>
);
export default App;

import {Button, Message} from 'ayongui';


const App = () => (
  <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <Button
      type="warn"
      onClick={() => Message.warning({message: 'This is a warning message'})}
    >
      warning-警告
    </Button>

    <Button
      type="error"
      onClick={() => Message.error({message: 'This is a error message'})}
    >
      error-报错
    </Button>
  </div>
);
export default App;

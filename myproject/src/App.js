import logo from './logo.svg';
import './App.css';
import Message from './components/Messagge';





function App() {
  return (
    <div className="App">
      <Message messagecontent = "This is a message from props" messageCode = '1234'/> 
    
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Message from './components/Messagge';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';

function App() {
  return (
    <div className="App">
      
      <Resume  message = "message is there"/>

      <hr />
      <FunctionEvent />
      
    </div>
  );
}

export default App;

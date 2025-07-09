import logo from './logo.svg';
import './App.css';
import Message from './components/Messagge';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from "./components/ClassEvent"

function App() {
  return (
    <div className="App">

      <FunctionEvent />
      <hr></hr>
      <ClassEvent />
      
    </div>
  );
}

export default App;

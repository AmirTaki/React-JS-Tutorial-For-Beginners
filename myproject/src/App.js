import logo from './logo.svg';
import './App.css';
import Message from './components/Messagge';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Profile name = "amir" lastname = "taki" />

      <Resume  message = "message is there"/>
      
    </div>
  );
}

export default App;

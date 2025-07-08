import logo from './logo.svg';
import './App.css';
import Profile from './Profile';



function App() {
  return (
    <div className="App">
      <Profile name = "amir" lastname = "taki"  >
        <h1>This is a profile of a person</h1>
      </Profile>
      <Profile name = "mani" lastname = "cuban" />
      <Profile name = "jak"  lastname = "pawar"/>
    
    </div>
  );
}

export default App;

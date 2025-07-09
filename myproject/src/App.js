import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import InlineComponent from './components/InlineComponent';

function App() {
  return (
    <div className="App">
      <InlineComponent />
      <Todo />
    </div>
  );
}

export default App;

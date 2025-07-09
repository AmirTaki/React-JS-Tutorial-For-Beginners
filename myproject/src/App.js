// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo]  =  useState ('')
  const [todoList, setTodoList] = useState([])
  return (
    <div className="App">
      {/* header */}
      <Header/>
      {/* form */}
      <Form 
        todo = {todo}  
        setTodo = {setTodo} 
        todoList = {todoList} 
        setTodoList = {setTodoList}
      />
      {/* todo list */}
      <TodoList 
        todoList = {todoList}
        setTodoList = {setTodoList}
      />
    </div>
  );
}

export default App;

import TodoList from './components/TodoList/TodoList';
import './App.css';
import { useState } from 'react';
import NewTodo from './components/newTodo/NewTodo';
import Header from './components/header/Header';

function App() {
 
  return (
    <div className="App">
      <Header/>
      <NewTodo/>
    <TodoList/>
    </div>
  );
}

export default App;

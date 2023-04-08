import TodoList from './components/TodoList/TodoList';
import './App.css';
import { useState } from 'react';
import NewTodo from './components/newTodo/NewTodo';
import Header from './components/header/Header';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
 
  
  const submitHandler = (e)=>{
    e.preventDefault();
    setTasks([...tasks, {title: task, id: Date.now()}]);
    setTask("");
  }
  const changeHandler = (e)=>{
setTask(e.target.value);
  }
  // handle above removeHandler
 const removeHandler = (id)=>{
  console.log(id)
  const filteredTasks = tasks.filter(t=> t.id !== task.id);
  alert(filteredTasks);
  setTasks(filteredTasks);
 }
  return (
    <div className="App">
      <Header/>
      <NewTodo id={task.id}  change={changeHandler} task={task} submit={submitHandler}/>
    <TodoList remove={removeHandler} title={task} tasks={tasks} />
    </div>
  );
}

export default App;

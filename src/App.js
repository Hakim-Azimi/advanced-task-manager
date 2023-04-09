import TodoList from './components/TodoList/TodoList';
import './App.css';
import { useState } from 'react';
import NewTodo from './components/newTodo/NewTodo';
import Header from './components/header/Header';

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const todayString = day + "/" + month + "/" + year;
 
  
  
  const changeHandler = (e)=>{
setTask(e.target.value);
  }
  // handle above removeHandler
 const removeHandler = (id)=>{
  if(window.confirm){
    const filteredTasks = tasks.filter((t)=> t.id !== id);
    setTasks(filteredTasks);
  }
 }
 const submitHandler = (e)=>{
  e.preventDefault();
  setTasks([...tasks, {title: task,done: false,created: todayString, id: Date.now()}]);
  setTask("");
}

const doneHandler = (id)=>{
  const index = tasks.findIndex((item)=> item.id === id);
  const updatedTasks = [...tasks];
  updatedTasks[index] = {
    id: tasks[index].id,
    title: tasks[index].title,
    done: !tasks[index].done,
    created:tasks[index].created,
    finished: tasks[index].todayString,

  }
  setTasks(updatedTasks);
  
}
const finishedTasks = (tasks)=>{
  const filteredTasks =tasks.filter((task)=> task.done === true);
  return filteredTasks.length;
}
const unfinishedTasks = (tasks)=>{
  const filteredTasks = tasks.filter((task)=> task.done !== true);
  return filteredTasks.length;
}
  return (
    <div className="App">
      <Header unfinished = {unfinishedTasks(tasks)} finished = {finishedTasks(tasks)} allTasks={tasks.length}/>
      <NewTodo id={task.id}  change={changeHandler} task={task} submit={submitHandler}/>
    <TodoList  completed={doneHandler} time={todayString} id={task.id} remove={removeHandler} title={task} tasks={tasks} />
    </div>
  );
}

export default App;

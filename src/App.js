import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import { useState, useEffect } from "react";
import NewTodo from "./components/newTodo/NewTodo";
import Header from "./components/header/Header";

function App() {
  const [error, setError] = useState(null);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const todayString = day + "/" + month + "/" + year;

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem(tasks));
    if (getTodos) {
      setTasks(getTodos);
    }
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const editHandler = () => {
    alert("edit");
  };
  const removeHandler = (id) => {
    if (window.confirm) {
      const filteredTasks = tasks.filter((t) => t.id !== id);
      setTasks(filteredTasks);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (task.length < 5) {
      setError("تسک خود را وارد کنید. این تسک حداقل 4 حرف باید داشته باشد");

      return false;
    }
    setTasks([
      ...tasks,
      { title: task, done: false, created: todayString, id: Date.now() },
    ]);
    setTask("");
    setError(null);
  };

  const doneHandler = (id) => {
    const index = tasks.findIndex((item) => item.id === id);
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      id: tasks[index].id,
      title: tasks[index].title,
      done: !tasks[index].done,
      created: tasks[index].created,
      finished: tasks[index].todayString,
    };
    setTasks(updatedTasks);
  };
  const finishedTasks = (tasks) => {
    const filteredTasks = tasks.filter((task) => task.done === true);
    return filteredTasks.length;
  };
  const unfinishedTasks = (tasks) => {
    const filteredTasks = tasks.filter((task) => task.done !== true);
    return filteredTasks.length;
  };

  return (
    <div className="App">
      <Header
      tasks={tasks}
        unfinished={unfinishedTasks(tasks)}
        finished={finishedTasks(tasks)}
        allTasks={tasks.length}
      />
     
        <NewTodo
          error={error}
          id={task.id}
          change={changeHandler}
          task={task}
          submit={submitHandler}
        />
        <TodoList
          edit={editHandler}
          completed={doneHandler}
          time={todayString}
          id={task.id}
          remove={removeHandler}
          title={task}
          tasks={tasks}
        />
      
    </div>
  );
}

export default App;

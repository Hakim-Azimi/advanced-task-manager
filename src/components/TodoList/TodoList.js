import "./list.css";
import { useEffect } from "react";
const Todolist = ({completed, time, tasks, remove }) => {
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="lists">
      {tasks &&
        tasks.map((todo) => {
          return (
            <div className="list" key={todo.id}>
              <div className="list-title">{todo.title}</div>
              created in {time}
              
              <div className="list-btns">
                <button onClick={() => completed(todo.id)}>{todo.done? "undo": "done"} </button>
                <button onClick={() => remove(todo.id)}>remove </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Todolist;

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
            <div className={todo.done? "list list-done" :"list"} key={todo.id}>
              <div className="list-title">{todo.title}</div>
             <span className="time">
             ایجاد شده در {time}
             </span>
              
              <div className="list-btns">
                <button onClick={() => completed(todo.id)}>{todo.done? "بازگردانی": "انجام شد"} </button>
                <button onClick={() => remove(todo.id)}>حذف </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Todolist;

import "./todo.css";
const NewTodo = ({ id,title,submit, task, change }) => {
  return (
    <div className="new-todo-form">
      <h5>enter your task...</h5>
      <form onSubmit={submit}>
        <input
        title={title} 
        key={id}
        onChange={change}
        value={task}
        type="text" placeholder="my today's task is ..." />
        <div className="form-btns">
          <button type="submit">add </button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;

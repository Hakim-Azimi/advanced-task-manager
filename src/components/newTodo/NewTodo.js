import "./todo.css";
const NewTodo = ({ id,title,submit, task, change }) => {
  return (
    
    <div className="new-todo-form">
      <h5>کار جدیدی را وارد کنید</h5>
      <form onSubmit={submit}>
        <input
        title={title} 
        key={id}
        onChange={change}
        value={task}
        type="text" placeholder="کار امروزت چیه ..." />
         <button id="submit-btn" type="submit">ثبت کن </button>
        
      </form>
    </div>
  );
};

export default NewTodo;

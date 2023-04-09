import "./todo.css";
const NewTodo = ({ id,title,submit, task, change, error }) => {
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
      {
          error && <p className="err">{error}</p>
        }
    </div>
  );
};

export default NewTodo;

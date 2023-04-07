import './todo.css'
const NewTodo = () => {
  return ( 
   <div className='new-todo-form'>
     <h5>enter you'r task...</h5>
    <form>
      <input type='text' placeholder="my today's task is ..."/>
      <div className='form-btns'>
        <button>add </button>
      
      </div>

    </form>
   </div>
   );
}
 
export default NewTodo;
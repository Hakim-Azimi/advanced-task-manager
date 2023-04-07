import './list.css'
const Todolist = () => {
  return ( 
    <div className='lists'>
      <div className='list'>
      <p>firs task is .....</p>
      <div className='list-btns'>
        <button>add </button>
      <button>edit </button>
      <button>remove </button>
      </div>
      </div>
      <div className='list'>
      <p>firs task is .....</p>
      <div className='list-btns'>
        <button>add </button>
      <button>edit </button>
      <button>remove </button>
      </div>
      </div>
    </div>
   );
}
 
export default Todolist;
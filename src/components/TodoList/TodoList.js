import './list.css';
import { useEffect } from 'react';
const Todolist = ({tasks, remove}) => {
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return ( 
    <div className='lists'>

      {tasks && tasks.map((todo)=>{
        return (
          <div className='list'>
           <div className='list-title'>{todo.title}</div>
            <div className='list-btns'>
              
              <button>edit </button>
              <button onClick={remove}>remove </button>
            </div>
          </div>
        )
      })}

    </div>
   );
}

export default Todolist;
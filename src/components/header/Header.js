import './header.css'
const Header = ({allTasks, finished}) => {
    return ( 
      
        <header>
         <p>تسک تکمیل شده = {finished} </p>
         <p> کل کارها = {allTasks} </p>

           <h3> task manager aplication</h3>
        </header>
     );
}
 
export default Header;
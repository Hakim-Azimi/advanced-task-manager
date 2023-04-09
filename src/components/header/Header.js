import "./header.css";
const Header = ({ allTasks, finished, unfinished }) => {
  const clickHandler = (name) => {
    if (name === "allTasks") {
      alert(`امروز ${allTasks} کار را وارد کرده ای`);
    } else if (name === "finished") {
      alert(`تعداد ${finished} کار را انجام داده ای. ...`);
    } else {
      alert(`برای امروز ${unfinished} کار دیگر برای انجام دادن داری`);
    }
  };
  

  return (
    
      <header>
        <h3> مدیریت کارهای روزانه</h3>
        <p onClick={() => clickHandler("finished")}>
          تسک تکمیل شده = {finished}{" "}
        </p>
        <p onClick={() => clickHandler("")}>تسک تکمیل نشده = {unfinished} </p>
        <p onClick={() => clickHandler("allTasks")}> کل کارها = {allTasks} </p>
      </header>
      
    
  );
};

export default Header;

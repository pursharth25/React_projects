import './TodoDate.css';

function TodoDate(props){
    const todoDate = props.userData;
    const month = todoDate.toLocaleString('en-US',{month:'long'})
    const day = todoDate.toLocaleString('en-US',{day:'2-digit'});
    const year = todoDate.getFullYear();
  
    return(
        <div className='todo-date'>
        <div className='todo-month'>{month}</div>
        <div className='todo-year'>{year}</div>
        <div className='todo-day'>{day}</div>
    </div>
    );
}

export default TodoDate;
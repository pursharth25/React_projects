import {useState} from 'react';
import './TodoItem.css';
import TodoDate from '../TodoDate/TodoDate';
function TodoItem(props){

   const [usertitle , setTitle] = useState(props.title)
   const [textChange , setTextChange] = useState(false);
   const [newPriority, setPriority] = useState(props.priority)

    let title =props.title;
    const todoDate= props.date;
    const priority = props.priority;

    const buttonClickHandler = () =>{
      setTitle('this is new data');
      setTextChange(textChange => !textChange);
      setPriority('High');
    }
    
    return(
  <div className="todo-item">
     <TodoDate userData={todoDate} />
      <div className='todo-description'>
          <h2 className={`${textChange == true ? 'color1' : ''}`}>{usertitle}</h2>
          <div className='todo-priority'>{newPriority}</div>
          <button onClick={buttonClickHandler}>Change text</button>
      </div>
  </div>
    );
}

export default TodoItem;


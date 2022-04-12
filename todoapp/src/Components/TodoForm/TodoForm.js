import './TodoForm.css';
import { useState } from 'react';
const TodoForm = (props) =>{

    
     const[title,setTitle] = useState('')
     const[todoDate,setTodoDate]= useState('')
     const[priority,setPriority] = useState('')

    // const [userInput,setInput] = useState({
    //     title:'',
    //     todoDate:'',
    //     priority:''
    // })

    const titleChangeHandler = (event) =>{
       
        setTitle(event.target.value);
    }
    
    const dateChangeHandler = (event) =>{
        setTodoDate(event.target.value);
    }
    
    const priorityChangeHandler = (event)=>{
        setPriority(event.target.value);
        
    }

    const submitHandler = (event) =>{
     event.preventDefault();
     const userData={
         title: title,
         date : new Date(todoDate),
         priority : priority
     }
     props.onSaveClick(userData);
    //  setTitle('');
    //  setTodoDate('');
    //  setPriority('Medium');

     }

    return(
        <form onSubmit={submitHandler}>
     <div className="todo-controls">
     <div className="todo-control">
         <label htmlFor="title">Title</label>
         <input type="text" name="title" id="title" onChange={titleChangeHandler} />
         </div>
         <div className="todo-control">
         <label htmlFor="title">Date</label>
         <input type="date" name="date" id="date" onChange={dateChangeHandler} />
         </div>
         <div className="todo-control">
             <label htmlFor='priority'>Priority</label>
         <select onChange={priorityChangeHandler}>
             <option value='High'>High</option>
             <option value='Medium'>Medium</option>
             <option value='Low'>Low</option>
             
         </select>
         </div>
     </div>
     <div className="todo-actions">
         <button type='submit' className='btn'>Add Todo</button>
     </div>
     </form>
    );
      
  }
  
  
  export default TodoForm;
  
  
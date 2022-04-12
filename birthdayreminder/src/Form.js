import './Form.css';
import { useState } from 'react';
const Form = (props) =>{

    const[name,setName]=useState('')
    const[age,setAge]=useState(0)
    const[image,setImage]=useState('')

    const submitHandler = (event)=>{
        event.preventDefault()
        const userData={
            name:name,
            age:age,
            image:image
        }
        props.dataSave(userData)
    }
  
    return(
        <form onSubmit={submitHandler}>
        <div className="todo-controls">
        <div className="todo-control">
            <label htmlFor="name">Name:  </label>
            <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="todo-control">
            <label htmlFor="age">Age:  </label>
            <input type="text" name="age" id="age"  onChange={(e)=>setAge(e.target.value)} />
            </div>
            <div className="todo-control">
                <label htmlFor='img'>Image:  </label>
                <input type="file" name="img" id="img"  onChange={(e)=>setImage(e.target.value)}/>

            </div>
        </div>
        <div className="todo-actions">
            <button type='submit' className='btn'>Submit</button>
        </div>
        </form>
    );

  

}

export default Form;
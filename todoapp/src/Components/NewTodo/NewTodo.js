import TodoForm from '../TodoForm/TodoForm';
import './NewTodo.css';
const NewTodo = (props) =>{

 const getFormData = (formData) =>{
   console.log(formData);
   const userdata = {
     ...formData,
     id: Math.random().toString()
   }
   props.onDataReceive(userdata);
 }

  return(
   <div className="new-todo">
   <TodoForm onSaveClick={getFormData}/>
   </div>
  );
    
}


export default NewTodo;


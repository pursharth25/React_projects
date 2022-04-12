import './Todos.css';
import TodoItem from "../TodoItem/TodoItem";
import Card from '../UI/Card';
const Todos = (props)=>{
    const ALL_TODO = props.todo;
   return (
       <Card className='todos'>
           {ALL_TODO.map((todo)=>(
               <TodoItem 
               title = {todo.title}
               priority = {todo.priority}
               date={todo.date} 
               key={todo.id}
               />
           ))}
           </Card>
   );
           } 



            
        
    /* <TodoItem
    title = {INITIAL_TODO[0].title}
    priority={INITIAL_TODO[0].priority}
    date={INITIAL_TODO[0].date} 
    />

<TodoItem
    title = {INITIAL_TODO[1].title}
    priority={INITIAL_TODO[1].priority}
    date={INITIAL_TODO[1].date} 
    />

<TodoItem
    title = {INITIAL_TODO[2].title}
    priority={INITIAL_TODO[2].priority}
    date={INITIAL_TODO[2].date} 
    />

<TodoItem
    title = {INITIAL_TODO[3].title}
    priority={INITIAL_TODO[3].priority}
    date={INITIAL_TODO[3].date} 
    /> */
    // </div>

   


export default Todos;
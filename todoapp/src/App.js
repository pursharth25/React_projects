import Todos from "./Components/Todos/Todos";
import Card from "./Components/UI/Card";
import NewTodo from "./Components/NewTodo/NewTodo";
import {useState} from  'react';
function App() {
  const INITIAL_TODO =[
    {
      id:'T1',
    title :'this is first title',
      priority:'medium',
      date: new Date(2022,3,12)
    },
    {
      id:'T2',
    title :'this is second title',
      priority:'low',
      date:new Date(2021,4,11)
    },
    {
      id:'T3',
    title :'this is third title',
      priority:'high',
      date:new Date(2022,2,10)
    },
    {
      id:'T4',
    title :'this is fourth title',
      priority:'medium',
      date:new Date(2020,1,12)
    }
  ];


  const[alltodos,setalltodos] = useState(INITIAL_TODO);


  const dataSaveHandler = (usertodo)=>{
    console.log(usertodo);
    setalltodos((prevdata)=>{
      return [usertodo,...prevdata];
    })
  }

  return (
    
     <div>
       <NewTodo onDataReceive = {dataSaveHandler}/>
        <Todos todo={alltodos}/>
     </div>
      
     
      
  
  );
}

export default App;

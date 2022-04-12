import './App.css'
import Form from './Form';
import userData from './userData';
import ImgContainer from './ImgContainer';
import {useState,Fragment} from 'react'
import NewForm from './NewForm';

function App() {

  const[user,setUser]=useState(userData);
  const dataSaveHandler=(data)=>{
    setUser((prevData)=>{
      return[data,...prevData]
    })
  }
 return(
   <Fragment>
    
  <main>
   
      <section className="container">
        <h4>{user.length} Birthday today</h4>
        <ImgContainer people={user} />
        <button onClick={() => setUser([])}>Clear All</button>
      </section>
      <section className='container'>
      <NewForm onReceive={dataSaveHandler} />
      </section>
    </main>
    </Fragment>
 )
}

export default App;

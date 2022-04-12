import {Routes,Route,Link, Outlet, useNavigate} from 'react-router-dom';
import { Fragment } from 'react';
import { useReducer } from 'react';


const Welcome = () =>{

    const navigate = useNavigate();

    const[state,dispatchFunction] = useReducer();

    const buttonClickHandler = ()=>{
      navigate('/product');
    }

    return (
     <Fragment>
         <h1>This is Welcome page</h1>
         <Link to ='guest-user'>Guest User</Link>
        <Outlet />
        <button onClick={buttonClickHandler}>Click</button>
     </Fragment>
    );
}


export default Welcome;
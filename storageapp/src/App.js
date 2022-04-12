import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import {useState, useEffect,Fragment} from 'react';
import {Routes , Route} from 'react-router-dom';
import User from "./Components/User/User";
import Profile from "./Components/User/Profile";

function App() {
    
 
  const[isLoggedIn,setIsloggedIn] = useState(false);

  useEffect(()=>{
    const localStorageData = localStorage.getItem('userLoginState');
  if(localStorageData === 'LOGGED_IN' ){
    setIsloggedIn(true);
  }
  }, [])

  

  const loginHandler = (email,password)=>{
    console.log(email,password);
    setIsloggedIn(true);
    localStorage.setItem('userLoginState','LOGGED_IN')
  }

 const logouthandler = () =>{
   setIsloggedIn(false);
   localStorage.removeItem('userLoginState');
 }

  return (
  <Fragment>
      <Header userLoggedIn={isLoggedIn} onLogoutClick={logouthandler}/>
    <main>
      {!isLoggedIn ? <Login onLoginClick={loginHandler}/> : ''}
     {isLoggedIn ? <Home onLogoutClick={logouthandler}/> : '' }
     
    <Routes>

     <Route path='/users' element={<User />}/>

     <Route path='/profile' element={<Profile />}/>

    </Routes>

    </main>
    </Fragment>
  );
}

export default App;

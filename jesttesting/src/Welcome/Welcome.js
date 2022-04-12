import {Fragment , useState} from 'react';

function Welcome (){

    const[changetext,setchangetext]=useState(false);

    const changetexthandler = ()=>{
        setchangetext(true);
    }
  return(
      <Fragment>
          <h2>Hello World</h2>
        { !changetext ?  <p>Good Morning</p> : <p>Good Night</p>}
          <button onClick={changetexthandler}>Change text</button>
      </Fragment>
  );
}

export default Welcome;
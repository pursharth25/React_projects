import Form from "./Form";
import { Fragment } from "react";

const NewForm = (props) =>{
    const getData = (userData)=>{
        const formData = {
            ...userData,
            id:Math.random().toString()
        }
      props.onDataReceive(formData)
    }
    return(
     <Fragment>
         <Form dataSave={getData} />
     </Fragment>
    );
}

export default NewForm;
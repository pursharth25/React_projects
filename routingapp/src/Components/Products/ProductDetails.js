import { useParams } from "react-router-dom";
import { Fragment } from "react";
const ProductDetails = () =>{
    const params = useParams();
    console.log(params);
    return(
        <Fragment>
     <h1>This is Product Details page</h1>
     <p>
         {params.productID}
     </p>
     </Fragment>
    );
}


export default ProductDetails;
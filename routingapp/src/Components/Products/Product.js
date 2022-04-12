import { Link } from "react-router-dom";

const Product = () =>{

    const PRODUCT_ARRAY =[
        {
            id:'p1',
            name:'books',
        },
        {
            id:'p2',
            name:'Paper',
        },
        {
            id:'p3',
            name:'pens',
        }
    ];

    return (
        <section>
            <h1>Products page</h1>
            <ul>
               {PRODUCT_ARRAY.map((item)=>(
                   <li>
                       <p>{item.name}</p>
                       <Link className="btn" to={`/product/${item.id}`}>
                           Details
                       </Link>
                   </li>
               ))}
            </ul>
        </section>
    );
}


export default Product;
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Products = () => {
     //state
const [products, setproducts] = useState([]);
console.log(products);
//useEffect
  useEffect(() => {
     getproducts();
  }, []);
//to get data from API and store it into products Array"state"
const getproducts = () => {
     fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setproducts(json))  
}
//return "HTML"
  return (
  <>
  <h1>Products List</h1>
  <section className="d-flex flex-wrap justify-content-center">
  {
       products.map(product=>{

            return(
 <div   key={product.id} className="card w-25 mx-3 my-3  justify-content-center">
  <img src={product.image} className="card-img-top w-50 mx-auto" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <h6>{product.price}</h6>
    <p className="card-text ">{product.description}</p>
      <Link to={`/products/${product.id}`}   className="btn btn-primary">Go To Details</Link>
  </div>
</div>   
            )
       })
  }
  </section>
  
   </>
  );
};

export default Products;

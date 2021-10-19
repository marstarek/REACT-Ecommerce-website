import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Productitem = () => {
     const [product, setproduct] = useState({});

     useEffect(() => {
          getProductitem()
     }, [])
     
     const getProductitem = () => {
          fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>setproduct(json))
     }
  return (
  <div className="row  mx-5 my-5">
<div   key={product.id} className="card w-25 mx-3 my-3  justify-content-center">
  <img src={product.image} className="card-img-top w-50 mx-auto" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <h6>{product.price}</h6>
    <p className="card-text ">{product.description}</p>
  </div>
</div> 
  </div>
  )
};

export default Productitem;

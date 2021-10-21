import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./productsstyle.css";

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
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setproducts(json));
  };
  //return "HTML"
  return (
    <>
      <h1 className="my-5">Products List</h1>
      <div class="containerr">
        <div class="flex">
          {products.map((product) => {
            return (
              <>
                {product ? (
                  <div class="card" key={product.id}>
                    <img
                      src={product.image}
                      className="imgo card-img-top w-50 mx-auto"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 className="card-title ">{product.title}</h5>
                      <h6>{product.price}</h6>
                      <p className="card-text ">{product.description}</p>
                      //وانت رايح خد معاك الid 
                      <Link
                        to={`/products/${product.id}`}
                        className="btn btn-primary"
                      >
                        Go To Details
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;

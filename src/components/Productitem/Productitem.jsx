import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./proitem.css";
const Productitem = ({ match }) => {
  const [product, setproduct] = useState({});

  useEffect(() => {
    getProductitem();
  }, []);

  const getProductitem = () => {
    fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setproduct(json));
  };
  return (
    <div>
      {product ? (
        <article key={product.id} className="product">
          <div className="product__image">
            <img src={product.image} className=" w-50 mx-auto" alt="..." />
          </div>
          <div className="product__body">
            <div className="product__text">
              <h2 className="product__title">{product.title}</h2>
              <p className="product__description">{product.description}</p>
              <h6 className="product__title">Price: {product.price}$</h6>
              <h6 className="product__title">category: {product.category}</h6>
            </div>
          </div>
        </article>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Productitem;

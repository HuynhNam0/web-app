import React from "react";
import "./style.css";
import { useEffect, useState } from "react";

function Product(props) {
  const { id, title, price, image, addCard, addNumber, removeNumber, count } =
    props;
  return (
    <div className="product">
      <div className="product__image">
        {" "}
        {/* <img src={image}> </img>{" "}{" "} */}
      </div>{" "}
      <div className="product__title"> {title} </div>{" "}
      <div className="product__price"> {price}$ </div>{" "}
      <div className="product__add">
        <button onClick={() => addCard(id)}> Add to Cart </button>{" "}
      </div>{" "}
      {/* <div className="product__button">
        <button onClick={() => removeNumber()}> - </button>{" "}
        <div style={{ padding: 10, color: "red" }}> {count} </div>{" "}
        <button onClick={() => addNumber()}> + </button>{" "}
      </div>{" "} */}
    </div>
  );
}

export default Product;

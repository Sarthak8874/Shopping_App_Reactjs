import React, { useState } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { CartState } from "../Reducer/Context";
import { useEffect } from "react";

function Items(props) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  
  return (
    <>
      <div className="pro">
        <img src={props.image} alt="Loading" />
        <div className="des">
          <span>Adidas</span>
          <h5>{props.title}</h5>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>${props.price}</h4>
        </div>
        {cart.some((c) => c.id === props.Item.id) ? (
          <ShoppingBagOutlinedIcon
            onClick={() => {
              dispatch({
                type: "REMOVE",
                payload: props.Item,
              });
            }}
            className="removecart"
          />
        ) : (
          <ShoppingBagOutlinedIcon
            onClick={() => {
              dispatch({
                type: "ADD",
                payload: props.Item,
              });
            }}
            className="cart"
          />
        )}
      </div>
    </>
  );
}

export default Items;

import React, { useEffect, useState } from "react";
import { CartState } from "../Reducer/Context";

function Cartitem(props) {
  const [qty, setQty] = useState(props.qty);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <tr>
        <td>
          <a
            href="#"
            onClick={() => {
              dispatch({
                type: "REMOVE",
                payload: props.Item,
              });
            }}
          >
            <i className="fa-solid fa-circle-minus"></i>
          </a>
        </td>
        <td>
          <img src={props.image} alt="" srcSet="" />
        </td>
        <td>{props.title}</td>
        <td>${props.price}</td>
        <td>
          <input
            type="number"
            value={qty}
            onChange={(e) => {
              setQty(e.target.value);
              if(e.target.value <0){
                dispatch({
                  type: "REMOVE",
                  payload: props.Item,
                });
              }
              dispatch({
                type : "Changeqty",
                payload : props.Item,
                quantity : e.target.value
              })
            }}
          />
        </td>
        <td>${props.price*props.qty}</td>
      </tr>
    </>
  );
}

export default Cartitem;

import React, { useEffect, useState } from "react";
import { CartState } from "../Reducer/Context";
import Cartitem from "./Cartitem";

function Cart(props) {
  const { state } = CartState();
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(state.cart.reduce((acc, curr) => acc + Number(curr.price)*Number(curr.qty), 0));
  },state.cart);
  document.title = props.title;
  return (
    <>
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {(state.cart.length)? (state.cart.map((p) => {
              return (
                <>
                  <Cartitem
                    image={p.images[0]}
                    title={p.title}
                    price={p.price}
                    Item={p}
                    qty = {p.qty}
                    key = {p.id}
                  />
                </>
              );
            })) : ("CART IS EMPTY")}
          </tbody>
        </table>
      </section>
      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal"> Apply </button>
          </div>
        </div>
        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$ {total} </td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>FREE</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>$ {total}</strong>
              </td>
            </tr>
          </table>
          <button className="normal">Proceed to Checkout</button>
        </div>
      </section>
    </>
  );
}

export default Cart;

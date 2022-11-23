export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
     case "Changeqty" :
      return {
        ...state,
        cart: state.cart.map((c) => {
          if(c.id === action.payload.id){
            return {...c,qty : action.quantity}
          }
          else{
            return c
          }
        })
      };
     
    default:
      return state;
  }
};

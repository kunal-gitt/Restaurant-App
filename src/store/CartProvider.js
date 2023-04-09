import { useState } from "react";
import CartContext from "./cart-context";

const CardProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemtoCartHandler = (item) => {
    updateItems([...items, item]);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    additem: addItemtoCartHandler,
    removeitem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CardProvider;

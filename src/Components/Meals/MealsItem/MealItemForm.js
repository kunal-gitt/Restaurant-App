import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

const MealItemForm = (props) => {
  const cartctx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();

    const quantity = document.getElementById("amount" + props.id).value;

    cartctx.additem({ ...props.item, quantity: quantity });
    console.log(cartctx.items);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: " 1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;

import React, { useReducer } from "react";
import styles from "./Form.module.css";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  return state;
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const submithandler = (event) => {
    event.preventDefault();

    dispatch({ type: "INCREMENT" });
  };
  return (
    <form className={styles.form} onSubmit={submithandler}>
      <label>Amount [{state.count}]</label>
      <br></br>
      <button type="submit">+Add</button>
    </form>
  );
};

export default Cart;

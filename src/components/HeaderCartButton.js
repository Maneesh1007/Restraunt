import styles from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "./Cart-Context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}></span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;

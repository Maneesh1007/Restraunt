import { Fragment, useState } from "react";
import Summary from "./components/Summary";
import Cart from "./components/Popup";

import Header from "./components/Header";
import Item from "./components/AvailableMeals";

function App() {
  const [isCartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };
  return (
    <Fragment>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Summary />
      <Item />
    </Fragment>
  );
}

export default App;

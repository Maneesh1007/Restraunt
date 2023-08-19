import { Fragment } from "react";
import Summary from "./components/Summary";

import Header from "./components/Header";
import Item from "./components/AvailableMeals";

function App() {
  return (
    <Fragment>
      <Header />
      <Summary />
      <Item />
    </Fragment>
  );
}

export default App;

import React from "react";
import styles from "./Mealssummary.module.css";

const Summary = () => {
  return (
    <div className={styles.summary}>
      <h1>Delicious Food,Delivered to You</h1>

      <p>
        Choose your favourite meal from our board selection of available meals
        and enjoy a delicios lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high quality ingredeints,just-in-time of
        course by our experienced chesfs
      </p>
    </div>
  );
};

export default Summary;

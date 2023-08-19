import React from "react";
import styles from "./AvailableMeals.module.css";

const Item = () => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  return (
    <div className={styles.meals}>
      {DUMMY_MEALS.map((item) => (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>$ {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Item;
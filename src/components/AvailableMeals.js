import React from "react";
import styles from "./AvailableMeals.module.css";
import Card from "./Card";
import MealItem from "./MealItem";

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

  const mealList = DUMMY_MEALS.map((item) => (
    <MealItem
      key={item.id}
      name={item.name}
      id={item.id}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <div className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </div>
  );
};

export default Item;

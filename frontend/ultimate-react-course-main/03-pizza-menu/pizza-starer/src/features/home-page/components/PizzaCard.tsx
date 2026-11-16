import type { Pizza } from "../types/Pizza";

type PizzaCardProp = {
  pizza: Pizza;
};

export function PizzaCard({ pizza }: PizzaCardProp) {
  return (
    <div className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <div className="">
        <h3>{pizza.name}</h3>
        <p>Ingredients: {pizza.ingredients}</p>
        <span>Price: {pizza.price}</span>
      </div>
    </div>
  );
}

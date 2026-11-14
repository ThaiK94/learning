import type { Pizza } from "../../../types/Pizza";

type PizzaCardProp = {
  pizza: Pizza;
};

export function PizzaCard({ pizza }: PizzaCardProp) {
  return (
    <div>
      <img src={pizza.photoName} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>Ingredients: {pizza.ingredients}</p>
      <p>Price: {pizza.price}</p>
    </div>
  );
}

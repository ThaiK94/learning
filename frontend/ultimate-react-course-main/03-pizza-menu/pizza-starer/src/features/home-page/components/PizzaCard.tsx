import type { Pizza } from "../types/Pizza";

type PizzaCardProp = {
  pizza: Pizza;
};

export function PizzaCard({ pizza }: PizzaCardProp) {
  const isSoldOut : boolean = pizza.soldOut;

  return (
    <li className={`pizza ${isSoldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div className="">
        <h3>{pizza.name}</h3>
        <p>Ingredients: {pizza.ingredients}</p>
        <span>Price: { isSoldOut ? 'Sold Out' : pizza.price}</span>
      </div>
    </li>
  );
}

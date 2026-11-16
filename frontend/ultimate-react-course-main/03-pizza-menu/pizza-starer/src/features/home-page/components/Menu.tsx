import { pizzaData } from "../data/data";
import { PizzaCard } from "./PizzaCard";

export function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.map((pizza) => {
        return <PizzaCard key={pizza.name} pizza={pizza} />;
      })}
    </main>
  );
}

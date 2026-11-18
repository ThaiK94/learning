import { pizzaData } from "../data/data";
import { PizzaCard } from "./PizzaCard";

export function Menu() {
  const numPizzas: number = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. {numPizzas} creative dishes to choose from. All from 
        our stone oven, all organic, all delicious.
      </p>
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => {
            return <PizzaCard key={pizza.name} pizza={pizza} />;
          })}
        </ul>
      )}
    </main>
  );
}

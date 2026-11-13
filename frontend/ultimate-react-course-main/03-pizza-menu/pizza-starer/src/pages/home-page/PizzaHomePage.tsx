import { pizzaData } from "../../data/data";
import { PizzaCard } from "./components/PizzaCard";

export function PizzaHomePage() {
  return (
    <>
      <h1>My pizza shop</h1>

      <div>
        {
            pizzaData.map(pizza => {
                return <PizzaCard key={pizza.name} pizza={pizza} />
            })
        }
      </div>
    </>
  );
}

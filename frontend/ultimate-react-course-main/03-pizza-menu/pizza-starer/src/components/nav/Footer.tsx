import { Order } from "./public/Order";

export function Footer() {
  const hour: number = new Date().getHours();
  const openHour: number = 11;
  const closeHour: number = 22;
  const isOpen: boolean = hour >= openHour && hour <= closeHour;

  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHr = {closeHour}/>
      ) : (
        <div>
          <p>
            We are closed. Our hours are {openHour}.00 until {closeHour}.00.
            Come back tommorrow!
          </p>
        </div>
      )}
    </footer>
  );
}

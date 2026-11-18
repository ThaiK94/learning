import { Button } from "./Button";

export function Order({closedHr} : {closedHr : number}) {
  return (
    <div className="order">
      <p>We're open until {closedHr}:00. Come visit us or order online!</p>
      <Button />
    </div>
  );
}

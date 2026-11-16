export function Footer() {
  const hour: number = new Date().getHours();
  const openHour: number = 12;
  const closeHour: number = 22;
  const isOpen : boolean = hour >= openHour && hour <= closeHour;

  console.log(isOpen)
  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently Open!</footer>
  );
}

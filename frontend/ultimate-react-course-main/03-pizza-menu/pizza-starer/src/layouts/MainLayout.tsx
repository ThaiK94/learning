import { Header } from "../components/nav/Header";
import { Footer } from "../components/nav/Footer";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

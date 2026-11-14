import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { PizzaHomePage } from "../features/pizza/PizzaHomePage";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<PizzaHomePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

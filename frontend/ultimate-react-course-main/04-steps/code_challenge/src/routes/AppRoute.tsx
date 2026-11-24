import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage/HomePage";
import { MainLayout } from "../layouts/MainLayout";

export function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

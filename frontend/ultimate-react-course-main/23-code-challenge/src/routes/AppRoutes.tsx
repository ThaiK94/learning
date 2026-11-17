import { Routes, Route } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { HomePage } from "../pages/home-page/HomePage";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

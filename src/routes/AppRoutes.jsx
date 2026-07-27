import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Billing from "../pages/Billing";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Tables from "../pages/Tables";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="tables" element={<Tables />} />
        <Route path="billing" element={<Billing />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

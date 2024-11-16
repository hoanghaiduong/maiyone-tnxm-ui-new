import React from "react";
import HomeLayout from "./Layouts/HomeLayout";
import ServicePage from "./Pages/ServicePage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import AuthLayout from "./Layouts/AuthLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import AdminLayout from "./Layouts/AdminLayout";
import DashboardPage from "./Pages/DashboardPage";
import UserManagerPage from "./Pages/UserManagerPage";
import NotFoundPage from "./Pages/NotFoundPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Định nghĩa route chính */}
        <Route path="/" element={<HomeLayout />}>
          {/* Gắn HomePage làm nội dung mặc định */}
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="about-us" element={<AboutPage />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="user-manager" element={<UserManagerPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

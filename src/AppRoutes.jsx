import React, { useEffect } from "react";
import HomeLayout from "./Layouts/HomeLayout";
import ServicePage from "./Pages/ServicePage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import AuthLayout from "./Layouts/AuthLayout";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import AdminLayout from "./Layouts/AdminLayout";
import DashboardPage from "./Pages/DashboardPage";
import UserManagerPage from "./Pages/Admin/UserManagerPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ProfilePage from "./Pages/ProfilePage";
import SingleService from "./Pages/SingleService";
import BlogPage from "./Pages/BlogPage";

function AppRoutes() {
  const location = useLocation();
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <Routes>
      {/* Định nghĩa route chính */}
      <Route path="/" element={<HomeLayout />}>
        {/* Gắn HomePage làm nội dung mặc định */}
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="services" element={<ServicePage />} />
        <Route path="blogs" element={<BlogPage />} />

        <Route path="/service/:id" element={<SingleService />} />
        
       

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="user-manager" element={<UserManagerPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

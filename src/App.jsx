import { useEffect } from "react";

import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import HomeLayout from "./Layouts/HomeLayout";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";
import AuthLayout from "./Layouts/AuthLayout";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
function App() {
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);
  return (
    <>
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

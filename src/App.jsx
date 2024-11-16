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
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/ServicePage";
import HomeLayout from "./Layouts/HomeLayout";
import AboutPage from "./Pages/AboutPage";
import NotFoundPage from "./Pages/NotFoundPage";
import AuthLayout from "./Layouts/AuthLayout";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import DashboardPage from "./Pages/DashboardPage";
import AdminLayout from "./Layouts/AdminLayout";
import UserManager from "./Components/Admin/UserManagement/UserManager";
import UserManagerPage from "./Pages/UserManagerPage";
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/store";
import AppRoutes from "./AppRoutes";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

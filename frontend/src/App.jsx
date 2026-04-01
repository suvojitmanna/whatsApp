import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/user-login/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PublicRoute, ProtectedRoute } from "./protected.jsx";
import Home from "./components/homePage.jsx";
import UserDetails from "./components/userDetails.jsx";
import Status from "./pages/statusSection/status.jsx";
import Setting from "./pages/SettingSection/setting.jsx";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <Routes>
          {/* PUBLIC ROUTE */}
          <Route element={<PublicRoute />}>
            <Route path="/user-login" element={<Login />} />
          </Route>

          {/* PROTECTED ROUTES */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/user-profile" element={<UserDetails />} />
            <Route path="/status" element={<Status />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/user-login/Login.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <Routes>
          <Route path="/user-login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
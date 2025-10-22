import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgotPassword from "../ForgorPassword/ForgotPassword";
import OTP from "../OTP/OTP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "/ForgotPassword", element: <ForgotPassword /> },
      { path:"/otp", element: <OTP />},
    ],
  },
]);

export default router;

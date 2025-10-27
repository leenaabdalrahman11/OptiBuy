import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgotPassword from "../ForgorPassword/ForgotPassword";
import OTP from "../OTP/OTP";
import Test from "../Test/Test";
import Home from "../Home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "/ForgotPassword", element: <ForgotPassword /> },
      { path:"/otp", element: <OTP />},
      { path:"/test", element: <Test />},
      { path:"/home", element: <Home />},

    ],
  },
]);

export default router;

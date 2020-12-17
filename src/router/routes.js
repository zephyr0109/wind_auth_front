import Signin from "~/components/Auth/Signin";
import Register from "~/components/Auth/Register";

const routes = [
  {
    path: "/",
    component: Signin,
  },
  {
    path: "/signin",
    component: Signin,
  },
  {
    path: "/register",
    component: Register,
  },
];

export default routes;

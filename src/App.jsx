import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import New, { action as createOrderAction } from "./features/order/CreateOrder";
// import OrderItem from "./features/order/OrderItem";
import { loader as orderLoader } from "./features/order/Order";
import { action as updateAction } from "./features/order/UpdateOrder";
import AppLayout from "./ui/appLayout";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order", element: <Order /> },
      { path: "/order/new", element: <New />, action: createOrderAction },
      {
        path: "/order/:orderID",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

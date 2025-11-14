import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import New from "./features/order/CreateOrder";
import OrderItem from "./features/order/OrderItem";
import AppLayout from "./ui/appLayout";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/menu", element: <Menu />, loader: menuLoader },
      { path: "/cart", element: <Cart /> },
      { path: "/order", element: <Order /> },
      { path: "/order/new", element: <New /> },
      { path: "/order:orderID", element: <OrderItem /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

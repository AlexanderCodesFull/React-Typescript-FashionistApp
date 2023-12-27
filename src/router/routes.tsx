import {
  Cart,
  Checkout,
  Error,
  Home,
  Login,
  Product,
  ProductList,
  Register,
} from "@page";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "product/:id", element: <Product /> },
      { path: "product-list", element: <ProductList /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
]);

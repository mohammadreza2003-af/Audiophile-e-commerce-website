import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Applayout from "./components/Applayout";
import Error from "./components/Error";
import Home from "./components/Home";
import Headphone from "./components/Headphone";
import Speaker from "./components/Speaker";
import Earphones from "./components/Earphones";
import Product from "./components/Product";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/headphones", element: <Headphone /> },
      { path: "/speakers", element: <Speaker /> },
      { path: "/earphones", element: <Earphones /> },
      { path: "product/:productId", element: <Product /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

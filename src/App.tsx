import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Applayout from "./ui/Applayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Headphone from "./ui/Headphone";
import Speaker from "./ui/Speaker";
import Earphones from "./ui/Earphones";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/headphones", element: <Headphone /> },
      { path: "/speakers", element: <Speaker /> },
      { path: "/earphones", element: <Earphones /> },
      { path: "product/:productId" },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

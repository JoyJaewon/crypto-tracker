import React from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Coins from "./pages/Coins";
import Coin from "./pages/Coin";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "coins",
        element: <Coins />,
        children: [
          {
            path: ":coinId",
            element: <Coin />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

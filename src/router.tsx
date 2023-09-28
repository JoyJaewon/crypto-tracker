import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Coins from "./pages/Coins";
import Coin from "./pages/Coin";
import NotFound from "./pages/NotFound";
import Price from "./pages/Price";
import Chart from "./pages/Chart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "coins",
        element: <Coins />,
      },
      {
        path: "coins/:coinId",
        element: <Coin />,
        children: [
          {
            path: "price",
            element: <Price />,
          },
          {
            path: "chart",
            element: <Chart />,
          },
        ],
      },
    ],
  },
]);

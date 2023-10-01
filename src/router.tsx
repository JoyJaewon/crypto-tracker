import { createBrowserRouter } from "react-router-dom";
import Coins from "./pages/Coins";
import Coin from "./pages/Coin";
import NotFound from "./pages/NotFound";
import Price from "./pages/Price";
import Chart from "./pages/Chart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Coins />,
    errorElement: <NotFound />,
    children: [
      {
        path: ":coinId",
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

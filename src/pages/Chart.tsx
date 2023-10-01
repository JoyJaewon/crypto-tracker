import { useParams } from "react-router-dom";
import { fetchPriceInfo } from "../api";
import { useQuery } from "@tanstack/react-query";
import ApexCharts from "react-apexcharts";

interface RouteParams {
  [key: string]: string | undefined;
  coinId: string;
}

interface PriceData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

export default function Chart() {
  const { coinId } = useParams<RouteParams>();
  const { isLoading, data } = useQuery<PriceData[]>(
    ["price", coinId],
    () => {
      if (coinId) {
        return fetchPriceInfo(coinId);
      }
      throw new Error("Coin ID is undefined.");
    },
    { enabled: !!coinId }
  );
  console.log(data);
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexCharts
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => Number(price.close)) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

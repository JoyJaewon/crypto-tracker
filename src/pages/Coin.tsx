import React from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  [key: string]: string | undefined;
  coinId: string;
}

export default function Coin() {
  const { coinId } = useParams<RouteParams>();
  console.log(coinId);
  return <div>Coin: {coinId}</div>;
}

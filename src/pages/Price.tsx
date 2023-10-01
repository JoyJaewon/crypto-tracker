import React from "react";
import { useParams } from "react-router-dom";
interface RouteParams {
  [key: string]: string | undefined;
  coinId: string;
}
export default function Price() {
  const { coinId } = useParams<RouteParams>();
  console.log(coinId);
  return <div>Price</div>;
}

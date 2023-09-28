import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchCoinInfo, fetchPriceInfo } from "../api";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
interface CoinInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  description: string;
}

export default function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation();

  const { isLoading: infoLoading, data: infoData } = useQuery<CoinInfo>(
    ["info", coinId],
    () => {
      if (coinId) {
        return fetchCoinInfo(coinId);
      }
      throw new Error("Coin ID is undefined.");
    },
    { enabled: !!coinId }
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>(
    ["price", coinId],
    () => {
      if (coinId) {
        return fetchPriceInfo(coinId);
      }
      throw new Error("Coin ID is undefined.");
    },
    { enabled: !!coinId }
  );
  console.log(infoData);
  console.log(priceData);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

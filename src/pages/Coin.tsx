import { useState } from "react";
import {
  useParams,
  useLocation,
  Link,
  Outlet,
  useMatch,
} from "react-router-dom";
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
const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  a {
    display: block;
  }
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
  started_at: string;
  hash_algorithm: string;
}

export default function Coin() {
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
  const loading = infoLoading || priceLoading;
  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Tabs>
            <Tab>
              <Link to="price">Price</Link>
            </Tab>
            <Tab>
              <Link to="chart">Chart</Link>
            </Tab>
          </Tabs>
          <Outlet />
        </>
      )}
    </Container>
  );
}

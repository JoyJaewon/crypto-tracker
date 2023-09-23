import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Container = styled.div`
  padding: 0px 20px;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: #ffdad9;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;\
    display: block;
  }
  &:hover {
    color: blue;
  }
`;
const Title = styled.h1`
  font-size: 50px;
`;
const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];
export default function Coins() {
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={`${coin.name}`}>{coin.name} &rarr;</Link>
          </Coin>
        ))}
      </CoinsList>
      <Outlet />
    </Container>
  );
}

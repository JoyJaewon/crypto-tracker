# Crypto Tracker README.md

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Installation](#installation)
- [Features](#features)
- [Directory Structure](#directory-structure)
- [Code Summary](#code-summary)

---

## Introduction

Crypto Tracker is a web application for tracking cryptocurrency prices and statistics. Keep up to date with real-time data pulled from various cryptocurrency APIs. This project is built using React, TypeScript, styled-components, and react-query.

---

## Technologies

- React
- TypeScript
- Styled-Components
- React Query
- React Router DOM

---

## Installation

1. Clone the repository to your local machine.

    ```bash
    git clone https://github.com/yourusername/cryptotracker.git
    ```

2. Navigate into the project directory and install dependencies.

    ```bash
    cd cryptotracker
    npm install
    ```

3. Start the development server.

    ```bash
    npm run start
    ```

---

## Features

- **Coins List**: View a list of available coins.
- **Coin Detail**: Click on a coin to get more detailed information including charts and price history.

---

## Directory Structure

```text
src/
├── pages/
│   ├── Root.tsx
│   ├── Coins.tsx
│   ├── Coin.tsx
│   ├── Price.tsx
│   ├── Chart.tsx
│   └── NotFound.tsx
└── router.tsx
```

---

## Code Summary

### Router Configuration
- Using `createBrowserRouter` from react-router-dom to define routes.
- `Root`, `Coins`, `Coin`, `Price`, `Chart` and `NotFound` pages.
  
    ```javascript
    export const router = createBrowserRouter([ ... ]);
    ```

### Coins Page
- Uses `useQuery` from react-query to fetch coin data.
- Styled-components for layout and appearance.
  
    ```javascript
    const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoins);
    ```

### Coin Detail Page
- Utilizes React Router's `useParams` and `useLocation`.
- Fetches coin specific data using `useQuery`.
  
    ```javascript
    const { isLoading: infoLoading, data: infoData } = useQuery<CoinInfo>("info", coinId, ...);
    ```

---

Remember to replace `yourusername` in the git clone URL with your actual GitHub username.

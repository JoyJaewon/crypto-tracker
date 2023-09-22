import React from "react";
import { Outlet } from "react-router-dom";

export default function Coins() {
  return (
    <div>
      Coins
      <Outlet />
    </div>
  );
}

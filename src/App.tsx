import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import styles from "./styles/reset.module.css";

function App() {
  return (
    <div className={styles.reset}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

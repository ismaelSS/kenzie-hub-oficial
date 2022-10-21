import "./Styles/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/colors.css";
import "./Styles/global.css";
import "./Styles/buttons.css";
import "./Styles/typography.css";
import "./Styles/selects.css";
import "./Styles/font.css";
import "./Styles/input.css";
import { BrowserRouter } from "react-router-dom";
import RoutesPages from "./routes";
import { UserProvider } from "./contexts/userContexts";
import {TechsProvider } from "./contexts/TechsContexts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TechsProvider>
          <RoutesPages />
        </TechsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

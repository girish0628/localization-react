import { StrictMode } from "react";
import ReactDOM from "react-dom";
import LanguageContextProvider from "./components/contexts/LanguageContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </StrictMode>,
  rootElement
);

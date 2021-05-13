import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { BrowserRouter as Router } from "react-router-dom";

const engine = new Styletron();

ReactDOM.render(
  <Router>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BaseProvider>
    </StyletronProvider>
  </Router>,
  document.getElementById("root")
);

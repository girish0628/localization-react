import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import useTranslation from "./components/customHooks/translations";
import Routes from "./components/routes";
import Header from "./components/Header";

export default function App() {
  const translation = useTranslation();

  return (
    <div className="App">
      <div class="centralized-app">
        <Router>
          <Header />
          <div
            style={{
              padding: "0 15px",
              height: "100vh",
              background: "#f7f7f7"
            }}
          >
            <div style={{ overflow: "auto" }}>
              <h4>React Localization Example</h4>
              <p>
                {translation.formatString(translation.dynamicValue, {
                  randomNumber: Math.random(),
                  date: new Date().getMilliseconds()
                })}
              </p>
              <p>
                <span style={{ fontSize: 10 }}>
                  Change the language to see dynamic value changing
                </span>
              </p>
            </div>

            <div style={{ marginTop: 50 }}>
              <Routes />
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

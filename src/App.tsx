import {lazy, Suspense, useState} from "react";
import "./App.css";
import "./reset.css";
import "./global.css";
import Head from "./head/";
import Technology from "./technology";
import EconomicModelApplicationScenario from "./economicModelApplicationScenario";
import Team from "./team";
import Strategic from "./strategic";
import Road from "./road";
import Join from "./join";
import classnames from "classnames";
import Foot from "./foot";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [widgetShow, setWidgetShow] = useState(true);
  const backend = lazy(() => import("./backend/Backend"));
  const marsApp = lazy(() => import("./Mars"));

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route exact path="/">
              <div
                className={classnames(
                  "App",
                  window.screen.width <= 1279 ? "m" : ""
                )}
              >
                <Head />
                <Technology />
                <EconomicModelApplicationScenario />
                <Team />
                <Strategic />
                <Road />
                <Join />
                <Foot />
                <div className="widget" style={{display: `${widgetShow ? "block" : "none"}`}}>
                  <div className="close">
                    <span onClick={() => setWidgetShow(!widgetShow)}>×</span>
                  </div>
                  <div id="crypto-widget-CoinList" data-design="classic" data-coins="ares-protocol"></div>
                </div>
              </div>
            </Route>

            <Route path="/admin" component={backend} />
            <Route path="/mars" component={marsApp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

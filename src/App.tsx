import { lazy, Suspense } from "react";
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
import Snow from "./snow";

function App() {
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
                <Snow />
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

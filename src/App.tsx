import React from "react";
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
import Foot from "./foot";

function App() {
  return (
    <div className="App">
      <Head />
      <Technology />
      <EconomicModelApplicationScenario />
      <Team />
      <Strategic />
      <Road />
      <Join />
      <Foot />
    </div>
  );
}

export default App;

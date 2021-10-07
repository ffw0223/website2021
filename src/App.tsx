import { Suspense, useEffect, useState } from "react";
import "./App.css";
import "./reset.css";
import "./global.css";
import Head from "./head/";
import { BrowserRouter, Route } from 'react-router-dom';
import Backend from "./backend/Backend";
import Supply from "./views/supply/Supply";
import Deposit from "./views/deposit/Deposit";
import Reference from "./views/reference/Reference";
import Community from "./views/community/Community";
import Footer from "./views/footer/Footer";
import { WsProvider } from "@polkadot/rpc-provider";
import { ApiPromise } from "@polkadot/api";

function App() {
  const [api, setAPI] = useState(null);

  const init = async () => {
    const provider = new WsProvider("wss://kusama-rpc.polkadot.io");
    const tempAPI: any = await ApiPromise.create({ provider });
    setAPI(tempAPI);
  };

  useEffect(() => {
    init()
  }, []);

  return (<>
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Route exact path="/">
          <div className="App">
            <Head api={api} />
            <Supply />
            <Deposit />
            <Reference api={api} />
            <Community />
            <Footer />
          </div>
        </Route>

        <Route exact path="/admin">
          <Backend />
        </Route>
      </Suspense>
    </BrowserRouter>

    <div id="mainModalContainer" />
  </>);
}

export default App;

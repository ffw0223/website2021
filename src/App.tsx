import { Suspense } from "react";
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

function App() {
  return (<>
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Route exact path="/">
          <div className="App">
            <Head />
            <Supply />
            <Deposit />
            <Reference />
            <Community />
            <Footer />
          </div>
        </Route>

        <Route exact path="/admin">
          <Backend />
        </Route>
      </Suspense>
    </BrowserRouter>
  </>);
}

export default App;

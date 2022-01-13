import { useEffect, useState } from "react";
import "./MarsApp.css";
import "./resetMars.css";
import "./globalMars.css";
import Head from "./head";
import Supply from "./views/supply/Supply";
import Deposit from "./views/deposit/Deposit";
import Reference from "./views/reference/Reference";
import Community from "./views/community/Community";
import Footer from "./views/footer/Footer";
import { WsProvider } from "@polkadot/rpc-provider";
import { ApiPromise } from "@polkadot/api";

// import { Keyring } from '@polkadot/api';
// import { u8aToHex, BN_ZERO } from '@polkadot/util';
// import type { DeriveContributions, DeriveOwnContributions } from '@polkadot/api-derive/types';
// import { useCall } from '@polkadot/react-hooks';
import type {ParaId } from '@polkadot/types/interfaces';
import { TypeRegistry } from '@polkadot/types';
import {u32} from "@polkadot/types";



function MarsApp(props: any) {
  const [api, setAPI] = useState(null);
  const [contributions, setContributions] = useState(null);
  // const keyring = new Keyring({ type: 'sr25519' });
  const paraId: ParaId = new u32(new TypeRegistry(), 2008)

  const fetchContributions = async () => {
    const result = await (await fetch("/contributions.json")).json();
    setContributions(result.contributions);
  };

  const init = async () => {
    fetchContributions();

    const provider = new WsProvider("wss://kusama-rpc.polkadot.io");
    const tempAPI: any = await ApiPromise.create({ provider });
    setAPI(tempAPI);
  };

  useEffect(() => {
    init();

    let link: any = document.getElementById("link1");
    link.href = "/marsfavicon.ico";

    link = document.getElementById("link2");
    link.href = "/marsfavicon.ico";

    link = document.getElementById("link3");
    link.href = "/marsfavicon.ico";

    document.title = "Mars - The only on-chain Oracle of Kusama Canary Network";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (<>
    <div className="marsApp">
      <Head
        api={api}
        contributions={contributions} paraId={paraId} />

      <Supply />
      <Deposit />
      <Reference api={api} />
      <Community />
      <Footer />
    </div>

    <div id="mainModalContainer" />
  </>);
}

export default MarsApp;

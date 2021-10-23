import { web3Accounts, web3Enable, web3FromAddress } from "@polkadot/extension-dapp";
import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { useTranslation } from "react-i18next";
import Alert from "./Alert";
import styles from "./Loading.module.scss";

const Loading = props => {
	return (<div className={styles.loadingModalLayout}>Loading polkadot.js...</div >);
};

export default Loading;
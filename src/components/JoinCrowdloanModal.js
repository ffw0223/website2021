import { web3Accounts, web3Enable, web3FromAddress, web3ListRpcProviders, web3UseRpcProvider } from "@polkadot/extension-dapp";
import BigNumber from "bignumber.js";
import { useState } from "react";
import { unmountComponentAtNode } from "react-dom";
import { useTranslation } from "react-i18next";
import styles from "./JoinCrowdloanModal.module.scss";

let theInput = null;

const JoinCrowdloanModal = props => {
	const api = props.api;
	const isConnected = Boolean(api);
	const { t } = useTranslation();
	const [accounts, setAccounts] = useState([]);
	const [account, setAccount] = useState(null);
	const [balance, setBalance] = useState(null);
	const [inputValue, setInputValue] = useState(new BigNumber(0));

	const handleConnect = async event => {
		const allInjected = await web3Enable("mars");
		const accounts = await web3Accounts({ ss58Format: 2 });
		setAccounts(accounts)
		setAccount(accounts[0]);

		const { data: balance } = await api.query.system.account(accounts[0].address);
		setBalance(balance.free)
	}

	const handleCancel = event => {
		unmountComponentAtNode(document.getElementById("mainModalContainer"));
	}

	const handleSubmit = async event => {
		const SENDER = account.address;
		const injector = await web3FromAddress(SENDER)
		api.tx.crowdloan.contribute(0, inputValue.toFixed(), null)
			.signAndSend(SENDER, { signer: injector.signer }, status => {
				if (status.isFinalized()) {
					unmountComponentAtNode(document.getElementById("mainModalContainer"));
				}
			});
	}

	const handleMax = event => {
		const value = new BigNumber(balance);
		setInputValue(value);
		if (theInput) {
			theInput.value = value.shiftedBy(-12).toNumber();
		}
	}

	const handleInput = event => {
		setInputValue(new BigNumber(event.target.value).shiftedBy(12));
	}

	// const init = async () => {
	// 	const provider = new WsProvider("wss://kusama-rpc.polkadot.io");
	// 	api = await ApiPromise.create({ provider });
	// 	setIsConnected(true);
	// };

	// useEffect(() => {
	// 	init();
	// }, []);

	return (<div className={styles.joinCrowdloanModalLayout}>
		<div className={styles.modal}>
			<div className={styles.modalLayout}>
				<div className={styles.closeButton} onClick={handleCancel}>⤫</div>

				<h3>{t("contributeNow")}</h3>

				{/* <div className={styles.lightButton}>{account.address.substr(0, 10) + "..."}</div> */}
				<div className={styles.content} >
					{account ? (<select className={styles.lightButton}>
						{accounts.map(item => (<option key={item.address} value={item.address}>{item.meta.name}</option>))}
					</select>) : (isConnected ? (<button
						className={styles.lightButton}
						disabled={!isConnected}
						onClick={handleConnect}>{t("connectPolkadotExtension")}</button>) : (<div className={styles.lightButton}>Loading Polkadot.js...</div>))}

					<div style={{ width: "100%" }}>
						<div className={styles.label}>{t("ksmTOContribute")}</div>

						<div style={{
							width: "100%",
							position: "relative"
						}}>
							<input type="number"
								ref={node => theInput = node}
								onChange={handleInput}
							/>

							<button
								className={styles.maxButton}
								disabled={!balance}
								onClick={handleMax}>{t("max")}</button>
						</div>
					</div>

					<div style={{ width: "100%" }}>
						<div className={styles.label}>{t("estimatedAMASRewards")}</div>
						<div className={styles.monitor}>{inputValue.shiftedBy(-12).multipliedBy(1000).toFixed()}</div>
					</div>

					<div style={{ width: "100%" }}>
						<div className={styles.label}>{t("email")}</div>
						<input />
					</div>

					<div className={styles.buttons}>
						<button
							className={styles.darkButton}
							disabled={inputValue.eq(0)}
							onClick={handleSubmit}>{t("submit")}</button>

						<button className={styles.darkButton} onClick={handleCancel}>{t("cancel")}</button>
					</div>
				</div>
			</div>

			<img className={styles.illustrationModal} src="/images/modal.png" />
		</div>

	</div >);
};

export default JoinCrowdloanModal;
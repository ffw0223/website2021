import { web3Accounts, web3Enable, web3FromAddress } from "@polkadot/extension-dapp";
import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import { useTranslation } from "react-i18next";
import Alert from "./Alert";
import styles from "./RewardsModal.module.scss";
import { stringToHex } from "@polkadot/util";
import Config from "../../Config";

const Web3 = require("web3");

const RewardsModal = props => {
	const api = props.api;
	const contributions = props.contributions
	const isConnected = Boolean(api);
	const { t } = useTranslation();
	const [accounts, setAccounts] = useState([]);
	const [account, setAccount] = useState(null);
	const [inputValue, setInputValue] = useState(new BigNumber(0));
	const [isContributor, setIsContributor] = useState(false);
	const [contributed, setContributed] = useState(new BigNumber(750000000000))

	const handleConnect = async event => {
		await web3Enable("mars");
		const accounts = await web3Accounts({ ss58Format: 2 });
		setAccounts(accounts)
		setAccount(accounts[0].address);
	}

	const handleChange = event => {
		setAccount(event.target.value);
	}

	const handleInput = event => {
		setInputValue(event.target.value)
	}

	const handleCancel = event => {
		props.onClose();
	}

	const handleSubmit = async event => {
		const injector = await web3FromAddress(account);
		const signRaw = injector.signer.signRaw;
		if (signRaw) {
			const signature = await signRaw({
				address: account,
				// data: stringToHex(inputValue),
				data: inputValue,
				type: "bytes"
			});
			const data = {
				ksm_address: account,
				eth_address: inputValue,
				sign_str: signature.signature
			}
			const result = await (await fetch(Config.baseMailAPI + Config.saveEthAddress, {
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ data })
			})).json();
			if (result.status === 1) {
				props.onClose();
				render(<Alert title={t("thanksForSupport")} content={t("thanksForSupportContent")} />, document.getElementById("mainModalContainer"));
			}
		}
	}

	useEffect(() => {
		if (!contributions) {
			return;
		}

		setIsContributor(false);

		for (let i = 0; i < contributions.length; i++) {
			if (contributions[i].who === account) {
				setIsContributor(true);
				setContributed(new BigNumber(contributions[i].contributed))
				break;
			}
		}
	}, [account]);


	return (<div className={styles.rewardsModalLayout}>
		<div className={styles.modal}>
			<div className={styles.modalLayout}>
				<div className={styles.closeButton} onClick={handleCancel}>⤫</div>

				<h3>{t("getRewards")}</h3>

				<div className={styles.desc}>{t("getRewardsDescription")}</div>

				<div className={styles.content} >
					{account ? (<select
						onChange={handleChange}
						className={styles.lightButton}>
						{accounts.map(item => (<option key={item.address} value={item.address}>{item.meta.name}</option>))}
					</select>) : (isConnected ? (<button
						className={styles.lightButton}
						disabled={!isConnected}
						onClick={handleConnect}>{t("connectPolkadotExtension")}</button>) : (<div className={styles.lightButton}>Loading Polkadot.js...</div>))}

					{isContributor ? (<div className={styles.descGreen}>{t("thanksContribution")}</div>) : (account ? ((<div className={styles.descRed}>{t("didntContribute")}</div>)) : null)}

					{isContributor && account && (<div className={styles.scoreBoard}>
						<div className={styles.scorePanel}>
							<div className={styles.scoreLabel}>{t("contribute")}</div>
							<div className={styles.number}>{contributed.shiftedBy(-12).toFixed()}&nbsp;KSM</div>
						</div>

						<div className={styles.scorePanel}>
							<div className={styles.scoreLabel}>{t("earned")}</div>
							<div className={styles.number}>{contributed.shiftedBy(-12).toFixed()}&nbsp;ARES</div>
						</div>
					</div>)}

					<div style={{ width: "100%" }}>
						<div className={styles.label}>{t("submitEthereumAddress")}</div>

						<input className={styles.addressInput} onChange={handleInput} />
					</div>

					<div className={styles.buttons}>
						<button
							className={styles.darkButton}
							disabled={!Web3.utils.isAddress(inputValue) || !isContributor}
							onClick={handleSubmit}>{t("submit")}</button>

						<button className={styles.darkButton} onClick={handleCancel}>{t("cancel")}</button>
					</div>
				</div>
			</div>
		</div>

	</div >);
};

export default RewardsModal;
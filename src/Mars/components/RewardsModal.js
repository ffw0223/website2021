import { web3Accounts, web3Enable, web3FromAddress } from "@polkadot/extension-dapp";
import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import { useTranslation } from "react-i18next";
import Alert from "./Alert";
import styles from "./RewardsModal.module.scss";


const RewardsModal = props => {
	const api = props.api;
	const contributions = props.contributions
	const isConnected = Boolean(api);
	const { t } = useTranslation();
	const [accounts, setAccounts] = useState([]);
	const [account, setAccount] = useState(null);
	const [inputValue, setInputValue] = useState(new BigNumber(0));
	const [isContributor, setIsContributor] = useState(false);

	const handleConnect = async event => {
		await web3Enable("mars");
		const accounts = await web3Accounts({ ss58Format: 2 });
		setAccounts(accounts)
		setAccount(accounts[0].address);

		const { data: balance } = await api.query.system.account(accounts[0].address);
	}

	const handleChange = event => {
		setAccount(event.target.value);
	}

	const handleCancel = event => {
		// unmountComponentAtNode(document.getElementById("mainModalContainer"));
		props.onClose();
	}

	const handleSubmit = async event => {
		const SENDER = account;
		const injector = await web3FromAddress(SENDER)
		api.tx.crowdloan.contribute(0, inputValue.toFixed(), null)
			.signAndSend(SENDER, { signer: injector.signer }, status => {
				if (status.isFinalized()) {
					// unmountComponentAtNode(document.getElementById("mainModalContainer"));
					props.onClose();
					render(<Alert title={t("thanksForSupport")} content={t("thanksForSupportContent")} />, document.getElementById("mainModalContainer"));
				}
			});
	}

	useEffect(() => {
		if (!contributions) {
			return;
		}

		setIsContributor(false);

		for (let i = 0; i < contributions.length; i++) {
			if (contributions[i].who === account) {
				setIsContributor(true);
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

					{isContributor && (<div className={styles.descGreen}>{t("thanksContribution")}</div>)}

					<div style={{ width: "100%" }}>
						<div className={styles.label}>{t("submitEthereumAddress")}</div>
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
		</div>

	</div >);
};

export default RewardsModal;
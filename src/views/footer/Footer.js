import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";
import debounce from "lodash.debounce";
import { render } from "react-dom";
import Alert from "../../components/Alert";
import Config from "../../Config";

const Footer = props => {
	const { t } = useTranslation();
	const [inputEmail, setInputEmail] = useState("");
	const [isValidMail, setIsValidMail] = useState(true);

	const checkMailAddress = event => {
		const re = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$")
		if (re.test(event.target.value)) {
			setIsValidMail(true);
			setInputEmail(event.target.value);
		} else {
			setIsValidMail(false);
		}
	}
	const handleInput = debounce(checkMailAddress, 1500);

	const handleSubmit = async event => {
		if (inputEmail) {
			const result = await (await fetch(Config.baseMailAPI + Config.subscribeAPI + "?zip_code=mars&email=" + inputEmail)).json();
			if (result.status) {
				render(<Alert title={t("thanksForSubscribing")} content={t("thanksForSubscribingContent")} />, document.getElementById("mainModalContainer"));
			} else {
				console.warn(result.message);
			}
		}
	}

	return (<section className={styles.footerLayout}>
		<div className={styles.content} id="footer">
			<div className={styles.card} style={{ width: "16em" }}>
				<h3>{t("aboutUs")}</h3>
				<div>{t("aboutUsDescription")}</div>
				<div><img src="/images/mail.png" alt="" />&nbsp;<a href="mailto:info@aresprotocol.io">info@aresprotocol.io</a></div>
			</div>

			<div className={styles.card} style={{
				textTransform: "capitalize"
			}}>
				<h3>{t("quickLinks")}</h3>

				<div>
					<a href="#Home">{t("home")}</a>
				</div>

				<div>
					<a href="#supply">{t("supply")}</a>
				</div>

				<div>
					<a href="#deposit">{t("deposit")}</a>
				</div>

				<div>
					<a href="#crowdloan">{t("crowdloan")}</a>
				</div>

				<div>
					<a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwss.mars.aresprotocol.io/#/explorer" target="_blank" rel="noreferrer">Apps</a>
				</div>
			</div>

			<div className={styles.card}>
				<h3>{t("resources")}</h3>

				<div>
					<a href="https://docs.aresprotocol.io/#/" target="_blank" rel="noreferrer">{t("documentation")}</a>
				</div>

				<div>
					<a href="https://etherscan.io/token/0x358aa737e033f34df7c54306960a38d09aabd523" target="_blank" rel="noreferrer">
						{t("blockchainExplore")}
					</a>
				</div>
			</div>

			<div className={styles.card}>
				<h3>{t("subscribe")}</h3>

				<div style={{ width: "19em" }}>{t("subscribeInfo")}</div>

				<div className={styles.inputContainer}>
					<input
						placeholder="name@company.com"
						className={styles.inputMail}
						onChange={handleInput} />

					<button
						disabled={!inputEmail || !isValidMail}
						className={styles.maxButton}
						onClick={handleSubmit}>{t("send")}</button>
				</div>

				{!isValidMail && (<div style={{
					fontSize: "1em",
					color: "#C50000"
				}}>{t("emailTip")}</div>)}
			</div>
		</div>

		<div className={styles.footer}>{t("copyright")}</div>
	</section >);
}

export default Footer;
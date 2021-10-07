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
				<div>{t("network")}</div>
				<div>{t("supply")}</div>
				<div>{t("deposit")}</div>
				<div>{t("crowdloan")}</div>
				<div>Apps</div>
			</div>

			<div className={styles.card}>
				<h3>{t("resources")}</h3>
				<div>{t("documentation")}</div>
				<div>{t("blockchainExplore")}</div>
				<div>Medium</div>
			</div>

			<div className={styles.card}>
				<h3>{t("subscribe")}</h3>

				<div style={{ width: "19em" }}>{t("subscribeInfo")}</div>

				<div className={styles.inputContainer}>
					<input
						className={styles.inputMail}
						onChange={handleInput} />

					<button
						disabled={!inputEmail || !isValidMail}
						className={styles.maxButton}
						onClick={handleSubmit}>{t("send")}</button>
				</div>

				{!isValidMail && (<div style={{ fontSize: "1em" }}>{t("emailTip")}</div>)}
			</div>
		</div>

		<div className={styles.footer}>{t("copyright")}</div>
	</section >);
}

export default Footer;
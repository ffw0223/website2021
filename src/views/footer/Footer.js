import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

const Footer = props => {
	const { t } = useTranslation();

	return (<section className={styles.footerLayout}>
		<div className={styles.content} id="footer">
			<div className={styles.card} style={{ maxWidth: "405px" }}>
				<h3>{t("aboutUs")}</h3>
				<div>{t("aboutUsDescription")}</div>
				<div><img src="/images/mail.png" />&nbsp;<a href="mailto:info@aresprotocol.io">info@aresprotocol.io</a><a href="#Home">adfds</a></div>
			</div>

			<div className={styles.card}>
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
				<div>{t("subscribeInfo")}</div>
			</div>
		</div>

		<div className={styles.footer}>{t("copyright")}</div>
	</section >);
}

export default Footer;
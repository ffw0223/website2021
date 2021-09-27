import { useTranslation } from "react-i18next";
import styles from "./Reference.module.scss";
import '../../../node_modules/react-vis/dist/style.css';

const Reference = props => {
	const { t } = useTranslation();

	return (<section className={styles.referenceLayout} id="crowdloan">
		<h2>{t("references")}&nbsp;$AMAS</h2>
		<div className={styles.description}>{t("referenceDescription")}</div>

		<div className={styles.content}>
			<div className={styles.buttonBlock}>
				<img src="/images/thumb2.png" height="256px" />
				<button className={styles.darkButton}>{t("joinCrowdloan")}</button>
				<a
					href="https://aresprotocollab.medium.com/the-canary-network-of-ares-protocol-mars-announced-auction-strategy-crowdloaning-specification-a1e66f74b985"
					target="_blank">
					<div className={styles.lightButton}>{t("learnMore")}</div>
				</a>
			</div>

			<div className={styles.monitor}>
				<div className={styles.monitorOutline}>
					<div className={styles.monitorInline}>
						<table className={styles.table}>
							<thead>
								<tr style={{ backgroundColor: "white" }}>
									<th>{t("references")}</th>
									<th>{t("specification")}</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td>{t("slotDuration")}</td>
									<td>48 Weeks</td>
								</tr>

								<tr style={{ backgroundColor: "white" }}>
									<td>{t("rewardsRatio")}</td>
									<td>1KSM: 1000 AMAS</td>
								</tr>

								<tr>
									<td>{t("totalToken")}</td>
									<td>1 000 000 000</td>
								</tr>

								<tr style={{ backgroundColor: "white" }}>
									<td>{t("tokenSymbol")}</td>
									<td>$AMAS</td>
								</tr>

								<tr>
									<td>{t("rewardRedemption")}</td>
									<td>{t("rewardRedemptionDescription")}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<img src="/images/laptop.png" style={{
					position: "relative",
					top: "-15px",
					width: "100%"
				}} />
			</div>
		</div>
	</section>);
};

export default Reference;
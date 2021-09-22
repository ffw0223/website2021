import { useTranslation } from "react-i18next";
import styles from "./Reference.module.scss";
import { XYPlot, LineSeries, RadialChart } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

const Reference = props => {
	const { t } = useTranslation();
	const theNumber = "1000000000";
	const myData = [{ angle: 1, radius: 10, innerRadius: 5 }, { angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20 }, { angle: 5, radius: 5, label: 'Alt Label' }, { angle: 3, radius: 14 }, { angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class' }];;

	return (<section className={styles.referenceLayout}>
		<h2>{t("references")}&nbsp;$AMAS</h2>
		<div className={styles.description}>{t("referenceDescription")}</div>

		<div className={styles.content}>
			<div className={styles.buttonBlock}>
				<button className={styles.darkButton}>{t("joinCrowdloan")}</button>
				<button className={styles.lightButton}>{t("learnMore")}</button>
			</div>

			<div>
				<div style={{
					background: "linear-gradient(180deg, #F37B53 0%, #FFB980 100%)",
					boxShadow: "7px 21px 15px rgba(187, 25, 0, 0.2)",
					padding: "15px 15px 0 15px",
					borderRadius: "15px 15px 0 0"
				}}>
					<div style={{
						background: "#E5E9EB",
						borderRadius: "15px 15px 0 0",
						padding: "40px 83px"
					}}>
						<table style={{ maxWidth: "764px" }}>
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
									<td>Rewards Ratio</td>
									<td>1KSM: 1000 AMAS</td>
								</tr>

								<tr>
									<td>Total Token</td>
									<td>1 000 000 000</td>
								</tr>

								<tr style={{ backgroundColor: "white" }}>
									<td>Token Symbol</td>
									<td>$AMAS</td>
								</tr>

								<tr>
									<td>Reward redemption</td>
									<td>On-line exchange / Proportional exchange for Ares</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>);
};

export default Reference;
import { useTranslation } from "react-i18next";
import styles from "./Deposit.module.scss";
import { XYPlot, LineSeries, RadialChart } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

const Deposit = props => {
	const { t } = useTranslation();
	const theNumber = "1000000000";
	const myData = [{ angle: 1, radius: 10, innerRadius: 5 }, { angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20 }, { angle: 5, radius: 5, label: 'Alt Label' }, { angle: 3, radius: 14 }, { angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class' }];;

	return (<section className={styles.depositLayout}>
		<h2>{t("depositInterest")}</h2>
		<div className={styles.description}>{t("depositDescription")}</div>

		<div className={styles.content}>
			<div className={styles.card}>
				<h3>{t("commonRewards")}</h3>
				<div className={styles.label}>$AMAS</div>
				<div className={styles.primaryLabel}>1:1000</div>
				<div className={styles.info}>Support 1 $KSM to gain 1000 $AMAS</div>
			</div>

			<div className={styles.card}>
				<h3>{t("teamRewards")}</h3>
				<div className={styles.label}>$AMAS</div>
				<div className={styles.primaryLabel}>20% Bonus</div>
				<div className={styles.info}>Support 1 $KSM to gain 1200 $AMAS</div>
			</div>

			<div className={styles.card}>
				<h3>{t("invitationRewards")}</h3>
				<div className={styles.label}>$AMAS</div>
				<div className={styles.primaryLabel}>3% Bonus</div>
				<div className={styles.info}>Invite others to get 3% bonus of $AMAS</div>
			</div>
		</div>
	</section>);
};

export default Deposit;
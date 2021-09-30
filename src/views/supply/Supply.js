import { useTranslation } from "react-i18next";
import styles from "./Supply.module.scss";
import { RadialChart } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

const Supply = props => {
	const { t } = useTranslation();
	const theNumber = "1000000000";
	const myData = [
		{ angle: 30, radius: 3.3, innerRadius: 2 },
		{ angle: 2, radius: 3.5, innerRadius: 2 },
		{ angle: 20, radius: 3, innerRadius: 2 },
		{ angle: 5, radius: 3, innerRadius: 2 },
		{ angle: 5, radius: 3, innerRadius: 2 },
		{ angle: 20, radius: 3, innerRadius: 2 },
		{ angle: 20, radius: 3, innerRadius: 2 },
		{ angle: 2, radius: 3.5, innerRadius: 2 },
	];

	return (<section className={styles.supplyLayout} id="supply">
		<h2>{t("supplyTitle")}</h2>
		<div className={styles.description}>{t("supplyDescription")}</div>

		<div className={styles.content}>
			<div className={styles.leftBlock}>
				<div className={styles.score}>
					{theNumber.split("").map(letter => (<div className={styles.letter}>{letter}</div>))}
				</div>

				<div className={styles.infoBlock}>{t("supplyInfo")}</div>
			</div>

			<div style={{
				scale: "0.9",
				position: "relative"
			}}>
				<RadialChart
					data={myData}
					width={380}
					height={380}
					showLabels={true}
					colorRange={['#ffffff', '#EA5B34', '#FFE0D5', "#FFCFC0", "#FFC1AC", "#F9A285", "#F37B53", '#ffffff']} />

				<div className={styles.majorLabel} style={{
					right: "-2rem",
					top: "2rem"
				}}>
					<div>{t("PLOSupply")}</div>
					<div>30%</div>
				</div>

				<div className={styles.thinLabel} style={{
					right: "2rem",
					bottom: 0
				}}>
					<div className={styles.label}>{t("PLOReserve")}</div>
					<div className={styles.subLabel}>20%</div>
				</div>

				<div className={styles.thinLabel} style={{
					right: "10rem",
					bottom: "-1rem"
				}}>
					<div className={styles.label}>{t("marketing")}</div>
					<div className={styles.subLabel}>5%</div>
				</div>

				<div className={styles.thinLabel} style={{
					left: "5rem",
					bottom: "0rem"
				}}>
					<div className={styles.label}>{t("devFund")}</div>
					<div className={styles.subLabel}>5%</div>
				</div>

				<div className={styles.thinLabel} style={{
					left: "-2.5rem",
					bottom: "5rem"
				}}>
					<div className={styles.label}>{t("ecoSystemDevelopment")}</div>
					<div className={styles.subLabel}>20%</div>
				</div>

				<div className={styles.thinLabel} style={{
					left: "-1rem",
					top: "4rem"
				}}>
					<div className={styles.label}>{t("liquidityMining")}</div>
					<div className={styles.subLabel}>20%</div>
				</div>
			</div>
		</div>
	</section>);
};

export default Supply
import { useTranslation } from "react-i18next";
import styles from "./Supply.module.scss";
import { XYPlot, LineSeries, RadialChart } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

const Supply = props => {
	const { t } = useTranslation();
	const theNumber = "1000000000";
	const myData = [
		{ angle: 30, radius: 3.5, innerRadius: 2, label: 'PLO Supply', subLabel: '30%' },
		{ angle: 20, radius: 3, innerRadius: 2, label: 'PLO Reserve', subLabel: '20%' },
		{ angle: 5, radius: 3, innerRadius: 2, label: "Marketing", subLabel: "5%" },
		{ angle: 5, radius: 3, innerRadius: 2, label: "Dev-Fund", subLabel: "5%" },
		{ angle: 20, radius: 3, innerRadius: 2, label: "Eco-system Development", subLabel: "20%" },
		{ angle: 20, radius: 3, innerRadius: 2, label: "Liquidity Mining", subLabel: "20%" },
		// { angle: 1, radius: 10, innerRadius: 5 },
		// { angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20, showLabels: true },
		// { angle: 5, radius: 5, label: 'Alt Label' },
		// { angle: 3, radius: 14 },
		// { angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class' }
	];

	return (<section className={styles.supplyLayout}>
		<h2>{t("supplyTitle")}</h2>
		<div className={styles.description}>{t("supplyDescription")}</div>

		<div className={styles.content}>
			<div style={{ width: "50%" }}>
				<div className={styles.score}>
					{theNumber.split("").map(letter => (<div className={styles.letter}>{letter}</div>))}
				</div>

				<div className={styles.infoBlock}>{t("supplyInfo")}</div>
			</div>

			<div>
				<RadialChart
					data={myData}
					width={400}
					height={400}
					showLabels={true}
					colorRange={['#FFE0D5', '#EA5B34', "#FFCFC0", "#FFC1AC", "#F9A285", "#F37B53"]}
					padAngle={0.05}/>
			</div>
		</div>
	</section>);
};

export default Supply
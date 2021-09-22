import { useTranslation } from "react-i18next";
import styles from "./Supply.module.scss";
import { XYPlot, LineSeries, RadialChart } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

const Supply = props => {
	const { t } = useTranslation();
	const theNumber = "1000000000";
	const myData = [{ angle: 1, radius: 10, innerRadius: 5 }, { angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20 }, { angle: 5, radius: 5, label: 'Alt Label' }, { angle: 3, radius: 14 }, { angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class' }];;

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
					width={300}
					height={300} />
			</div>
		</div>
	</section>);
};

export default Supply
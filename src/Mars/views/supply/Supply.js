import { useTranslation } from "react-i18next";
import styles from "./Supply.module.scss";
import { RadialChart } from 'react-vis';
import '../../../../node_modules/react-vis/dist/style.css';
import { useState } from "react";

const initData = [
	{ theta: 6, angle: 0, radius: 3.3, innerRadius: 2 },
	{ theta: 0, angle: 30, radius: 3, innerRadius: 2, label: "PLOSupply", subLabel: "30%", right: "-2rem", top: "0rem", c: "#EA5B34", textColor: "#ffffff" },
	{ theta: 1, angle: 20, radius: 3, innerRadius: 2, label: "PLOReserve", subLabel: "20%", right: "-2rem", bottom: "0rem", c: "#F37B53", textColor: "#ffffff" },
	{ theta: 2, angle: 5, radius: 3, innerRadius: 2, label: "marketing", subLabel: "5%", right: "8rem", bottom: "-3rem", c: "#F9A285", textColor: "#ffffff" },
	{ theta: 3, angle: 5, radius: 3, innerRadius: 2, label: "devFund", subLabel: "5%", left: "1rem", bottom: "-1rem", c: "#FFC1AC", textColor: "#565656" },
	{ theta: 4, angle: 20, radius: 3, innerRadius: 2, label: "ecoSystemDevelopment", subLabel: "20%", left: "-6rem", bottom: "5rem", c: "#FFCFC0", textColor: "#565656" },
	{ theta: 5, angle: 20, radius: 3, innerRadius: 2, label: "liquidityMining", subLabel: "20%", left: "-4rem", top: "1.5rem", c: "#FFE0D5", textColor: "#565656" }
];

const Supply = props => {
	const { t } = useTranslation();
	const theNumber = "1000000000";
	const [data, setData] = useState(initData)
	const [currentData, setCurrentData] = useState(null);
	const [currentDataIndex, setCurrentDataIndex] = useState(-1);

	const handleMouseOver = value => {
		const theta = value.theta;
		const theData = initData.find((data, index) => {
			if (data.theta === theta && data.theta !== 6) {
				setCurrentDataIndex(index);
				return true;
			} else {
				return false;
			}
		});
		theData.radius = 3.3;
		setCurrentData(theData);
		setData([...initData]);
	}

	const handleMouseOut = () => {
		currentData.radius = 3;
		setData([...initData]);
		setCurrentDataIndex(-1);
		setCurrentData(null);
	}

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

			<div className={styles.chartBlock}>
				<RadialChart
					data={initData}
					width={380}
					height={380}
					showLabels={false}
					colorRange={['#FFE0D5', "#ffffff", "#FFCFC0", "#FFC1AC", "#F9A285", '#F37B53', "#EA5B34"]}
					onValueMouseOver={handleMouseOver}
					onSeriesMouseOut={handleMouseOut} />

				{data && data.map((d, index) => {
					if (index === 0) {
						return (<></>);
					}

					return (<div
						className={styles.thinLabel}
						style={{
							left: d.left,
							bottom: d.bottom,
							right: d.right,
							top: d.top,
							background: index === currentDataIndex ? d.c : "none",
							boxShadow: index === currentDataIndex ? "0px 1px 1px rgba(135, 41, 0, 1)" : "none",
							color: index === currentDataIndex ? d.textColor : "#565656"
						}}>
						<div className={styles.label}>{t(d.label)}</div>
						<div
							className={styles.subLabel}
							style={{
								background: index === currentDataIndex ? "none" : "#e5e9eb"
							}}>{d.subLabel}</div>
					</div>)
				})}
			</div>
		</div>
	</section >);
};

export default Supply
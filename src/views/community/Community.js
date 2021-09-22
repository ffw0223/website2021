import { useTranslation } from "react-i18next";
import styles from "./Community.module.scss";

const Community = props => {
	const { t } = useTranslation();

	return (<section className={styles.communityLayout}>
		<h2>{t("joinCommunity")}</h2>
		<div className={styles.description}>{t("communityDescription")}</div>

		<div className={styles.content}>

		</div>
	</section>);
};

export default Community;
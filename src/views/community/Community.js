import { useTranslation } from "react-i18next";
import styles from "./Community.module.scss";

const Community = props => {
	const { t } = useTranslation();

	return (<section className={styles.communityLayout} id="community">
		<h2>{t("joinCommunity")}</h2>
		<div className={styles.description}>{t("communityDescription")}</div>

		<div className={styles.content}>
			<div className={styles.img}>
				<img src="/images/tg.png" />
			</div>

			<div className={styles.img}>
				<img src="/images/t.png" />
			</div>

			<div className={styles.img}>
				<img src="/images/f.png" />
			</div>

			<div className={styles.img}>
				<img src="/images/ro.png" />
			</div>

			<div className={styles.img}>
				<img src="/images/reddit.png" />
			</div>

			<div className={styles.img}>
				<img src="/images/pop.png" />
			</div>

			<div className={styles.img}>
				<img src="/images/github.png" />
			</div>

			<div className={styles.img}>
				<img src="/images/ins.png" />
			</div>

			<div className={styles.img}>
				<img src="/images/youtube.png" />
			</div>
		</div>
	</section>);
};

export default Community;
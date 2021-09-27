import { useTranslation } from "react-i18next";
import styles from "./Community.module.scss";

const Community = props => {
	const { t } = useTranslation();

	return (<section className={styles.communityLayout} id="community">
		<h2>{t("joinCommunity")}</h2>
		<div className={styles.description}>{t("communityDescription")}</div>

		<div className={styles.content}>
			<div className={styles.img}>
				<a href="https://t.me/aresprotocol" target="_blank">
					<img src="/images/tg.png" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://twitter.com/AresProtocolLab" target="_blank">
					<img src="/images/t.png" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://www.facebook.com/aresprotocollab" target="_blank">
					<img src="/images/f.png" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://discord.gg/MKE4yX4h" target="_blank">
					<img src="/images/ro.png" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://www.reddit.com/r/AresProtocolLabs" target="_blank">
					<img src="/images/reddit.png" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://aresprotocollab.medium.com" target="_blank">
					<img src="/images/pop.png" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://github.com/aresprotocols" target="_blank">
					<img src="/images/github.png" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://www.instagram.com/aresprotocollab" target="_blank">
					<img src="/images/ins.png" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://www.youtube.com/channel/UCgwY4NwkoP8Hx1Fqmp_rJUw" target="_blank">
					<img src="/images/youtube.png" />
				</a>
			</div>
		</div>
	</section>);
};

export default Community;
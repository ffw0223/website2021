import { useTranslation } from "react-i18next";
import styles from "./Community.module.scss";

const Community = props => {
	const { t } = useTranslation();

	return (<section className={styles.communityLayout} id="community">
		<h2>{t("joinCommunity")}</h2>
		<div className={styles.description}>{t("communityDescription")}</div>

		<div className={styles.content}>
			<div className={styles.img}>
				<a href="https://t.me/aresprotocol" target="_blank" rel="noreferrer">
					<img src="/images/tg.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://twitter.com/AresProtocolLab" target="_blank" rel="noreferrer">
					<img src="/images/t.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://www.facebook.com/aresprotocollab" target="_blank" rel="noreferrer">
					<img src="/images/f.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://discord.gg/MKE4yX4h" target="_blank" rel="noreferrer">
					<img src="/images/ro.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://www.reddit.com/r/AresProtocolLabs" target="_blank" rel="noreferrer">
					<img src="/images/reddit.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://aresprotocollab.medium.com" target="_blank" rel="noreferrer">
					<img src="/images/pop.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://github.com/aresprotocols" target="_blank" rel="noreferrer">
					<img src="/images/github.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://www.instagram.com/aresprotocollab" target="_blank" rel="noreferrer">
					<img src="/images/ins.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://www.youtube.com/channel/UCgwY4NwkoP8Hx1Fqmp_rJUw" target="_blank" rel="noreferrer">
					<img src="/images/youtube.png" alt="" />
				</a>
			</div>
		</div>
	</section>);
};

export default Community;
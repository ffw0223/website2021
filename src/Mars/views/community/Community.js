import { render } from "react-dom";
import { useTranslation } from "react-i18next";
import TelegramList from "../../components/TelegramList";
import styles from "./Community.module.scss";

const Community = props => {
	const { t } = useTranslation();

	const handleClickTelegram = event => {
		// render(<Alert title={t("thanksForSupport")} content={t("thanksForSupportContent")} />, document.getElementById("mainModalContainer"));
		render(<TelegramList />, document.getElementById("mainModalContainer"))
	}

	return (<section className={styles.communityLayout} id="community">
		<h2>{t("joinCommunity")}</h2>
		<div className={styles.description}>{t("communityDescription")}</div>

		<div className={styles.content}>
			<div className={styles.img}>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
				<a onClick={handleClickTelegram}>
					<img src="/images/mars/tg.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://twitter.com/AresProtocolLab" target="_blank" rel="noreferrer">
					<img src="/images/mars/t.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://www.facebook.com/aresprotocollab" target="_blank" rel="noreferrer">
					<img src="/images/mars/f.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://discord.gg/cqduK4ZNaY" target="_blank" rel="noreferrer">
					<img src="/images/mars/ro.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://www.reddit.com/r/AresProtocolLabs" target="_blank" rel="noreferrer">
					<img src="/images/mars/reddit.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://aresprotocollab.medium.com" target="_blank" rel="noreferrer">
					<img src="/images/mars/pop.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://github.com/aresprotocols" target="_blank" rel="noreferrer">
					<img src="/images/mars/github.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://www.instagram.com/aresprotocollab" target="_blank" rel="noreferrer">
					<img src="/images/mars/ins.png" alt="" />
				</a>
			</div>

			<div className={styles.img}>
				<a href="https://www.youtube.com/channel/UCgwY4NwkoP8Hx1Fqmp_rJUw" target="_blank" rel="noreferrer">
					<img src="/images/mars/youtube.png" alt="" />
				</a>
			</div>
		</div>
	</section>);
};

export default Community;

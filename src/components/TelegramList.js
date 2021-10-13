import { unmountComponentAtNode } from "react-dom";
import { useTranslation } from "react-i18next";
import styles from "./TelegramList.module.scss"

const TelegramItem = props => {
	const { t } = useTranslation();

	return (<div className={styles.telegramItemLayout}>
		<img src={props.icon} />
		<a href={props.url} target="_blank" rel="noreferrer">
			<div className={styles.label}>{props.label}&nbsp;{t("community")}</div>
		</a>
	</div>);
}

const TelegramList = props => {
	const { t } = useTranslation();

	const handleCancel = event => {
		unmountComponentAtNode(document.getElementById("mainModalContainer"));
	}

	return (<div className={styles.telegramListLayout}>
		<div className={styles.modal}>
			<div className={styles.modalLayout}>
				<div className={styles.closeButton} onClick={handleCancel}>⤫</div>

				<h3>{t("communitiesByCountry")}</h3>

				<div className={styles.description}>{t("communitiesByCountryDescription")}</div>

				<div className={styles.content}>
					<TelegramItem icon="/images/0000-35.png" label={t("official")} url="http://myzaker.com" />
					<TelegramItem icon="/images/RU-36.png" label={t("russia")} url="https://t.me/AresProtocol_RussianCommunity" />
					<TelegramItem icon="/images/CN.png" label={t("china")} url="http://t.me/AresProtocolChina" />
					<TelegramItem icon="/images/UK.png" label={t("ukraine")} url="https://t.me/AresProtocol_UkrainianCommunity" />
					<TelegramItem icon="/images/ES.png" label={t("spanish")} url="https://t.me/aresprotocollab" />
					<TelegramItem icon="/images/KO.png" label={t("korea")} url="https://t.me/AresProtocol_KoreanCommunity" />
					<TelegramItem icon="/images/Italia.png" label={t("italy")} url="https://t.me/AresProtocolItalian" />
					<TelegramItem icon="/images/Armenia.png" label={t("armenia")} url="https://t.me/AresProtocol_Armenian" />
					<TelegramItem icon="/images/Iran.png" label={t("persian")} url="https://t.me/AresProtocolPersian" />
					<TelegramItem icon="/images/JP.png" label={t("japan")} url="https://t.me/AresProtocol_JapaneseCommunity" />
					<TelegramItem icon="/images/Israel-41.png" label={t("israel")} url="https://t.me/AresProtocolIsrale" />
					<TelegramItem icon="/images/Giorgia.png" label={t("georgia")} url="http://t.me/AresProtocolGeorgia" />
				</div>
			</div>
		</div>
	</div>);
};

export default TelegramList;
import { unmountComponentAtNode } from "react-dom";
import styles from "./Alert.module.scss"

const Alert = props => {
	const handleCancel = event => {
		unmountComponentAtNode(document.getElementById("mainModalContainer"));
	}

	return (<div className={styles.alertLayout}>
		<div className={styles.modal}>
			<div className={styles.modalLayout}>
				<div className={styles.closeButton} onClick={handleCancel}>⤫</div>

				<h3>{props.title}</h3>

				<div className={styles.content}>{props.content}</div>
			</div>
		</div>
	</div>);
};

export default Alert;
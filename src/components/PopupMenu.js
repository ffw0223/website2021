import { useEffect } from "react";
import { unmountComponentAtNode } from "react-dom";
import styles from "./PopupMenu.module.scss";

const PopupMenu = props => {
	const handleClickItem = event => {
		unmountComponentAtNode(document.getElementById("modalContainer"));
		return props.menuItems[parseInt(event.target.id)].handle()
	};

	useEffect(() => {
		if (props.menuItems) {
			setTimeout(() => {
				unmountComponentAtNode(document.getElementById("modalContainer"));
				return props.hide();
			}, 3000);
		}
	}, [props.menuItems])

	return (<div className={styles.popupMenuLayout} style={{
		left: props.left + "px",
		top: props.top + "px"
	}}>
		{props.menuItems.map((menuItem, index) => (<div className={styles.item} id={index} key={menuItem.title} onClick={handleClickItem}>{menuItem.title}</div>))}
	</div>);
}

export default PopupMenu;
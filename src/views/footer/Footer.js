import styles from "./Footer.module.scss";

const Footer = props => {
	return (<section className={styles.footerLayout}>
		<div className={styles.content}>
			<div className={styles.card} style={{ maxWidth: "405px" }}>
				<h3>About Us</h3>
				<div>Mars is a canary network built by Ares Protocol on Kusama. It will conduct some contract call tests on asset prices.</div>
				<div>info@aresprotocol.io</div>
			</div>

			<div className={styles.card}>
				<h3>Quick Links</h3>
				<div>Ares Protocol</div>
				<div>Supply</div>
				<div>Deposit</div>
				<div>Crowdloan</div>
				<div>Apps</div>
			</div>

			<div className={styles.card}>
				<h3>Resources</h3>
				<div>Documentation</div>
				<div>Blockchain Explore</div>
				<div>Medium</div>
			</div>

			<div className={styles.card}>
				<h3>Subscribe</h3>
				<div>Subscribe and receive all news and information about Mars.</div>
			</div>
		</div>

		<div className={styles.footer}>Copyright © 2021.The Ares Protocol All rights reserved.</div>
	</section>);
}

export default Footer;
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.contact}>
				<ul className={styles.list}>
					<li>Email: </li>
					<li>Phone: </li>
					<li>Mailing Address: </li>
				</ul>
				<ul className={styles.list}>
					{/* make these below into links */}
					<li>LinkedIn</li>
					<li>Github</li>
					<li>Medium</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;

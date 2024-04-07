import styles from "../cssmodules/Banner.module.css";
function Banner() {
	return (
		<div className={styles.banner__cnt}>
			<div className={styles.bannerimg__cnt}>
				<i className={`${"ri-lightbulb-flash-line"} ${styles.ideaicon}`}></i>
				<div className={`${styles.rect} ${styles.rect1}`}>
					<p>
						<i className="ri-check-line"></i> 17
					</p>
				</div>
				<div className={`${styles.rect} ${styles.rect2}`}>
					<p>🚀 &nbsp;17</p>
				</div>
				<div className={`${styles.rect} ${styles.rect3}`}>
					<p>Answered</p>
				</div>
				<i className={`${"ri-message-3-line"} ${styles.chaticon}`}></i>
			</div>
		</div>
	);
}

export default Banner;

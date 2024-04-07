import styles from "../cssmodules/Community.module.css";
function Community() {
	return (
		<>
			<h2 className={styles.title}>Solve any Idea at your own pace</h2>
			<p className={styles.desc1}>
				Dedicated space for your community to come together, network, share ideas, knowledge and have open ended conversation
			</p>
			<div className={styles.container}>
				<div className={styles.box1}>
					<img src="/assets/com11.jpg" alt="promotion image 1" />
					<div className={styles.line1}></div>
				</div>
				<div className={styles.box2}>
					<img src="/assets/com12.jpg" alt="promotion image 2" />
					{/* <div className={styles.line2}></div> */}
					{/* <div className={styles.line3}></div> */}
				</div>
				<div className={styles.box3}>
					<img src="/assets/com13.jpg" alt="promotion image 3" />
					<div className={styles.line4}></div>
				</div>
			</div>
		</>
	);
}

export default Community;

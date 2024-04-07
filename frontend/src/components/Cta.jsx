import styles from "../cssmodules/Cta.module.css";
function Cta() {
	return (
		<>
			<div className={styles.top}>
				<div className={styles.left}>
					<h2>
						Manage your <span>Project</span> From Your <span>Team</span>
					</h2>
					<button>Get Started</button>
				</div>
				<div className={styles.right}>
					<div className={`${styles.box1} ${styles.box}`}></div>
					<div className={`${styles.box2} ${styles.box}`}></div>
					<div className={`${styles.box3} ${styles.box}`}></div>
					<div className={`${styles.box4} ${styles.box}`}></div>
				</div>
			</div>
			<div className={styles.bottom}>
				<h2>Why This Platform</h2>
				<div className={styles.cards_container}>
					<div className={`${styles.cards} ${styles.card1}`}>
						<div className={`${styles.imgcnt} ${styles.img1}`}>
							<div className="imgtitle">
								<h3>Performance Analytics</h3>
							</div>
						</div>
						<div className={styles.txtcnt}>
							<ul>
								<li>Real Time Analysis</li>
								<li>Live Performance Analysis</li>
								<li>Improvement Guide</li>
								<li>Do&apos;s & Don&apos;t</li>
								<li>User&apos;s Feedback</li>
							</ul>
						</div>
					</div>
					<div className={`${styles.cards} ${styles.card1}`}>
						<div className={`${styles.imgcnt} ${styles.img2}`}>
							<div className="imgtitle">
								<h3>
									Innovative <br />
									Ideas
								</h3>
							</div>
						</div>
						<div className={styles.txtcnt}>
							<ul>
								<li>Idea Pitching</li>
								<li>Knowledge Sharing</li>
								<li>Innovation</li>
								<li>Collaborative Projects</li>
								<li>Working with team</li>
							</ul>
						</div>
					</div>
					<div className={`${styles.cards} ${styles.card1}`}>
						<div className={`${styles.imgcnt} ${styles.img3}`}>
							<div className="imgtitle">
								<h3>Social Networking</h3>
							</div>
						</div>
						<div className={styles.txtcnt}>
							<ul>
								<li>Collaboration</li>
								<li>Community Buildup</li>
								<li>Networking</li>
								<li>Growth</li>
								<li>User&apos;s Feedback</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Cta;

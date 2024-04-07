import styles from "../cssmodules/Header.module.css";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
function Header() {
	return (
		<>
			<header className={styles.hero}>
				<Navbar />
				<main className={styles.hero__title}>
					<div className={styles.heading__1}>
						<i className={`${"ri-checkbox-circle-fill"} ${styles.check} ${styles.check1}`}></i>
						<div className={styles.rect}>
							<p>Select Idea</p>
						</div>
						<div className={styles.line1}></div>
						<h1 className={styles.title1}>Knowledge</h1>
					</div>
					<div className={styles.heading__1}>
						<i className={`${"ri-checkbox-circle-fill"} ${styles.check} ${styles.check2}`}></i>
						<h1 className={styles.title2}>Exchange</h1>
						<div className={styles.line2}></div>
						<div className={styles.rect}>
							<p>Solve</p>
						</div>
						<div className={styles.line2}></div>
						<div className={styles.rect}>
							<p>Showcase</p>
						</div>
					</div>
					<div className={styles.heading__1}>
						<i className={`${"ri-checkbox-circle-fill"} ${styles.check} ${styles.check3}`}></i>
						<div className={styles.rect}>
							<p>Get Recognition</p>
						</div>
						<div className={styles.line1}></div>
						<h1 className={styles.title1}>Platform</h1>
					</div>
				</main>
				<Banner />
				<div className={styles.bannertxt}>
					<h2>Dedicated Space for Conversation</h2>
					<p>
						Unlock the Power of Cross-University Collaboration! A dedicated space for students to connect, share ideas, and ignite
						innovation.
					</p>
					<button>Explore Ideas &rarr;</button>
				</div>
			</header>
		</>
	);
}

export default Header;

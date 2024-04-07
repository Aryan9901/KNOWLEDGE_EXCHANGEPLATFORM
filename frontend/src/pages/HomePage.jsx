import styles from "../cssmodules/HomePage.module.css";
import Header from "../components/Header";
import Features from "../components/Features";
import Community from "../components/Community";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

function HomePage() {
	return (
		<div className={styles.homepage}>
			<Header />
			<section className={styles.features}>
				<Features />
			</section>
			<section className={styles.community}>
				<Community />
			</section>
			<section className={styles.cta}>
				<Cta />
			</section>
			<Footer />
		</div>
	);
}

export default HomePage;

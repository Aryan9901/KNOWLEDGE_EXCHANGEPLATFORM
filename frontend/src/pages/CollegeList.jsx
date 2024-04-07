import Colleges from "../components/Colleges";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../cssmodules/CollegeList.module.css";

function CollegeList() {
	return (
		<>
			<header className={styles.header}>
				<Navbar />
			</header>
			<Colleges />
			<Footer />
		</>
	);
}

export default CollegeList;

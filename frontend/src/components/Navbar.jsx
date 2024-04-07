import { useState } from "react";

import styles from "../cssmodules/Navbar.module.css";
import ProfileNav from "./ProfileNav";
import { Link } from "react-router-dom";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className={styles.nav}>
			<div className={styles.nav__logo}>
				<Link to="/">
					<img src="assets/logo2.webp" alt="brand logo" />
				</Link>
			</div>
			<div className={styles.nav__links}>
				<Link to="/">
					<p>Home</p>
				</Link>
				<Link to="/inertia">
					<p>Inertia</p>
				</Link>
				<Link to="/contact">
					<p>Contact Us</p>
				</Link>
				<div className={styles.nav__profile__cnt}>
					<i className="ri-user-3-fill" onClick={() => setIsOpen((curr) => !curr)}></i>
					{isOpen && <ProfileNav />}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

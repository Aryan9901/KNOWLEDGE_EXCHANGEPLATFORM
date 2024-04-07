import { useState } from "react";

import styles from "../cssmodules/Navbar.module.css";
import ProfileNav from "./ProfileNav";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className={styles.nav}>
			<div className={styles.nav__logo}>
				<NavLink to="/">
					<img src="assets/logo2.webp" alt="brand logo" />
				</NavLink>
			</div>
			<div className={styles.nav__links}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/project">Projects</NavLink>
				<NavLink to="/inertia">Inertia</NavLink>
				<NavLink to="/classroom">Classroom</NavLink>
				<NavLink to="/colleges">Colleges</NavLink>
				<div className={styles.nav__profile__cnt}>
					<i className="ri-user-3-fill" onClick={() => setIsOpen((curr) => !curr)}></i>
					{/* {isOpen && <ProfileNav />} */}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

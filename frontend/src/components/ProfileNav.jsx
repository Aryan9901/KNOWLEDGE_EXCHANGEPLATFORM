import { Link, NavLink } from "react-router-dom";
import styles from "../cssmodules/ProfileNav.module.css";
function ProfileNav() {
	return (
		<div className={styles.nav__profile__full}>
			<div className={styles.list}>
				<div className={styles.row}>
					<div className={styles.circle}>
						<i className="ri-user-3-fill"></i>
					</div>
					<div className={styles.details}>
						<h4>Aryan9901</h4>
						<p>Aryan Gupta</p>
					</div>
				</div>
				<div className={styles.row}>
					<NavLink to="/profile">
						<p>Your profile</p>
						<i className={`${"ri-profile-line"} ${styles.link__icon}`}></i>
					</NavLink>
				</div>
				<div className={styles.row}>
					<p>Intelli Space - Chatapp</p>
					<i className={`${"ri-community-line"} ${styles.link__icon}`}></i>
				</div>
				<div className={styles.row}>
					<Link to="project">
						<p>Projects</p>
						<i className={`${"ri-git-repository-fill"} ${styles.link__icon}`}></i>
					</Link>
				</div>
				<Link className={styles.row}>
					<p>Hackathons</p>
					<i className={`${"ri-medal-fill"} ${styles.link__icon}`}></i>
				</Link>
				<div className={styles.row}>
					<p>Forums</p>
					<i className={`${"ri-discuss-fill"} ${styles.link__icon}`}></i>
				</div>
				<div className={styles.row}>
					<p>Contact US</p>
					<i className={`${"ri-contacts-book-fill"} ${styles.link__icon}`}></i>
				</div>
				<div className={styles.row}>
					<p>About us</p>
					<i className={`${"ri-file-info-fill"} ${styles.link__icon}`}></i>
				</div>
				<div className={styles.row}>
					<p>Logout &nbsp;&nbsp;👋</p>
					<i className={`${"ri-logout-box-r-line"} ${styles.link__icon}`}></i>
				</div>
			</div>
		</div>
	);
}

export default ProfileNav;

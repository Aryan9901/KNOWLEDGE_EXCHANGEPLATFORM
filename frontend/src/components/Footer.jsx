import styles from "../cssmodules/Footer.module.css";
function Footer() {
	return (
		<>
			<footer>
				<div className={styles.footer_top}>
					<div className={styles.left}>
						<img src="assets/logo2.webp" alt="logo" />
						<h3>Collaborative Project Incubator and Knowledge Exchange Platform</h3>
						<p>An integrated platform where all colleges and universities may share information about the projects</p>
						<ul>
							<li>Bhopal, Bharat</li>
							<li>support@gmail.com</li>
							<li>+91 800 854-36-80</li>
						</ul>
					</div>
					<div className={styles.right}>
						<form action="mailto:911aaryan@gmail.com">
							<input type="email" placeholder="example@gmail.com" />
							<button type="submit">Subscribe to the newsletter</button>
						</form>
						<div className={styles.links}>
							<p>
								<a href="#">Profile</a>
							</p>
							<p>
								<a href="#">Hackathons</a>
							</p>
							<p>
								<a href="#">Forums</a>
							</p>
							<p>
								<a href="#">Projects Repository</a>
							</p>
							<p>
								<a href="#">Chatapp - Community</a>
							</p>
						</div>
						<div className={styles.socials}>
							<i className="ri-facebook-fill"></i>
							<i className="ri-linkedin-fill"></i>
							<i className="ri-instagram-fill"></i>
							<i className="ri-linkedin-fill"></i>
							<i className="ri-contacts-book-fill"></i>
						</div>
						<p className={styles.copyright}>&copy; 2023 CPIKE | All rights reserved!</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;

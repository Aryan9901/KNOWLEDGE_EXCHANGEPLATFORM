import { Link } from "react-router-dom";
import styles from "../cssmodules/Feature.module.css";
function Feature({ feature }) {
	let txtstyle;
	let imgstyle;
	if (feature.alt === "analytics image" || feature.alt === "communication image") {
		imgstyle = {
			order: 2,
		};
		txtstyle = {
			order: 1,
		};
	} else {
		imgstyle = {
			order: 1,
		};
		txtstyle = {
			order: 2,
		};
	}
	return (
		<>
			<div className={`${styles.feature__img} ${styles.img1}`} style={imgstyle}>
				<img src={feature.img} alt={feature.alt} />
			</div>
			<div className={`${styles.feature__text} ${styles.txt1}`} style={txtstyle}>
				<h3>{feature.title}</h3>
				<p>{feature.desc}</p>
				{feature.title === "CollabTrack" ? (
					<Link to="/collegelist">
						<button>Explore Space &rarr;</button>
					</Link>
				) : (
					<button>Explore Space &rarr;</button>
				)}
			</div>
		</>
	);
}

export default Feature;

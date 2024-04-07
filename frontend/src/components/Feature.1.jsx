import styles from "../cssmodules/Feature.module.css";

export function Feature({ feature }) {
	if (feature.alt === "analytics image" || feature.alt === "communication image") {
		const imgstyle = {
			order: 2,
		};
		const txtstyle = {
			order: 1,
		};
	} else {
		const imgstyle = {
			order: 1,
		};
		const txtstyle = {
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
				<button>Explore Space &rarr;</button>
			</div>
		</>
	);
}

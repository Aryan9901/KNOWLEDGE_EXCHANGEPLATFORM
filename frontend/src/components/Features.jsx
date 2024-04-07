import styles from "../cssmodules/Features.module.css";
import features from "../../data/features";
import Feature from "./Feature";
function Features() {
	return (
		<>
			<h2 className={styles.title}>Features</h2>
			{features.map((feature) => (
				<div className={styles.row} key={feature.alt}>
					<Feature feature={feature} />
				</div>
			))}
		</>
	);
}

export default Features;

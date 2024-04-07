import styles from "../cssmodules/Colleges.module.css";
function Colleges() {
	return (
		<main className={styles.main}>
			<div className={styles.title}>
				<div>
					<i className="ri-school-fill"></i>
					<h3>Institutions</h3>
				</div>
				<div>
					<input type="text" placeholder="Search Colleges" />
					<select name="collegelist" id="collegelist">
						<option>LNCT</option>
						<option>LNCT&S</option>
						<option>LNCT&E</option>
						<option>LNCTU</option>
						<option>JNCT</option>
					</select>
					<select name="sort" id="sort">
						<option>Sort: By default</option>
						<option>Private</option>
						<option>Government</option>
						<option>Autonomous</option>
					</select>
				</div>
			</div>
		</main>
	);
}
export default Colleges;

import React, { useState } from "react";
import styles from "../cssmodules/Project.module.css";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function Project({ project }) {
	const [starred, setStarred] = useState(false);
	const [counter, setCounter] = useState(0);
	return (
		<div className={styles.projectdiv}>
			<div className={styles.star}>
				{starred ? (
					<FaStar
						className={styles.filledStar}
						onClick={() => {
							setStarred((curr) => !curr);
							setCounter(0);
						}}
					/>
				) : (
					<CiStar
						onClick={() => {
							setStarred((curr) => !curr);
							setCounter(1);
						}}
					/>
				)}
				<p>{counter}</p>
			</div>
			<div className={styles.title}>
				<h3>{project.problem_statement}</h3>
				<p>{project.solution_approach}</p>
				<h4>{project.college_name}</h4>
			</div>
			<div className={styles.info}>
				<p>
					<span>Author:</span> {project.team_members[0]}
				</p>
				<h3>
					Collaborators:
					<span>{project.team_members.slice(1).join(", ")}</span>
				</h3>
			</div>
			<div className={styles.buttons}>
				<button className={styles.exploreButton}>Explore more...</button>
			</div>
		</div>
	);
}

export default Project;

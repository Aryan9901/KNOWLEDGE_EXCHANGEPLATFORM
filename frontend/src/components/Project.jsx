import styles from "../cssmodules/Project.module.css";

function Project({ project }) {
	return (
		<div className={styles.projectdiv}>
			<div className={styles.title}>
				<h3>{project.problem_statement}</h3>
				<p>{project.solution_approach}</p>
				<h4>{project.college_name}</h4>
			</div>
			<div className={styles.info}>
				<p>
					<span>Author: </span> {project.team_members[1]}
				</p>
				<h3>
					Collaborators:{" "}
					<span>
						{project.team_members.map((name) => {
							return <p key={name}>{name}</p>;
						})}
					</span>
				</h3>
				<button>Request Access</button>
				<button>Explore more...</button>
			</div>
		</div>
	);
}

export default Project;

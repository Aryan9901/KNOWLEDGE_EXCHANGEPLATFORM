import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import styles from "../cssmodules/ProjectList.module.css";
import projects from "../../data/projects";
import Project from "../components/Project";
import { useState } from "react";
function ProjectList() {
	// const [projects] = useState(JSON.parse(localStorage.getItem("projects")) || []);
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredProjects, setFilteredProjects] = useState(projects);
	const [searchCollege, setSearchCollege] = useState("");
	const [formData, setFormData] = useState({});
	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	// const handleFilter = (e) => {
	// 	console.log(e);
	// 	setSearchQuery(e.target.value);
	// };
	// let fprojects;
	// if (searchQuery) {
	// 	fprojects = projects.filter((project) => {
	// 		return (
	// 			project.problem_statement.toLowerCase() === searchQuery.toLowerCase() ||
	// 			project.solution_approach.toLowerCase() === searchQuery.toLowerCase() ||
	// 			project.domain.toLowerCase() === searchQuery.toLowerCase()
	// 		);
	// 	});
	// } else {
	// 	fprojects = projects;
	// }
	const handleFilter = (e) => {
		const { value } = e.target;
		setSearchQuery(value);
		let filteredProjects;

		if (value) {
			filteredProjects = projects.filter((project) => {
				const lowerCaseQuery = value.toLowerCase();
				return (
					project.problem_statement.toLowerCase().includes(lowerCaseQuery) ||
					project.solution_approach.toLowerCase().includes(lowerCaseQuery) ||
					project.domain.toLowerCase().includes(lowerCaseQuery)
				);
			});
		} else {
			filteredProjects = projects;
		}

		setFilteredProjects(filteredProjects);
	};
	const handleCollege = (e) => {
		const { value } = e.target;
		setSearchCollege(value);
		let filteredProjects;

		if (value) {
			filteredProjects = projects.filter((project) => {
				const lowerCaseQuery = value.toLowerCase();
				return project.college_name.toLowerCase().includes(lowerCaseQuery);
			});
		} else {
			filteredProjects = projects;
		}

		setFilteredProjects(filteredProjects);
	};
	// const handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	// Validate the form data

	// 	// Create a new project object using the form data
	// 	const newProject = {
	// 		problem_statement: formData.problem_statement,
	// 		domain: formData.domain,
	// 		solution_approach: formData.solution_approach,
	// 		team_members: formData.team_members.split(",").map((member) => member.trim()),
	// 		college_name: formData.college_name,
	// 	};

	// 	// Update the projects array in local storage with the new project
	// 	const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
	// 	const updatedProjects = [...storedProjects, newProject];
	// 	localStorage.setItem("projects", JSON.stringify(updatedProjects));

	// 	// Update the filtered projects state and clear the form data
	// 	setFilteredProjects(updatedProjects);
	// 	setFormData({});
	// };

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validate the form data

		// Create a new project object using the form data
		const newProject = {
			problem_statement: formData.problem_statement,
			domain: formData.domain,
			solution_approach: formData.solution_approach,
			team_members: formData.team_members.split(",").map((member) => member.trim()),
			college_name: formData.college_name,
		};

		// Update the projects array with the new project
		const updatedProjects = [...projects, newProject];

		// Update the filtered projects state and clear the form data
		setFilteredProjects(updatedProjects);
		setFormData({});
	};
	return (
		<>
			<header className={styles.header}>
				<Navbar />
			</header>
			<main className={styles.main}>
				<h3>Problem Statements</h3>
				<form className={styles.form}>
					<input value={searchQuery} type="text" onChange={handleFilter} placeholder="🔍 Search by title, tech stack or keyword" />
					<input onChange={handleCollege} value={searchCollege} type="text" placeholder="🔍 Filter by latest or oldest" />
				</form>
				<div className={styles.tags}>
					{/* <div className={styles.tag}>
						<i>❌</i> <p>Latest</p>
					</div>
					<div className={styles.tag}>
						<i>❌</i> <p>Oldest</p>
					</div> */}
				</div>
				<p className={styles.length}>we have found {filteredProjects.length} projects.</p>
				<div className={styles.projectcnt}>
					<Projects>
						{filteredProjects?.map((project) => (
							<Project project={project} key={project.solution_approach} />
						))}
					</Projects>
				</div>
			</main>
			<div className={styles.upload}>
				<h3>Add your Projects</h3>
				<form className={styles.projectForm} onSubmit={handleSubmit}>
					<div className={styles.row}>
						<label htmlFor="problem_statement">Problem Statement</label>
						<textarea
							id="problem_statement"
							name="problem_statement"
							value={formData.problem_statement || ""}
							onChange={handleFormChange}
							placeholder="Enter the problem statement"
						/>
					</div>
					<div className={styles.row}>
						<label htmlFor="domain">Domain</label>
						<input
							type="text"
							id="domain"
							name="domain"
							value={formData.domain || ""}
							onChange={handleFormChange}
							placeholder="Enter the domain"
						/>
					</div>
					<div className={styles.row}>
						<textarea
							id="solution_approach"
							name="solution_approach"
							value={formData.solution_approach || ""}
							onChange={handleFormChange}
							placeholder="Enter the solution approach"
						/>
						<label htmlFor="team_members">Team Members</label>
					</div>
					<div className={styles.row}>
						<label htmlFor="solution_approach">Solution Approach</label>
						<input
							type="text"
							id="team_members"
							name="team_members"
							value={formData.team_members || ""}
							onChange={handleFormChange}
							placeholder="Enter team members (separated by commas)"
						/>
					</div>
					<div className={styles.row}>
						<label htmlFor="college_name">College Name</label>
						<input
							type="text"
							id="college_name"
							name="college_name"
							value={formData.college_name || ""}
							onChange={handleFormChange}
							placeholder="Enter the college name"
						/>
					</div>

					<button type="submit">Add Project</button>
				</form>
			</div>
			<Footer />;
		</>
	);
}

export default ProjectList;

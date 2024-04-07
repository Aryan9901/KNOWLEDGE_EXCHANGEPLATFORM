import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import styles from "../cssmodules/ProjectList.module.css";
import projects from "../../data/projects";
import Project from "../components/Project";
import { useState } from "react";
import { Link } from "react-router-dom";
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
				<div className={styles.hero}>
					<h3>Problem Statements</h3>
				</div>
				<div className={styles.container}>
					<form className={styles.form}>
						<input value={searchQuery} type="text" onChange={handleFilter} placeholder="🔍 Search by title, tech stack or keyword" />
					</form>
					<div className={styles.projectcnt}>
						<Projects>
							{filteredProjects?.map((project) => (
								<Project project={project} key={project.solution_approach} />
							))}
						</Projects>
					</div>
				</div>
				<Link to="/new/project">
					<button style={{ marginLeft: "auto", display: "block", marginRight: "27rem", padding: "1.2rem 2.5rem" }}>Add New Project</button>
				</Link>
			</main>
			<Footer />;
		</>
	);
}

export default ProjectList;

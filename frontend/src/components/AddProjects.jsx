import { useState } from "react";
import styles from "../cssmodules/AddProject.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AddProjectForm({ onAddProject }) {
	const [formData, setFormData] = useState({
		problemStatement: "",
		solutionApproach: "",
		collegeName: "",
		author: "",
		collaborators: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:8000/user/add/project", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				const data = await response.json();
				console.log("Project added successfully:", data);
				// Optionally, you can pass the newly added project data to a callback function
				if (onAddProject) {
					onAddProject(data);
				}
				// Reset form data
				setFormData({
					problemStatement: "",
					solutionApproach: "",
					collegeName: "",
					author: "",
					collaborators: "",
				});
			} else {
				console.error("Failed to add project:", response.statusText);
			}
		} catch (error) {
			console.error("Error:", error.message);
		}
	};

	return (
		<>
			<header className={styles.header}>
				<Navbar />
			</header>
			<main className={styles.main}>
				<div className={styles.hero}>
					<h3>Add New Project</h3>
				</div>

				<form className={styles.addProjectForm} onSubmit={handleSubmit}>
					<input
						type="text"
						name="problemStatement"
						placeholder="Problem Statement"
						value={formData.problemStatement}
						onChange={handleChange}
						required
					/>
					<textarea
						name="solutionApproach"
						placeholder="Solution Approach"
						value={formData.solutionApproach}
						onChange={handleChange}
						required
					></textarea>
					<input type="text" name="collegeName" placeholder="College Name" value={formData.collegeName} onChange={handleChange} required />
					<input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
					<input
						type="text"
						name="collaborators"
						placeholder="Collaborators (separated by comma)"
						value={formData.collaborators}
						onChange={handleChange}
						required
					/>
					<button type="submit">Add Project</button>
				</form>
			</main>
			<Footer />
		</>
	);
}

export default AddProjectForm;

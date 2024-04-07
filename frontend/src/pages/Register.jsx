import { useState } from "react";
import "../styles/login.css"; // Import CSS file for styling
import { Link } from "react-router-dom";

const RegisterPage = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		gender: "",
		year: "",
		college: "",
		semester: "",
	});

	const onChangeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setUser({
			...user,
			[name]: value,
		});
	};

	const submitLoginHandler = (e) => {
		e.preventDefault();
		alert("submit");
	};

	return (
		<div className="registerPage">
			<form onSubmit={submitLoginHandler}>
				<h2>Register Form</h2>
				<div>
					<label htmlFor="name">Your Name</label>
					<input value={user.name} type="text" name="name" id="name" placeholder="Your Good Name" onChange={onChangeHandler} />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input value={user.password} type="text" name="password" id="password" placeholder="*******" onChange={onChangeHandler} />
				</div>
				<div>
					<label htmlFor="gender">gender</label>
					<input value={user.gender} type="text" name="gender" id="gender" placeholder="male/female" onChange={onChangeHandler} />
				</div>
				<div>
					<label htmlFor="dob">Year</label>
					<input value={user.year} type="date" name="dob" id="dob" placeholder="26/11/2003" onChange={onChangeHandler} />
				</div>
				<div>
					<label htmlFor="college">college</label>
					<input value={user.college} type="text" name="college" id="college" placeholder="male/female" onChange={onChangeHandler} />
				</div>
				<div>
					<label htmlFor="semester">Semester</label>
					<input value={user.semester} type="text" name="semester" id="semester" placeholder="male/female" onChange={onChangeHandler} />
				</div>
				<Link to="/">
					<button type="submit">Register Now</button>
				</Link>
			</form>
		</div>
	);
};

export default RegisterPage;

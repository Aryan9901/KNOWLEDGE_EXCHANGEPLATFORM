import React, { useState } from "react";
import "../styles/login.css"; // Import CSS file for styling
import { Link } from "react-router-dom";

const LoginPage = () => {
	const [user, setUser] = useState({
		username: "",
		password: "",
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
		<div className="loginpage">
			<form onSubmit={submitLoginHandler}>
				<h2>Login Form</h2>
				<div>
					<label htmlFor="username">Username</label>
					<input
						value={user.username}
						type="text"
						name="username"
						id="username"
						placeholder="youremailid@gmail.com"
						onChange={onChangeHandler}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input value={user.password} type="text" name="password" id="password" placeholder="*******" onChange={onChangeHandler} />
				</div>
				<Link to="/">
					<button type="submit">Login Now</button>
				</Link>
			</form>
		</div>
	);
};

export default LoginPage;

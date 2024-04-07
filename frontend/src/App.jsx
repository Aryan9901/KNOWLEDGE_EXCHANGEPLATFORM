// react imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages imports
import HomePage from "./pages/HomePage";
import ProjectList from "./pages/ProjectList";
import Profile from "./pages/Profile";
import CollegeList from "./pages/CollegeList";
import Disscussion from "./pages/Disscussion";
// components imports
import Login from "./components/Login";
import AddProjects from "./components/AddProjects";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Classroom from "./pages/Classroom";
import Room from "./pages/Room";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index path="/login" element={<LoginPage />} />
					<Route index path="/register" element={<RegisterPage />} />
					<Route index path="/classroom" element={<Classroom />} />
					<Route index path="/room/:code" element={<Room />} />
					<Route index path="/" element={<HomePage />} />
					<Route path="/project" element={<ProjectList />} />
					<Route path="/colleges" element={<CollegeList />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/login" element={<Login />} />
					<Route path="/new/project" element={<AddProjects />} />
					<Route path="/disscussion" element={<Disscussion />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

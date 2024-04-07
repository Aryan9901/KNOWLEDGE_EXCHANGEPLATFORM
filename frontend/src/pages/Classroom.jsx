import { FaKeyboard } from "react-icons/fa";
import Navbar from "../components/Navbar";
import "../styles/classroom.css";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Classroom = () => {
	const [code, setCode] = useState("");
	const navigate = useNavigate();

	const handleJoinRoom = useCallback(() => {
		navigate(`/room/${code}`);
	}, [code]);

	return (
		<>
			<header className="header">
				<Navbar />
			</header>
			<div className="classroom">
				{/* <div className="hero"></div> */}
				<div>
					<div className="left">
						<h2>Dedicated Space for Conversation</h2>
						<p>
							Unlock the Power of Cross-University Collaboration! A dedicated space for students to connect, share ideas, and ignite
							innovation.
						</p>
						<div>
							<button onClick={handleJoinRoom}>Join Meeting &rarr;</button>
							<div>
								<FaKeyboard />
								<input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
							</div>
						</div>
					</div>
					<div className="right">hello</div>
				</div>
			</div>
		</>
	);
};

export default Classroom;

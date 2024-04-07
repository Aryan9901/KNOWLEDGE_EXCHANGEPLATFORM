import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "../styles/room.css";

const Room = () => {
	const { code } = useParams();

	const myMeeting = async (element) => {
		const appId = 1614576874;
		const serverSecret = "2cb486d5fbe72f6c57ce780f56687c8f";
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, code, Date.now().toString(), "Aryan Gupta");

		const zc = ZegoUIKitPrebuilt.create(kitToken);
		zc.joinRoom({
			container: element,
			scenario: {
				mode: ZegoUIKitPrebuilt.OneONoneCall,
			},
			showScreenSharingButton: true,
			turnOnMicrophoneWhenJoining: true,
			turnOnCameraWhenJoining: true,
			showLayoutButton: true,
		});
	};

	return (
		<div className="roomContainer">
			<div ref={myMeeting} className="room" />
			<div className="sidePanel"></div>
		</div>
	);
};

export default Room;

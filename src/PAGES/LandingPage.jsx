import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { contextStore } from "../CONTEXT/Context";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
//importing CSS
import "../CSS/PAGESCSS/LandingPage.css";

export const LandingPage = () => {
	//importing context

	//useNavigate
	const navigate = useNavigate();

	//useRef
	const referenceDiv = useRef(null);

	const keyEventCheck = (e) => {
		if (e.key == "1") {
			navigate("/oldStudents/login");
		} else if (e.key == "2") {
			navigate("/newStudents");
		} else if (e.key == "0") {
			navigate("../");
			console.log("Event Happened");
		}
	};

	useEffect(() => {
		referenceDiv.current.focus();
	}, []);

	return (
		<div
			className='landingDiv'
			onKeyPress={keyEventCheck}
			tabIndex={0}
			ref={referenceDiv}
		>
			<div className='introductionDiv'>
				<span>
					Welcome To ROORKEE COLLEGE OF ENGINEERING
					<img src=''></img>
				</span>
			</div>
			<div className='landingPageButtonDiv'>
				<button className='oldStudentBtn'>OLD</button>
				<button className='newRegistrationBtn'>NEW</button>
			</div>
		</div>
	);
};

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const NewStudentPage = () => {
	//use Navigate
	const navigate = useNavigate();

	//navigation using keys
	const keyEventCheck = (e) => {
		if (e.key == "0") {
			navigate("../");
		}
	};
	//USE REFERENCE
	const referenceDiv = useRef(null);

	useEffect(() => {
		referenceDiv.current.focus();
	}, []);

	return (
		<div ref={referenceDiv} tabIndex={0} onKeyPress={keyEventCheck}>
			WELCOME NEW STUDENT1
		</div>
	);
};

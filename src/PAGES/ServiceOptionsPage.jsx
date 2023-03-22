import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CourseSelectionOptionsButton } from "../CHILDCOMPONENTS/CourseSelectionOptionsButton";
import { ServicesOptions } from "../CONSTANT/PreWrittenTexts";

//import css
import "../CSS/PAGESCSS/ServiceOptionsPage.css";

export const ServiceOptionsPage = () => {
	//useNavigate
	const navigate = useNavigate();
	//USE REFERENCE
	const referenceDiv = useRef(null);

	//Key Press Event
	const keyEventCheck = (e) => {
		if (e.key == "1") {
			navigate("/oldStudents/btech/leaveform");
		} else if (e.key == "0") {
			navigate("../");
		}
	};

	useEffect(() => {
		referenceDiv.current.focus();
	}, []);

	return (
		<div
			className='oldStudentServicePageDiv'
			ref={referenceDiv}
			tabIndex={0}
			onKeyPress={keyEventCheck}
		>
			<div className='oldStudentServicePageInnerDiv'>
				{ServicesOptions.map((service) => {
					return (
						<div className='serviceSelectionButton'>
							<CourseSelectionOptionsButton
								text={service.service}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

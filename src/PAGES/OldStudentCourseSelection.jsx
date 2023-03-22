import React, { useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CourseSelectionOptionsButton } from "../CHILDCOMPONENTS/CourseSelectionOptionsButton";
import { OldStudentCourseSelectionTexts } from "../CONSTANT/PreWrittenTexts";

//*Importing CSS
import "../CSS/PAGESCSS/OldStudentCourseSelection.css";

export const OldStudentCourseSelection = () => {
	//useNavigate
	const navigate = useNavigate();

	//USE REFERENCE
	const referenceDiv = useRef(null);

	//Key Press Event
	const keyEventCheck = (e) => {
		if (e.key == "1") {
			navigate("/oldStudents/Login");
		} else if (e.key == "0") {
			navigate("../");
		} else if (e.key == "2") {
			navigate("/newStudents");
		}
	};
	// ref={referenceDiv} tabIndex={0} onKeyPress={keyEventCheck}

	useEffect(() => {
		referenceDiv.current.focus();
	}, []);

	return (
		<div>
			{<p>{OldStudentCourseSelectionTexts.text1}</p>}
			<div className='oldStudentCourseSelectionButtonDiv'>
				<div className='oldStudentCourseSelectionSet1Div'>
					{OldStudentCourseSelectionTexts.optionsTextSet1.map(
						(course) => {
							return (
								<div className='CourseSelectionOptionsSet1'>
									<CourseSelectionOptionsButton
										text={course.course}
									/>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
	);
};

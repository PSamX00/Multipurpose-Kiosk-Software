import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../CHILDCOMPONENTS/InputBox";
import { loginPageTexts } from "../CONSTANT/PreWrittenTexts";
import { contextStore } from "../CONTEXT/Context";

//import css
import "../CSS/PAGESCSS/LoginOldStudentPage.css";

export const LoginOldStudentsPage = () => {
	//importing context
	const { studentsRoll, setStudentsRoll } = useContext(contextStore);

	const onChangeHandler = (name, value) => {
		setStudentsRoll({
			[name]: value,
		});
	};

	useEffect(() => {
		onChangeHandler();
		console.log(studentsRoll);
	}, []);

	return (
		<>
			<div className='loginButton'>
				<p>{loginPageTexts.text1}</p>
				<p>{loginPageTexts.text2}</p>

				<div className='loginOldStudentFormDiv'>
					<span>
						<InputBox
							name={"loginForOldStudents"}
							type={"text"}
							placeholder={"University Roll Number"}
							onChangeHandler={onChangeHandler}
						/>
					</span>
				</div>
			</div>
		</>
	);
};

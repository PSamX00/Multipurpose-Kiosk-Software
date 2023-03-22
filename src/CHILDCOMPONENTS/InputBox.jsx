import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { contextStore } from "../CONTEXT/Context";

//importing css

import "../CSS/CHILDCOMPONENTCSS/inputBox.css";

export const InputBox = ({ type, name, placeholder, onChangeHandler }) => {
	//Hadling Login on Verification
	const handleLogin = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		return onChangeHandler(name, value);
	};

	return (
		<div>
			<input
				className='inputField'
				type={type}
				name={name}
				placeholder={placeholder}
				style={{ height: "35px" }}
				onChange={handleLogin}
				autoFocus
			/>
			<button>LOG IN</button>
		</div>
	);
};

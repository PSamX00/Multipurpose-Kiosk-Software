import React, { useState } from "react";

import { contextStore } from "./Context";

const ContextState = ({ children }) => {
	const [count, setCount] = useState(1);
	const [studentsRoll, setStudentsRoll] = useState({});
	const [inputValue, setInputValue] = useState("");
	const [currentDate, setCurrentDate] = useState();

	return (
		<contextStore.Provider
			value={{
				count,
				setCount,
				studentsRoll,
				setStudentsRoll,
				inputValue,
				setInputValue,
				currentDate,
				setCurrentDate,
			}}
		>
			{children}
		</contextStore.Provider>
	);
};

export default ContextState;

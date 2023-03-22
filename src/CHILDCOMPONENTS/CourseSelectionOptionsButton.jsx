import React from "react";

//importing css
import "../CSS/CHILDCOMPONENTCSS/CourseSelectionOptionsButton.css";

export const CourseSelectionOptionsButton = ({ text }) => {
	return (
		<>
			<button className='courseSelectionOptionsButton'>
				{text}
			</button>
		</>
	);
};

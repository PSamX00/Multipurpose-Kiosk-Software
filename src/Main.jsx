import React from "react";
import { LandingPage } from "./PAGES/LandingPage";
import { LoginOldStudentsPage } from "./PAGES/LoginOldStudentsPage";
import { OldStudentCourseSelection } from "./PAGES/OldStudentCourseSelection";

//importing REACT ROUTER
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { NewStudentPage } from "./PAGES/NewStudentPage";
import { BtechPage } from "./SUBPAGES/BtechPage";

export const Main = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPage />} />

				<Route
					path='/newStudents'
					element={<NewStudentPage />}
				/>
				<Route
					path='/oldStudents/Login'
					element={<LoginOldStudentsPage />}
				/>
				<Route
					path='/oldStudents/btech'
					element={<BtechPage />}
				/>
				<Route
					path='/oldStudents/btech/leaveform'
					element={<BtechPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

import React, { useContext, useEffect } from "react";
import { contextStore } from "../CONTEXT/Context";
import "../CSS/SERVICEPAGECSS/ApplicationForm.css";

export const ApplicationForm = () => {
	//importing context
	const { currentDate, setCurrentDate } = useContext(contextStore);
	//getting new date
	const getNewDate = () => {
		const newDate = new Date();
		const currentDate = newDate.getDate();
		const currentMonth = newDate.getMonth();
		const currentYear = newDate.getFullYear();
		setCurrentDate(`${currentDate}/${currentMonth}/${currentYear}`);
		return newDate;
	};

	useEffect(() => {
		getNewDate();
	}, []);

	const name = "Prithwish Samanta";
	const fathers_name = "Pranab Samanta";
	const Batch = "Btech";
	const Branch = "ELECTRONICS AND COMUNICATION";
	const year = "4th";
	const roll = 191020102015;
	const date = "current date";
	return (
		<>
			<div className='applicationFormMotherContainer'>
				<h1>ROORKEE COLLEGE OF ENGINEERING</h1>
				<h3>
					<u>Application Form</u>
				</h3>
				<div className='applicationFormSalutationAndDate'>
					<div className='applicationFormSalutation'>
						<p>To,</p>
						<p>The _______________,</p>
						<p>Roorkee College Of Engineering,</p>
						<p>Roorkee</p>
					</div>
					<div className='applicationFormDate'>
						Date: <strong>{currentDate}</strong>
					</div>
				</div>
				<div className='applicationFormSubject'>
					<strong>Subject:- </strong>
				</div>
				<div className='applicationFormStart'>
					<p>Respected Sir/Madam,</p>
				</div>
				<div className='applicationFormBody'></div>
				<div className='applicationFormEnd'>
					<p>Thanking You,</p>
					<p>Yours Sincerely,</p>
					<br />
					<p>
						Name: <strong>{name},</strong>
					</p>
					<p>
						Father's Name:{" "}
						<strong>{fathers_name},</strong>
					</p>
					<p>
						Roll No.: <strong>{roll},</strong>
					</p>
					<p>
						Branch: <strong>{Branch},</strong>
					</p>
					<p>
						Year : <strong>{year}</strong>
					</p>
				</div>
			</div>
		</>
	);
};

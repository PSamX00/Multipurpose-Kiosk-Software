import React, { useContext, useEffect, useRef } from "react";

import ReactDOM from "react-dom";
import { LeaveFormText } from "../CONSTANT/ServiceText";
import { contextStore } from "../CONTEXT/Context";

//importing css
import "../CSS/SERVICEPAGECSS/LeaveForm.css";

//importing image
import LeaveFormTable from "../IMAGES/LeaveFormTable.png";

export const LeaveForm = () => {
	//USE REFERENCE
	const referenceDiv = useRef(null);

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

	//constants
	const name = "Prithwish Samanta";
	const fathers_name = "Pranab Samanta";
	const address = "Barddhaman,West Bengal";
	const student_number = 7602453720;
	const fathers_number = 9433094332;
	const mother_number = 7460259812;
	const startingYear = 2019;
	const endingYear = 2023;
	const student_branch = "ELECTRONICS AND COMMUNICATION";

	return (
		<>
			<div className='LeaveFormMotherContainer'>
				<h1>{LeaveFormText.text0}</h1>
				<div className='studentYearInformation'>
					<p>
						बैच संख्या:{" "}
						<strong>
							{startingYear} - {endingYear}
						</strong>
					</p>
					<p>
						शाखा : <strong>{student_branch}</strong>
					</p>
					<p>
						दिनांक : <strong>{currentDate}</strong>
					</p>
				</div>
				<div className='salutationDivOne'>सेवा में,</div>
				<div className='salutationDiv'>
					<p>रजिस्ट्रार महोदय,</p>
					<p>रुड़की कॉलेज ऑफ इंजीनियरिंग,</p>
					<p>रुड़की(उत्तराखंड)|</p>
				</div>
				<h3>{LeaveFormText.text3}</h3>
				<p className='SalutationLeaveFormBody'>महोदय,</p>
				<div className='leaveformBody'>
					{LeaveFormText.text4}
				</div>
				<br />
				<div className='leaveFormBodyDeclration'>
					{LeaveFormText.text5}
				</div>
				<br />
				<div className='leaveformLastDiv'>
					<img
						src={LeaveFormTable}
						className='leaveFormTable'
					/>
					<div className='leaveformSignatureForm'>
						<p>
							नाम : <strong>{name}</strong>
						</p>
						<p>
							पिता का नाम :{" "}
							<strong>{fathers_name}</strong>
						</p>
						<p>
							पता: <strong>{address}</strong>
						</p>
						<p>
							छात्र का मो० नं०:{" "}
							<strong>{student_number}</strong>
						</p>
						<p>
							छात्र के पिता का मो० नं० :{" "}
							<strong>{fathers_number}</strong>
						</p>
						<p>
							छात्र की माता का मो० नं०:{" "}
							<strong>{mother_number}</strong>
						</p>
					</div>
				</div>
			</div>

			<div className='leaveFormSecondPageMotherContainer'>
				<div className='emptyDiv'></div>
				<div className='OfficeCopyLeaveForm'>
					<h1>ROORKEE COLLEGE OF ENGINEERING</h1>
					<h3>
						Hostier/Non Hostler Students
						Leave-Application
					</h3>
					<p className='OffcieCopyText'>
						<strong>(Office Copy)</strong>
					</p>
					<div className='OfficeCopyLeaveFormBody'>
						I Mr./Ms. _________________________Roll
						No._________________________of Branch
						_________________________request for leave
						from
						(time)_________________________(Date)_________________________to
						(time)_________________________(date)_________________________For
						the purpose of _________________________
						<br />
						<div>
							I will be responsible for making up my
							loss of studies and shortfall of
							attendance if any due to the above
							leave. The address during leave is as
							follows. _________________________
							<strong>
								Telephone
								No_________________(M)_______________(R)
							</strong>
						</div>
					</div>
					<div className='approvalSectionDiv'>
						<p>Approved/Not Approved</p>
						<p>(Signature of Student)</p>
					</div>
					<div
						style={{
							textAlign: "left",
							marginTop: "10px",
						}}
					>
						<strong>(Registrar)</strong>
					</div>
					<div className='line'>
						<hr />
					</div>
				</div>
				<div className='StudentsCopyLeaveForm'>
					<h1>ROORKEE COLLEGE OF ENGINEERING</h1>
					<h3>
						Hostler Non Hostler Students
						Leave-Certificate
					</h3>
					<p className='StudentCopyText'>
						<strong>(Student Copy)</strong>
					</p>
					<div className='StudentsCopyLeaveFormBody'>
						I Mr./Ms. _________________________request
						for leave from_________________________hours
						on _________________________to
						_________________________hours_________________________
						on _________________________In case of
						emergency I shall inform the college on
						mobile No. 7500166222/7500188222.
					</div>
					<p className='StudentsCopyLeaveFormSignature'>
						(Signature of Student)
					</p>
					<div className='StudentsCopyLeaveFormDeclration'>
						Certified that Mr./Ms.
						_________________________his stayed with me
						during the above period.
					</div>
					<p className='StudentsCopyLeaveFormSignatureParents'>
						<strong>
							Counter Signed by the Parents/Guardian
						</strong>
					</p>
				</div>
				<div className='line'>
					<hr />
				</div>
				<div className='SecurityGateCopyLeaveForm'>
					<h1>ROORKEE COLLEGE OF ENGINEERING</h1>
					<h3>
						Hostler Non Hostler Students
						Leave-Certificate
					</h3>
					<p className='SecurityGateCopy'>
						<strong>(Security Gate Copy)</strong>
					</p>
					<div className='SecurityGateCopyLeaveFormBody'>
						Mr./Ms. <strong>{name}</strong>{" "}
						to____________________________to go out of
						the Hostel.
					</div>
					<div className='SecurityGateCopyLeaveFormWardenSignature'>
						<strong>Registrar/Hostel Warden</strong>
					</div>
				</div>
			</div>
		</>
	);
};

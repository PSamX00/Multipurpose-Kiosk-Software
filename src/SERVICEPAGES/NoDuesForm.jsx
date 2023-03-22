import React from "react";
import { NoDuesFormText } from "../CONSTANT/ServiceText";

//importing css
import "../CSS/SERVICEPAGECSS/NoDuesForm.css";

//importing image
import NocTable1 from "../IMAGES/NOCTable.png";
import NocTable2 from "../IMAGES/NOCTable2.png";

export const NoDuesForm = () => {
	const name = "Prithwish Samanta";
	const fathers_name = "Pranab Samanta";
	const Batch = "Btech";
	const Branch = "ECE";
	const year = "4th";

	window.print();

	return (
		<div className='NOCMotherContainer'>
			<h1>{NoDuesFormText.text1}</h1>
			<h2>{NoDuesFormText.text2}</h2>
			<div className='noDuesBody'>
				Considering the request of Dr./Mr./ Mrs./Ms{" "}
				<b>{name}</b> dated. for relieving him/her from the
				duties in the Institute and considering the same on this
				Performa is issued by the Registrar for grant of ‘No
				Dues’.
			</div>
			<div className='RegistrarSignatureDash'>
				(Registrar’s Sig. with date) ________________________
			</div>
			<br />
			<div>
				Verified that nothing is out standing against
				Dr./Mr/Mrs./Ms. Son/Wife/Daughter of{" "}
				<b>{fathers_name}</b> as a student of Class{" "}
				<b>{Batch}</b> Branch <b>{Branch}</b> Year <b>{year}</b>{" "}
				at RCE.
			</div>
			<img src={NocTable1} className='NOCTable1Image' />
			<div className='StudentRegistrarSignature'>
				<span>Registrar : ____________________</span>
				<span>Student's Signature : _________________</span>
			</div>{" "}
			<img src={NocTable2} className='NOCTable2Image' />
		</div>
	);
};

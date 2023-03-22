import logo from './logo.svg';
import './App.css';
import { Main } from "./Main";
import ContextSate from "./CONTEXT/ContextSate";

import { NoDuesForm } from "./SERVICEPAGES/NoDuesForm";
import { LeaveForm } from "./SERVICEPAGES/LeaveForm";
import { ApplicationForm } from "./SERVICEPAGES/ApplicationForm";
import { ServiceOptionsPage } from "./PAGES/ServiceOptionsPage";

function App() {
	return (
		<ContextSate>
			<div className='App'>
				<Main />
				{/* <LeaveForm /> */}
				{/* <NoDuesForm /> */}
				{/* <ApplicationForm /> */}
			</div>
		</ContextSate>
	);
}

export default App;

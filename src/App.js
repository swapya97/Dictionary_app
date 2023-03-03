import React, { useState } from "react";
import { Route } from "react-router-dom";
import AddUser from "./components/pages/AddUser";
import RetrieveInfo from "./components/pages/RetrieveInfo";
import UsersList from "./components/pages/UsersList";
import Welcome from "./components/pages/Welcome";
import Navbar from "./components/UI/Navbar";

function App() {
	const [usersList, setUsersList] = useState([]);

	function allStorage() {
		var values = [],
			keys = Object.keys(localStorage),
			i = keys.length;

		while (i--) {
			values.push(localStorage.getItem(keys[i]));
		}

		return values;
	}
	const data = allStorage();

	const localData = [];

	for (let i = 0; i < data.length; i++) {
		localData.push(JSON.parse(data[i]));
	}

	window.onload = function () {
		setUsersList(localData);
	};

	const addUserHandler = (uName, uDob, uAge, uAadhar, uMobile) => {
		setUsersList((prevList) => {
			return [
				...prevList,
				{
					name: uName,
					dob: uDob,
					age: uAge,
					aadhar: uAadhar,
					mobile: uMobile,
					id: Math.random().toString(),
				},
			];
		});
	};

	return (
		<div>
			<Route path="/">
				<Welcome />
			</Route>
			<Navbar />
			<Route path="/" exact>
				<AddUser onAddUser={addUserHandler} />
				{usersList.length > 0 && <UsersList users={usersList} />}
			</Route>
			<Route path="/info">
				<RetrieveInfo />
			</Route>
		</div>
	);
}

export default App;

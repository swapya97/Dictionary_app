import { useState, useEffect } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
	const [enterName, setName] = useState("");
	const [Dob, setDob] = useState("");
	const [aadhar, setAadhar] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [age, setAge] = useState("");
	const [error, setError] = useState();

	const usernameChangeHandler = (event) => {
		setName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setDob(event.target.value);
	};

	useEffect(() => {
		const todayYear = new Date().getFullYear();
		const d = new Date(Dob);
		const year = d.getFullYear();
		setAge(todayYear - year);
	}, [Dob]);

	const ageHandler = () => {
		if (age) {
			return <h3>{age} Years old</h3>;
		}
	};

	const aadharChangeHandler = (event) => {
		setAadhar(event.target.value);
	};

	const mobileNumberChangehandler = (event) => {
		setMobileNumber(event.target.value);
	};

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enterName.trim().length === 0 || Dob.trim().length === 0) {
			setError({
				title: "Invalid Input!",
				message: "Please input valid Name and Date of Birth.",
			});
			return;
		}
		if (+Dob < 0) {
			setError({
				title: "Invalid age",
				message: "Please enter valid age (>0)",
			});

			return;
		}
		if (aadhar.trim().length !== 12) {
			setError({
				title: "Invalid aadhar number",
				message: "Please enter 12 digits of Aadhar number",
			});
			return;
		}
		if (mobileNumber.trim().length !== 10) {
			setError({
				title: "Invalid mobile number",
				message: "Please enter 10 digits of Mobile number",
			});
			return;
		}
		props.onAddUser(enterName, Dob, age, aadhar, mobileNumber);
		setName("");
		setDob("");
		setAadhar("");
		setMobileNumber("");
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Name</label>
					<input
						id="username"
						type="text"
						value={enterName}
						onChange={usernameChangeHandler}
						placeholder="Enter Name"
					/>
					<label htmlFor="dob">Date of Birth</label>
					<input
						id="dob"
						type="date"
						value={Dob}
						onChange={ageChangeHandler}
						placeholder="Enter Date of Birth"
					/>
					{ageHandler()}
					<label htmlFor="aadhar">Aadhar Number</label>
					<input
						id="aadhar"
						type="number"
						value={aadhar}
						onChange={aadharChangeHandler}
						placeholder="Enter Aadhar Number"
					/>
					<label htmlFor="mobile">Mobile Number</label>
					<input
						id="mobile"
						type="number"
						value={mobileNumber}
						onChange={mobileNumberChangehandler}
						placeholder="Enter Mobile Number"
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;

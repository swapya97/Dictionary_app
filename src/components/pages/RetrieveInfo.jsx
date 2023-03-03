import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./RetrieveInfo.module.css";
import { useState } from "react";
import UsersList from "./UsersList";
import ErrorModal from "../UI/ErrorModal";

const RetrieveInfo = () => {
	const [inputData, setinputData] = useState("");
	const [getData, setGetData] = useState([]);

	const [error, setError] = useState();

	const infoRetrieveHandler = (event) => {
		setinputData(event.target.value);
	};
	const find = () => {
		const retrieveData = localStorage.getItem(inputData);
		const dataArr = [];
		dataArr.push(JSON.parse(retrieveData));
		setGetData(dataArr);
		if (dataArr[0] === null) {
			setError({
				title: "Record not found!",
				message:
					"The information you are trying to fetch is currently not available.",
			});
			setinputData("");
		}
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
			<Card className={classes.info}>
				<input
					placeholder="Enter Aadhar Number"
					onChange={infoRetrieveHandler}
					type="text"
				/>
				<Button onClick={find}>Find</Button>
			</Card>
			{getData[0] && <UsersList users={getData} />}
		</div>
	);
};

export default RetrieveInfo;

import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
const UsersList = (props) => {
	const localStorageSaveHandler = () => {
		localStorage.setItem(
			props.users[props.users.length - 1].aadhar,
			JSON.stringify(props.users[props.users.length - 1])
		);
	};

	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map((user) => (
					<div key={user.id}>
						<li>Name : {user.name}</li>
						<li>Date of Birth : {user.dob}</li>
						<li>Age : {user.age} year old</li>
						<li>Aadhar Number : {user.aadhar}</li>
						<li>Mobile Number : {user.mobile}</li>
						<Button onClick={localStorageSaveHandler}>Save</Button>
						<Button>Delete</Button>
						<hr></hr>
					</div>
				))}
			</ul>
		</Card>
	);
};
export default UsersList;

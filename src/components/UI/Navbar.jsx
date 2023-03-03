import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
const Navbar = () => {
	return (
		<div className={classes.navlink}>
			<ul>
				<li className="lis">
					<NavLink
						className={classes.deflink}
						activeClassName={classes.activeNav}
						to="/">
						Add New Person
					</NavLink>
				</li>

				<li className="lis">
					<NavLink
						className={classes.deflink}
						activeClassName={classes.activeNav}
						to="/info">
						Retrieve Information
					</NavLink>
				</li>
			</ul>
		</div>
	);
};
export default Navbar;

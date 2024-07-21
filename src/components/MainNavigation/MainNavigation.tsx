import { Link, NavLink } from "react-router-dom";
import FXclub from "../../assets/images/fx-cs-favicon.jpg";
import classes from "./main-navigation.module.scss";

export default function MainNavigation() {
  return (
    <header>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          <img src={FXclub} alt="FXclub Logo" />
        </Link>
        <nav className={classes.navbar}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/link-decoder"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Link Decoder
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ai-assistant"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                AI Assistant
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

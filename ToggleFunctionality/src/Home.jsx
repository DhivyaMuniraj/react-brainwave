import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import "./App.css";
import Button from "./resuable/Button";
import { useContext } from "react";
import { userProfileContext } from "./Context";
function Home() {
  const { isDarkThemeEnable, toggleTheme } = useContext(userProfileContext);
  return (
    <div className={isDarkThemeEnable ? "dark" : "light"}>
      <p
        className={isDarkThemeEnable ? "darkness" : "bright"}
        onClick={toggleTheme}>
        ChangeTheme
      </p>

      <div className="home-div">
        <Link to="/login">
          <Button name="Login" />
        </Link>
        <Link to="/register">
          <Button name="Register" />
        </Link>
      </div>
    </div>
  );
}
export default Home;

import { Link } from "react-router-dom";
import { useContext } from "react";
import { userProfileContext } from "./Context";
import Button from "./resuable/Button";
import Input from "./resuable/Input";
import "./App.css";
function Login() {
  const { isDarkThemeEnable, toggleTheme } = useContext(userProfileContext);
  return (
    <div className={isDarkThemeEnable ? "dark" : "light"}>
      <p
        className={isDarkThemeEnable ? "darkness" : "bright"}
        onClick={toggleTheme}>
        ChangeTheme
      </p>

      <div className="login-div">
        <div>
          <Input placeholder="Enter your name" name="Name" />
          <br></br>
          <Input placeholder="Enter your password" name="Password" />
        </div>
        <div className="button-div">
          <Button name="Submit" />
          <Link to="/">
            <Button name="Home" />
          </Link>
          <Link to="/register">
            <Button name="Register" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;

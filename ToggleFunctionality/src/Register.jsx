import { Link } from "react-router-dom";
import { useContext } from "react";
import { userProfileContext } from "./Context";
import Button from "./resuable/Button";
import "./App.css";
import Input from "./resuable/Input";
function Register() {
  const { isDarkThemeEnable, toggleTheme } = useContext(userProfileContext);
  return (
    <div className={isDarkThemeEnable ? "dark" : "light"}>
      <p
        className={isDarkThemeEnable ? "darkness" : "bright"}
        onClick={toggleTheme}>
        ChangeTheme
      </p>

      <div className="register-div">
        <div>
          <Input placeholder="Enter your name" name="Name" />
          <br></br>
          <Input placeholder="Enter your password" name="Password" />
          <br></br>
          <Input placeholder="Enter your email" name="Email" />
        </div>
        <div className="button-div">
          <Button name="Submit" />
          <Link to="/">
            <Button name="Home" />
          </Link>
          <Link to="/login">
            <Button name="Login" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Register;

import { GoogleLogo } from "../../atoms/Icons/GoogleIcon";
import { Text } from "../../atoms/IconLabel";
import "./index.css";

export const GoogleLoginButton = () => (
  <button className="login-btn">
    <div className="login-content">
    <GoogleLogo />
    <Text label="Google" />
    </div>
  </button>
);

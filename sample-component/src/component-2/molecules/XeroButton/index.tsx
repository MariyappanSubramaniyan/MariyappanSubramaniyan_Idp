import { XeroLogo } from "./../../atoms/Icons/XeroIcon";
import { Text } from "./../../atoms/IconLabel";
import "../GoogleButton/index.css";

export const XeroLoginButton = () => (
  <button className="login-btn">
    <div className="login-content">
    <XeroLogo />
    <Text label="Xero" />
    </div>
  </button>
);

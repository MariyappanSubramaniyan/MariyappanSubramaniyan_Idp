import { StripeLogo } from "./../../atoms/Icons/StripeIcon";
import { Text } from "./../../atoms/IconLabel";
import "../GoogleButton/index.css";

export const StripeLoginButton = () => (
  <button className="login-btn">
    <div className="login-content">
      <StripeLogo />
      <Text label="Stripe" />
    </div>
  </button>
);

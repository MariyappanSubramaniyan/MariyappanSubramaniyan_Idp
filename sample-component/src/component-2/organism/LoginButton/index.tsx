import { GoogleLoginButton } from "../../molecules/GoogleButton";
import { StripeLoginButton } from "../../molecules/StripeButton";
import { XeroLoginButton } from "../../molecules/XeroButton";
import "./index.css";

export const SocialLoginOptions = () => (
  <div className="social-login-options">
    <GoogleLoginButton />
    <StripeLoginButton />
    <XeroLoginButton />
  </div>
);

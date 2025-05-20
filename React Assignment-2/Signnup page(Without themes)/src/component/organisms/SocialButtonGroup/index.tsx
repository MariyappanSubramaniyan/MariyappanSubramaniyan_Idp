import { StyledContainer } from "./index";
import SocialButton from "@component/molecules/SocialButton";
import GoogleIcon from "@assets/icons/google.svg";
import StripeIcon from "@assets/icons/stripe.svg";
import XeroIcon from "@assets/icons/xero.svg";
import { SOCIAL_PROVIDERS } from "@utils/constants";
const SocialAuthButtonsOrganism = () => (
   <StyledContainer>
    <SocialButton imageSrc={GoogleIcon} label={SOCIAL_PROVIDERS.google} />
    <SocialButton imageSrc={StripeIcon} label={SOCIAL_PROVIDERS.stripe} />
    <SocialButton imageSrc={XeroIcon} label={SOCIAL_PROVIDERS.xero} />
  </StyledContainer>
);

export default SocialAuthButtonsOrganism;

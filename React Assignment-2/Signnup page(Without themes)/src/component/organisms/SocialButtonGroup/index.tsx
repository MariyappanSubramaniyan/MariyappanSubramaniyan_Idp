import { styled } from "@mui/material";
import SocialButton from "../../molecules/SocialButton";
import GoogleIcon from "../../../assets/icons/google.svg";
import StripeIcon from "../../../assets/icons/stripe.svg";
import XeroIcon from "../../../assets/icons/xero.svg";

const SocialButtonOrganismContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  width: "400px", 
  boxSizing: "border-box",
});

const SocialButtonOrganism = () => (
  <SocialButtonOrganismContainer>
    <SocialButton imageSrc={GoogleIcon} label="Google" />
    <SocialButton imageSrc={StripeIcon} label="Stripe" />
    <SocialButton imageSrc={XeroIcon} label="Xero" />
  </SocialButtonOrganismContainer>
);

export default SocialButtonOrganism;
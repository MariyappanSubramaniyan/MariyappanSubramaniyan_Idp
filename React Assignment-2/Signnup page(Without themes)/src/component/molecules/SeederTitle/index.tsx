import { SEEDER_TITLE, ALT_TEXTS } from "@utils/constants";
import { StyledImage, StyledImageBottom, StyledTitle, Container } from "./index";
import SeederImage from "@assets/icons/SeederImage.svg";
import CashImage from "@assets/icons/CashImage.svg";

const SeederTitle = () => {
  return (
    <Container>
      <StyledImage src={SeederImage} alt={ALT_TEXTS.SEEDER_IMAGE} />
      <StyledTitle variant="h5" text={SEEDER_TITLE} />
      <StyledImageBottom src={CashImage} alt={ALT_TEXTS.CASH_IMAGE} />
    </Container>
  );
};

export default SeederTitle;

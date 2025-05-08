import { CashAccelerationContainer, StyledImage, StyledText } from "./style";
import { TITLE } from "@utils/constants";
import InfoCircle from "@assets/icons/info-circle.svg";

const CashAccelerationHeader = () => {
  return (
    <CashAccelerationContainer>
      <StyledText text={TITLE} variant="h2" />
      <StyledImage src={InfoCircle} alt="info-circle" />
    </CashAccelerationContainer>
  );
};

export default CashAccelerationHeader;

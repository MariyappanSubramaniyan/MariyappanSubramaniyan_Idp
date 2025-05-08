import { RefreshContainer, StyledImage, StyledText } from "./style";
import { REFRESH } from "@utils/constants";
import RefreshIcon from "@assets/icons/refresh-icon.svg";

const RefreshMolecule = () => {
  return (
    <RefreshContainer>
      <StyledImage src={RefreshIcon} alt="refresh-icon" />
      <StyledText text={REFRESH} />
    </RefreshContainer>
  );
};

export default RefreshMolecule;

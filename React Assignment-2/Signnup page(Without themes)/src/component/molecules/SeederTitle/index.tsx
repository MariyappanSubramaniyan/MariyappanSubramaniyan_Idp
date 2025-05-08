import { styled } from "@mui/material/styles";
import Typography from "../../atoms/Typography";
import { SEEDER_TITLE } from "../../../utils/data";
import Image from "../../atoms/Images"; 
import SeederImage from "../../../assets/icons/SeederImage.svg";
import CashImage from "../../../assets/icons/CashImage.svg";

const StyledImage = styled(Image)({
  position:"absolute",
  width: "29px",
  height: "28px",
  marginTop: "-120px",
});

const StyledImageBottom = styled(Image)({
  width: "457px",
  height: "457px",
  top: "178px",
  left: "59.95px",
});

const StyledTitle = styled(Typography)({
  position:"absolute",
  fontFamily: "Gilroy",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "100%",
  letterSpacing: "0%",
  verticalAlign: "bottom",
  color: "#E8E7F0",
  marginTop: "-120px",
  marginLeft:"40px"
});

const SeederTitle = () => {
  return (
    <div>
      <StyledImage src={SeederImage} alt="Image before title" />
      <StyledTitle variant="h5" text={SEEDER_TITLE} />
      <StyledImageBottom src={CashImage} alt="Image below title" />
    </div>
  );
};

export default SeederTitle;

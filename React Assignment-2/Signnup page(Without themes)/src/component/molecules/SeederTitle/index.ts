import { styled } from "@mui/material/styles";
import Typography from "../../atoms/Typography";
import Image from "../../atoms/Images";

const Container = styled("div")({
  position: "relative",
  height: "500px", // or appropriate height to contain absolute elements
});

const StyledImage = styled(Image)({
  position: "absolute",
  width: "29px",
  height: "28px",
  marginTop: "-120px",
});

const StyledImageBottom = styled(Image)({
  position: "absolute",
  width: "457px",
  height: "457px",
  top: "178px",
  left: "59.95px",
});

const StyledTitle = styled(Typography)({
  position: "absolute",
  fontFamily: "Gilroy",
  fontWeight: 700,
  fontSize: "24px",
  lineHeight: "100%",
  letterSpacing: "0%",
  verticalAlign: "bottom",
  color: "#E8E7F0",
  marginTop: "-120px",
  marginLeft: "40px",
});

export default {
  Container,
  StyledImage,
  StyledImageBottom,
  StyledTitle,
};

import { styled } from "@mui/material/styles";
import SeederTitle from "../../molecules/SeederTitle";

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",  
  alignItems: "center",     
  width: "575px",
  height: "779px",
  background: "#393552",
  padding: "20px",           
});

const SeederLeftPart = () => {
  return (
    <StyledContainer>
      <SeederTitle />
    </StyledContainer>
  );
};

export default SeederLeftPart;

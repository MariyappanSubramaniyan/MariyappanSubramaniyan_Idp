import { styled } from "@mui/material/styles";
import SeederLeftPart from "../../organisms/SeederLeft";
import SignUpFormOrganism from "../../organisms/SignupForm";

const MainContainer = styled("div")({
  display: "flex",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});

const LeftContainer = styled("div")({
  width: "575px",
  height: "100vh",
  flexShrink: 0, 
  position: "relative",
});

const RightContainer = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#19181C",
  padding: "0 100px",
  boxSizing: "border-box",
});

const SignupPageTemplate = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <SeederLeftPart />
      </LeftContainer>

      <RightContainer>
        <SignUpFormOrganism />
      </RightContainer>
    </MainContainer>
  );
};

export default SignupPageTemplate;

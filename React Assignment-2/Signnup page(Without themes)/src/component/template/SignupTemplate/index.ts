import { styled } from "@mui/material/styles";

export const MainWrapper = styled("section")({
  display: "flex",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
});

export const LeftSection = styled("aside")({
  width: "575px",
  height: "100vh",
  flexShrink: 0,
  position: "relative",
});

export const RightSection = styled("main")({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#19181C",
  padding: "0 100px",
  boxSizing: "border-box",
});

import { styled } from "@mui/material/styles";
import InputField from "@component/atoms/Input";
import ButtonAtom from "@component/atoms/Button";
import DividerAtom from "@component/atoms/Divider";

export const StyledFormContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "434px",
  padding: "20px",
  marginRight: "200px",
  boxSizing: "border-box",
});

export const StyledButton = styled(ButtonAtom)({
  width: "400px",
  height: "60px",
  borderRadius: "12px",
  marginTop: "20px",
  textTransform: "none",
});

export const StyledDivider = styled(DividerAtom)({
  borderTopColor: "#413F4D",
  color: "#fff",
  "&::before, &::after": {
    borderTopColor: "#413F4D",
  },
});

export const StyledInputField = styled(InputField)({
  width: "100%",
  backgroundColor: "transparent",
  borderRadius: "12px",
  "& .MuiInputBase-root": {
    color: "#C9C8CC",
    padding: "0 12px",
    height: "56px",
    borderRadius: "12px",
    "& fieldset": {
      borderColor: "#413F4D",
      borderRadius: "12px",
    },
    "&:hover fieldset": {
      borderColor: "#413F4D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#413F4D",
      boxShadow: "none",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#C9C8CC",
    opacity: 0.7,
  },
});

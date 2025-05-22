import MuiSearch from "@components/atoms/InputField";
import { styled } from "@mui/material";
import theme from '../../../theme/theme';

export const StyledSearch = styled(MuiSearch)({
  width: theme.custom.inputField.width,
  height: theme.custom.inputField.height,
  borderRadius: theme.custom.inputField.borderRadius,
  padding: theme.spacing(1),
  border: `1px solid ${theme.custom.inputField.borderColor}`,
  '& input::placeholder': {
    color: theme.custom.inputField.placeholderColor,
  },
});

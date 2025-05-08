import { styled,Box} from "@mui/material";
import { theme } from "../../../theme/theme";

export const ContractSectionContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  paddingTop: theme.spacing(2.5),
  backgroundColor:theme.palette.background.default,
});

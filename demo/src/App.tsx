import "./App.css";
import CandidatesTable from "./components/organisms/CandidatesTable";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CandidatesTable />
    </ThemeProvider>
  );
}

export default App;


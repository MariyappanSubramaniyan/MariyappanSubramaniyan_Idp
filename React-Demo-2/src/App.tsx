import TransactionTable from '@components/organisms/TransactionTable'
import './App.css'
import { ROWS} from '@utils/constants'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TransactionTable rows={ROWS} />
    </ThemeProvider>
  )
}

export default App

import { Container } from '@mui/material'
import UserManager from './components/organisms/UserManager'

export default function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <UserManager />
    </Container>
  )
}

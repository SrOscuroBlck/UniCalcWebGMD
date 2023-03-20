import './App.css'
import { LoginContainer } from './components/LogInContainer/LoginContainer'
import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <LoginContainer />
      </AuthProvider>
    </>
  )
}

export default App

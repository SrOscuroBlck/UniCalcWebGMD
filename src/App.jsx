import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginContainer } from "./components/LogInContainer/LoginContainer";
import HomeContainer from "./components/HomEContainer/HomeContainer";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtecteDRouted/ProtectedRouted";

function App() {
  return (
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomeContainer />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </AuthProvider>
  );
}

export default App;

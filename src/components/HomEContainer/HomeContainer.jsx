import { useAuth } from "../../contexts/AuthContext";

function HomeContainer() {

  const { user, logout, loading } = useAuth();

  // El user es super importante ya que ahi esta el uid de firestore

  const handleLogout = async () => {
    await logout();
  }

  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      <h1>Welcome {user.email}</h1>

      <button onClick={handleLogout}>Logout</button>

    </div>
  );
}

export default HomeContainer;
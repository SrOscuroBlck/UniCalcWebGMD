import { useAuth } from "../../contexts/AuthContext";
import Sidebar from "./SideBar/SidebBar";
import "./Home.css";
import Navbar from "./NavBar/NavBar";

function HomeContainer() {

  const { user, logout, loading } = useAuth();

  // El user es super importante ya que ahi esta el uid de firestore

  const handleLogout = async () => {
    await logout();
  }

  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <Sidebar user = {user} />
      <section id="wrapper">
        <Navbar/>
      </section>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default HomeContainer;
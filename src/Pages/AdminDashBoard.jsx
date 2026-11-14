import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function AdminDashboard() {

  const { user, logout } = useAuth();

  return (
    <div className="dashboard">

      <h1>Admin Dashboard</h1>
      <h2>Welcome, {user.name}</h2>

      <h3>Menu</h3>

      <Link to="/accounts">
        <button>Accounts</button>
      </Link>

      <Link to="/encryption">
  <button>Encryption Demo</button>
</Link>

      <button onClick={logout}>Logout</button>

    </div>
  );
}

export default AdminDashboard;
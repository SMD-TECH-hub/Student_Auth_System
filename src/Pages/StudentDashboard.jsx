import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function StudentDashboard() {

  const { user, logout } = useAuth();

  return (
    <div className="dashboard">

      <h1>Student Dashboard</h1>
      <h2>Welcome, {user.name}</h2>

      <h3>Menu</h3>

      <Link to="/accounts">
        <button>Accounts</button>
      </Link>

      <button onClick={logout}>Logout</button>

    </div>
  );
}

export default StudentDashboard;
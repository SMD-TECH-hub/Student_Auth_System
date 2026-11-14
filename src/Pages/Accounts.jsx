
import { useAuth } from "../Context/AuthContext";

function Accounts() {

  const { user, logout } = useAuth();

  return (
    <div className="dashboard">

      <h1>Accounts Management</h1>

      <h2>Welcome, {user.name}</h2>

      <p>Admin Account Section</p>

      <hr />

      <h3>Account Details</h3>

      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      <h3>Admin Permissions</h3>

      <ul>
        <li>View all student accounts</li>
        <li>Create new accounts</li>
        <li>Update account details</li>
        <li>Delete accounts</li>
        <li>Manage user permissions</li>
      </ul>

      <button onClick={logout}>Logout</button>

    </div>
  );
}

export default Accounts;

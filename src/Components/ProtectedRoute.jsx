import { Navigate } from "react-router-dom";
import {useAuth} from'../Context/AuthContext';

function ProtectedRoute({ children, allowedRole }) {

  const { user } = useAuth();

  // Authentication check
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Authorization check
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

export default ProtectedRoute;
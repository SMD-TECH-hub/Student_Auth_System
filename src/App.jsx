
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./Context/AuthContext";

import Login from "./Pages/Login";
import StudentDashboard from "./Pages/StudentDashboard";
import AdminDashboard from "./Pages/AdminDashBoard";
import Accounts from "./Pages/Accounts";

import ProtectedRoute from "./Components/ProtectedRoute";
import EncryptionDemo from "./Pages/EncryptionDemo";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Login />} />

          <Route
            path="/student"
            element={
              <ProtectedRoute allowedRole="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Admin Only Accounts Page */}
          <Route
            path="/accounts"
            element={
              <ProtectedRoute allowedRole="admin">
                <Accounts />
              </ProtectedRoute>
            }
          />

          <Route
  path="/encryption"
  element={
    <ProtectedRoute allowedRole="admin">
      <EncryptionDemo />
    </ProtectedRoute>
  }
/>

          <Route
            path="/unauthorized"
            element={<h1>403 - Access Denied</h1>}
          />

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

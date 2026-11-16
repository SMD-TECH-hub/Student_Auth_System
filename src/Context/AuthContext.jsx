import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Authentication
  const login = (email, password) => {

    const users = [
      {
        email: "admin@gmail.com",
        password: "admin123",
        role: "admin",
        name: "Admin"
      },
      {
        email: "admin1@gmail.com",
        password: "admin1",
        role: "admin1",
        name: "Admin1"
      },
      {
        email: "student@gmail.com",
        password: "student123",
        role: "student",
        name: "Rahul"
      }
    ];

    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (validUser) {

      const userData = {
        email: validUser.email,
        role: validUser.role,
        name: validUser.name
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      return true;
    }

    return false;
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
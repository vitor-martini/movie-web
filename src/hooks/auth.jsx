import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import avatarPlaceholder from "../assets/avatar-placeholder.svg";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { user } = response.data;
      user.avatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

      setUser(user);
      localStorage.setItem("@movies:user", JSON.stringify(user));
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível logar, verifique as informações.");
      }
    }
  }

  async function signOut() {
    setUser({});
    await api.delete("/sessions");
    localStorage.removeItem("@movies:user");
  }

  useEffect(() => {
    const user = localStorage.getItem("@movies:user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user }}>
      { children }
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
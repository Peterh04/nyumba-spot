import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import api, { refreshAccessToken } from "../modules/apiClient.js";
import { setAccessToken } from "../modules/accessTokenModule.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const intialzeUser = async () => {
      setLoading(true);

      try {
        const token = await refreshAccessToken();
        if (token) {
          const { data } = await api.get("/user/me");
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Auth initialization failed:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    intialzeUser();
  }, []);

  const logOutUser = useCallback(async () => {
    try {
      await api.post("/api/users/logout");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setUser(null);
      setAccessToken(null);
      setLoading(false);
      navigate("/login");
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) throw new Error("useAuth must be used within AuthProvider");

  return ctx;
};

import { BrowserRouter } from "react-router-dom";
import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { ROLES } from "../services/utils";

export function Routes() {
  const { user } = useAuth();

  const routesMap = {
    [ROLES.ADMIN]: AdminRoutes,
    [ROLES.USER]: UserRoutes
  };

  const AppRoutes = routesMap[user.role] || null;

  return (
    <BrowserRouter>
      {user.id ? (AppRoutes ? <AppRoutes /> : <AuthRoutes />) : <AuthRoutes />}
    </BrowserRouter>
  );
}

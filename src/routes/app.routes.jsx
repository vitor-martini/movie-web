import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { New } from "../pages/New";
import { Profile } from "../pages/Profile";
import { CollectionProvider } from "../hooks/collection";

export function AppRoutes({ user }) {
  return (
    <CollectionProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/new" element={user.admin ? <New /> : <Navigate to="/" />} />
        <Route path="/edit/:id" element={user.admin ? <New /> : <Navigate to="/" />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </CollectionProvider>
  );
}
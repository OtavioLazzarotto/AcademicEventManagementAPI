import { JSX, useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Login from "../pages/Auth/Login";
import { StatusPermission } from "../tdos/user.dto";
import Unauthorized from "../pages/Unauthorized/Unauthorized";
import Register from "../pages/Auth/Register";
import Home from "../pages/home/Home";
import LayoutWithNavbar from "../components/navbar/LayoutWithNavbar";
import List from "../pages/Events/List/List";
import RegisterEvent from "../pages/Events/Register/RegisterEvent";
import UpdateEvent from "../pages/Events/Update/UpdateEvent";

const PrivateRoute = ({
  children,
  requiredRoles,
}: {
  children: JSX.Element;
  requiredRoles: StatusPermission[];
}) => {
  const { auth, user } = useContext(AuthContext);

  if (!auth) return <Navigate to="/login" />;

  const hasPermission = requiredRoles.includes(user?.roles as StatusPermission);

  if (!hasPermission) return <Navigate to="/unauthorized" />;

  return children;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PrivateRoute
              requiredRoles={[StatusPermission.ADM, StatusPermission.USER]}
            >
              <LayoutWithNavbar />
            </PrivateRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/eventos/lista" element={<List />} />
          <Route path="/eventos/cadastrar" element={<RegisterEvent />} />
          <Route
            path="/eventos/editar/:eventId"
            element={
              <PrivateRoute requiredRoles={[StatusPermission.ADM]}>
                <UpdateEvent />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

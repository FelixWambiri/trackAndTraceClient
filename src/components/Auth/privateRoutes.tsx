import { useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { AppContext } from "../Context/index";

export const PrivateRoutes = () => {
  const location = useLocation();
  const { userToken } = useContext(AppContext);
  return !!userToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoutes;

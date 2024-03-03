import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";
import { RootState } from "../redux/store";
import { userSliceType } from "../redux/slice/login";

export type protectedType = {
  children: React.ReactNode;
};
const ProtectedRoute = ({ children }: protectedType) => {
  const user: userSliceType = useSelector<RootState>(
    (state) => state.user
  ) as userSliceType;
  console.log(user);

  let location = useLocation();
  if (user.users[0].isAuthenticated) {
    return <>{children}</>;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;

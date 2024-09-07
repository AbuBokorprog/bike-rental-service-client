import React, { ReactNode } from "react";
import { JWTDecode } from "../utils/JWTDecode";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { currentToken } from "../redux/store";
import { logout, TUser } from "../redux/features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";

type TReactProps = {
  children: ReactNode;
  role: undefined | string;
};

const ProtectedRoute = ({ children, role }: TReactProps) => {
  const Navigate = useNavigate();
  const token = useAppSelector(currentToken);

  let user;

  if (token) {
    user = JWTDecode(token);
  }

  const dispatch = useAppDispatch();

  if (role !== undefined && role !== (user as TUser)?.role) {
    dispatch(logout());
    Navigate("/login");
  }
  if (!token) {
    Navigate("/login");
  }

  return { children };
};

export default ProtectedRoute;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Authentication = (WrappedComponent) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <WrappedComponent />;
  }

  return <Navigate to="/" />;
};

export default Authentication;

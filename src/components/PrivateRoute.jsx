import React from "react";
import { Layout } from "./Layout";

export const PrivateRoute = ({ children }) => {
  return <Layout>{children}</Layout>;
};

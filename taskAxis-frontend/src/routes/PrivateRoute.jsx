import React, { useContext} from "react";
import {Navigate, useLocation} from "react-router";
import Spinner from "../components/Spinner";
import { AuthContext } from "../provider/Contexts";


const PrivateRouter = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Spinner/>;
  }
  if (user && user?.email) {
    
    return children;
  }
  return <Navigate state={{from: location?.pathname}} to="/auth/login" replace/>;
};

export default PrivateRouter;
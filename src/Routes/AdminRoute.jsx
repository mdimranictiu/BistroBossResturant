import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import useAdmin from "../hook/useAdmin";

const AdminRoute = (children) => {
    const [user,loading]=useAuth()
    const [isAdmin,isAdminLoading]=useAdmin()
    const location=useLocation()
    if(loading || isAdminLoading){
      return <><p>Loading</p></>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>
  
};

export default AdminRoute;
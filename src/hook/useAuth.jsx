import { useContext } from "react";
import { AuthContext } from "../components/Providers/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext); // Use useContext to access the context
    return auth;
};

export default useAuth;

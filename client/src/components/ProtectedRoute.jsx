import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { admin } = useContext(AuthContext);
    if (!admin) return <Navigate to="/adminlogin" />;
    return children;
};

export default ProtectedRoute;

import {getAuthTokenInLocalStorage} from "../utils/auth.js";
import {Navigate, Outlet} from "react-router-dom";

export default function ProtectedRoute() {
    const token = getAuthTokenInLocalStorage();

    return Boolean(token) ? <Outlet/> : <Navigate to="/sign-up" replace/>
}
import {getAuthTokenInLocalStorage} from "../utils/auth.js";
import {Navigate, Outlet} from "react-router-dom";

export default function AuthRoute() {
    const token = getAuthTokenInLocalStorage();

    return Boolean(token) ? <Navigate to="/" replace/> : <Outlet/>
}
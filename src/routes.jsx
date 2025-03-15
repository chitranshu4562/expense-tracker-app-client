import {Route, Routes} from "react-router-dom";
import NavigationPage from "./pages/navigation-page/NavigationPage.jsx";
import SignupPage from "./pages/signup-page/SignupPage.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import AuthRoute from "./pages/AuthRoute.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoute/>}>
                <Route path="/" element={<NavigationPage/>} />
            </Route>
            <Route element={<AuthRoute/>}>
                <Route path="/sign-up" element={<SignupPage/>} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;
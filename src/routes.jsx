import {Route, Routes} from "react-router-dom";
import NavigationPage from "./pages/navigation-page/NavigationPage.jsx";
import SignupPage from "./pages/signup-page/SignupPage.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<NavigationPage/>} />
            <Route path="/sign-up" element={<SignupPage/>} />
        </Routes>
    )
}

export default AppRoutes;
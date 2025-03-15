import {Box, Button, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {
    getAuthTokenInLocalStorage, getTokenExpFromLocalStorage,
    getUserDataInLocalStorage,
    removeAuthDataFromLocalStorage
} from "../../utils/auth.js";
import {dispatch} from "../../redux-store/store.js";
import {deleteAuthToken, deleteUserData, storeAuthToken, storeUserData} from "../../redux-store/slices/authSlice.js";
import {useNavigate} from "react-router-dom";
import {logout} from "../../api/sessionApi.js";
import {closeLoader, displayLoader} from "../../utils/util.js";
import useCustomSnackbar from "../../custom-hooks/useCustomSnackbar.jsx";

export default function NavigationPage() {
    const {successNotification} = useCustomSnackbar();
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!Boolean(user)) {
            const token = getAuthTokenInLocalStorage();
            if (Boolean(token)) {
                const user = getUserDataInLocalStorage();
                if (Boolean(user)) {
                    dispatch(storeAuthToken(token));
                    dispatch(storeUserData(user));
                }
            }
        }
    }, []);

    useEffect(() => {
        const token = getAuthTokenInLocalStorage();

        let logoutTimer;
        if (Boolean(token)) {
            const tokenExpirationTime = getTokenExpFromLocalStorage(); // UNIX time in seconds
            const remainingTokenExpirationTimeInSeconds = tokenExpirationTime - Math.floor(Date.now()/1000);
            console.log(`Time: ${remainingTokenExpirationTimeInSeconds}:${typeof remainingTokenExpirationTimeInSeconds}`)

            if (remainingTokenExpirationTimeInSeconds <= 0) {
                console.log('Negative time')
                handleLogout();
            }

            logoutTimer = setTimeout(() => {
                console.log(`Auto logout for ${(remainingTokenExpirationTimeInSeconds * 1000)} ms`)
                handleLogout();
            }, remainingTokenExpirationTimeInSeconds * 1000);
        }

        return () => {
            console.log('Clearing logout timer')
            clearTimeout(logoutTimer);
        }
    }, []);

    const handleLogout = () => {
        displayLoader();
        logout().then((response) => {
            successNotification(response.data.message);
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            closeLoader();
            removeAuthDataFromLocalStorage();
            dispatch(deleteAuthToken());
            dispatch(deleteUserData());
            navigate('/sign-up');
        });
    }
    return (
        <>
            {Boolean(user) && (
                <Box>
                    <Typography>{user.name}</Typography>
                    <Button onClick={handleLogout}>Logout</Button>
                </Box>
            )}
        </>
    )
}
import {createTheme} from "@mui/material";

export const whiteTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#f5f5f5'
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff'
        },
        text: {
            primary: '#000000',
            secondary: '#555555'
        }
    }
});
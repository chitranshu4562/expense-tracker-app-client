import {Backdrop, CircularProgress} from "@mui/material";

export default function CircularBackdropLoader() {
    return (
        <Backdrop
            open
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
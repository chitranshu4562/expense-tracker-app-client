import {useSnackbar} from "notistack";
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const useCustomSnackbar = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const action = (snackbarKey) => (
        <IconButton
            size="small"
            onClick={() => closeSnackbar(snackbarKey)}
            color="inherit"
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    )

    const successNotification = (message) => {
        enqueueSnackbar(message, { variant: 'success', action })
    }

    const errorNotification = (message) => {
        enqueueSnackbar(message, { variant: 'error', action })
    }

    return { successNotification, errorNotification };
}

export default useCustomSnackbar;
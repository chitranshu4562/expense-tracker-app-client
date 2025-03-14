import {useState} from "react";
import {Box, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function PasswordField({ name, value, onChange, styles, label, placeholder, onBlur, error }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Box sx={styles}>
            <Typography variant="h6">{label}</Typography>
            <TextField
                fullWidth
                variant="outlined"
                name={name}
                value={value}
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                InputLabelProps={{ shrink: false }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton edge="end" onClick={handleShowPassword}>
                                {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                size="small"
                error={Boolean(error)}
                helperText={error}
            />
        </Box>
    )
}
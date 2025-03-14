import {IconButton, InputAdornment, TextField} from "@mui/material";
import {useState} from "react";
import { Visibility, VisibilityOff, Lock } from "@mui/icons-material";

export default function PasswordInput({ value, onChange }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <TextField
            fullWidth
            variant="outlined"
            label="Password"
            name="password"
            value={value}
            onChange={onChange}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Lock/>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}
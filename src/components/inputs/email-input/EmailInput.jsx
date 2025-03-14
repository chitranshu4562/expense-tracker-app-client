import {InputAdornment, TextField} from "@mui/material";
import {Email} from "@mui/icons-material";

export default function EmailInput({ value, onChange }) {
    return (
        <TextField
            fullWidth
            variant="outlined"
            label="Email"
            type="email"
            value={value}
            name="email"
            onChange={onChange}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Email/>
                    </InputAdornment>
                )
            }}
        />
    )
}
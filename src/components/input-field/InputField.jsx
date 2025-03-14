import {Box, TextField, Typography} from "@mui/material";

export default function InputField({ name, label, type, value, placeholder, onChange, onBlur, styles, error = '' }) {
    return (
        <Box sx={styles}>
            <Typography variant="h6">{label}</Typography>
            <TextField
                fullWidth
                variant="outlined"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                InputLabelProps={{ shrink: false }}
                size="small"
                error={Boolean(error)}
                helperText={error}
            />
        </Box>
    )
}
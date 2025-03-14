import {useFormik} from "formik";
import {Box, Button, Typography} from "@mui/material";
import InputField from "../../components/input-field/InputField.jsx";
import PasswordField from "../../components/password-field/PasswordField.jsx";
import * as Yup from 'yup';
import useCustomSnackbar from "../../custom-hooks/useCustomSnackbar.jsx";
import {useMutation} from "@tanstack/react-query";
import {userRegistration} from "../../api/usersApi.js";
import {closeLoader, displayLoader} from "../../utils/util.js";

export default function SignupPage() {
    const {successNotification, errorNotification} = useCustomSnackbar();
    const mutation = useMutation({
        mutationFn: userRegistration
    });
    const handleSignup = async (values) => {
        displayLoader();
        try {
            const response = await mutation.mutateAsync(values)
            console.log('Response: ', response);
            successNotification('User is registered successfully');
            signupForm.resetForm();
        } catch (error) {
            console.error('Error: ', error);
            errorNotification('An error occurred')
        } finally {
            closeLoader();
        }
    }

    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .trim()
                .required('*Required')
                .min(4, 'Name must have at least 4 characters'),
            email: Yup.string()
                .trim()
                .email('Invalid email address')
                .required('*Required'),
            password: Yup.string()
                .trim()
                .required('*Required')
                .min(6, 'Password must have at least 6 characters')
        }),
        onSubmit: handleSignup,
        validateOnMount: true
    })

    return (
        <form onSubmit={signupForm.handleSubmit}>
            <Box sx={{
                width: '80%',
                margin: '2rem auto'
            }}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        fontSize: '2.5rem',
                        fontWeight: 500
                    }}
                >Create your account</Typography>
                <Box>
                    <InputField
                        name="name"
                        type="text"
                        value={signupForm.values.name}
                        placeholder="Enter your full name"
                        label="Name"
                        onChange={signupForm.handleChange}
                        onBlur={signupForm.handleBlur}
                        styles={{
                            my: 2
                        }}
                        error={signupForm.touched.name ? signupForm.errors.name : ''}
                    />
                    <InputField
                        name="email"
                        type="email"
                        value={signupForm.values.email}
                        placeholder="Enter your email"
                        label="Email"
                        onChange={signupForm.handleChange}
                        onBlur={signupForm.handleBlur}
                        styles={{
                            my: 2
                        }}
                        error={signupForm.touched.email ? signupForm.errors.email : ''}
                    />
                    <PasswordField
                        name="password"
                        placeholder="Enter your password"
                        label="Password"
                        value={signupForm.values.password}
                        onChange={signupForm.handleChange}
                        onBlur={signupForm.handleBlur}
                        styles={{
                            my: 2
                        }}
                        error={signupForm.touched.password ? signupForm.errors.password : ''}
                    />
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                        my: 1
                    }}
                    disabled={!signupForm.isValid}
                    type="submit"
                >Continue</Button>
            </Box>
        </form>
    )
}
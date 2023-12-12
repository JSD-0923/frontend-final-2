import Typography from "@mui/material/Typography";
import {Avatar, Divider, Grid, InputAdornment, InputLabel, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useUser } from "../hooks/useAppAPIs";
import { useState } from "react";
import LoadingProgress from "../components/Loading/LoadingProgress";
import {ReactComponent as DeleteIcon} from "../assets/icons/delete-small.svg";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const PersonalInfoPage = () => {
    const [isFormActive, setIsFormActive] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const { userData, isLoading } = useUser();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmitHandler = () => {
        setIsFormActive((prevState) => !prevState);
    };

    if (isLoading) {
        return <LoadingProgress />;
    }
    return (
        <>
            <Paper elevation={0} sx={{ width: "100%" }}>
                <Typography variant={"h3"} component={"h3"}>
                    Personal Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2rem', alignItems: 'flex-end', marginBottom: '2rem', marginTop: '1rem' }}>
                    <Avatar sx={{ height: ['30px', '50px', '80px'], width: ['30px', '50px', '80px'] }} src="/broken-image.jpg" />
                    <Button variant={'contained'} sx={{ width: '136px', height: '40px' }}>Upload</Button>
                    <Button variant={'outlined'} color="error" sx={{ width: '136px', height: '40px' }} startIcon={<DeleteIcon/>}>Delete</Button>
                </Box>
                <Divider sx={{ marginTop: "1rem", marginBottom: "1rem" }} />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "auto",

                        paddingBottom: "1rem",
                    }}
                >
                    {isFormActive ? (
                        <form style={{display: 'flex'}} onSubmit={handleSubmit(onSubmitHandler)}>
                            <Grid container sx={{ width: ["100%", "70%"] }} spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="firstName">
                                        First Name
                                    </InputLabel>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        value={userData?.firstName}
                                        placeholder={"Enter First Name"}
                                        {...register("firstName", {
                                            minLength: {
                                                value: 3,
                                                message: "Minimum length is 3 characters",
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "Maximum length is 20 characters",
                                            },
                                        })}
                                        error={!!errors.firstName}
                                        helperText={errors.firstName && errors.firstName.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="lastName">
                                        Last Name
                                    </InputLabel>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        placeholder={"Enter Last Name"}
                                        value={userData?.lastName}
                                        {...register("lastName", {
                                            minLength: {
                                                value: 3,
                                                message: "Minimum length is 3 characters",
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "Maximum length is 20 characters",
                                            },
                                        })}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName && errors.lastName.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="street">
                                        Email
                                    </InputLabel>
                                    <TextField
                                        placeholder={"Enter Email"}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        value={userData?.email}
                                        name="email"
                                        {...register("email", {
                                            minLength: {
                                                value: 3,
                                                message: "Minimum length is 3 characters",
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "Maximum length is 20 characters",
                                            },
                                        })}
                                        error={!!errors.street}
                                        helperText={errors.street && errors.street.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="mobileNumber">
                                        Mobile Number
                                    </InputLabel>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        value={userData?.mobileNumber}
                                        placeholder={"Enter Mobile Number"}

                                        error={!!errors.mobileNumber}
                                        helperText={errors.mobileNumber && errors.mobileNumber.message}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="state">
                                        Birthday
                                    </InputLabel>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        name="birthday"
                                        value={userData?.birthDate}
                                        placeholder={"Enter Birthday"}
                                        {...register("state", {})}
                                        error={!!errors.state}
                                        helperText={errors.state && errors.state.message}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Divider/>
                                    <Typography sx={{marginTop: '1rem', marginBottom: '1rem'}} variant={"h3"} component={"h3"}>
                                        Change Password
                                    </Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="currentPassword">
                                                Current Password
                                            </InputLabel>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                name="currentPassword"
                                                type={showCurrentPassword ? 'text' : 'password'}
                                                {...register("currentPassword", {})}
                                                error={!!errors.currentPassword}
                                                helperText={errors.currentPassword && errors.currentPassword.message}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                                                edge="end"
                                                            >
                                                                {showCurrentPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="newPassword">
                                                New Password
                                            </InputLabel>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                name="newPassword"
                                                type={showNewPassword ? 'text' : 'password'}
                                                {...register("newPassword", {})}
                                                error={!!errors.newPassword}
                                                helperText={errors.newPassword && errors.newPassword.message}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                                                edge="end"
                                                            >
                                                                {showNewPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <InputLabel sx={{ color: "TypeHighEmphasis.main" }} htmlFor="confirmPassword">
                                                Confirm Password
                                            </InputLabel>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                name="confirmPassword"
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                {...register("confirmPassword", {})}
                                                error={!!errors.confirmPassword}
                                                helperText={errors.confirmPassword && errors.confirmPassword.message}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                                edge="end"
                                                            >
                                                                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                    </Grid>

                                </Grid>

                            </Grid>

                            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: "136px", alignSelf: 'flex-end' }}>
                                Save Changes
                            </Button>
                        </form>
                    ) : (
                        <Box sx={{display: 'flex', width: ['100%','100%','100%',"90%"] }}>
                            <Grid  container spacing={1}>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography variant="body1" sx={{marginBottom: '1rem'}}>
                                        First Name:
                                    </Typography>
                                    <Typography variant="body1" sx={{ backgroundColor: '#769eb5', maxWidth:'215px', padding: '16px'}}>
                                        {userData.firstName}
                                    </Typography>
                                </Grid>
                                <Grid  item xs={12} sm={12} md={6}>
                                    <Typography variant="body1" sx={{marginBottom: '1rem'}}>
                                        Last Name:
                                    </Typography>
                                    <Typography variant="body1" sx={{ backgroundColor: '#769eb5', maxWidth:'215px', padding: '16px'}}>
                                        {userData.lastName}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1" sx={{marginBottom: '1rem', marginTop: '1rem'}}>
                                        Email:
                                    </Typography>
                                    <Typography variant="body1" sx={{ backgroundColor: '#769eb5', maxWidth:'520px', padding: '16px'}}>
                                        {userData.email}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1" sx={{marginBottom: '1rem', marginTop: '1rem'}}>
                                        Mobile Number:
                                    </Typography>
                                    <Typography variant="body1" sx={{ backgroundColor: '#769eb5', maxWidth:'215px', padding: '16px'}}>
                                        {userData.mobileNumber}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography variant="body1" sx={{marginBottom: '1rem', marginTop: '1rem'}}>
                                        Date of Birth:
                                    </Typography>
                                    <Typography variant="body1" sx={{ backgroundColor: '#769eb5', maxWidth:'215px', padding: '16px'}}>
                                        {userData.birthDate}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2, width: "136px", alignSelf: 'flex-end' }}
                                onClick={() => setIsFormActive((prevState) => !prevState)}
                            >
                                Change
                            </Button>
                        </Box>
                    )}
                </Box>
            </Paper>
        </>
    );
};

export default PersonalInfoPage;

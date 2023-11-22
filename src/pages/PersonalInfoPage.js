import Typography from "@mui/material/Typography";
import { Avatar, Divider, Grid, InputLabel, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useUser } from "../hooks/useAppAPIs";
import { useState } from "react";
import LoadingProgress from "../components/Loading/LoadingProgress";
import {ReactComponent as DeleteIcon} from "../assets/icons/delete-small.svg";

const PersonalInfoPage = () => {
    const [isFormActive, setIsFormActive] = useState(false);
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
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: '4rem', alignItems: 'flex-end', marginBottom: '2rem', marginTop: '1rem' }}>
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
                        width: "90%",
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
                            </Grid>
                            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: "136px", alignSelf: 'flex-end' }}>
                                Save Changes
                            </Button>
                        </form>
                    ) : (
                        <div style={{ mt: 2, width: "100%" }}>
                            <Grid  container spacing={2}>
                                <Grid item xs={6}>
                                    <Typography variant="body1">
                                        <span style={{ fontWeight: 'bold' }}>First Name:</span>  {userData.firstName}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1">
                                        <span style={{ fontWeight: 'bold' }}>Last Name:</span>  {userData.lastName}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1">
                                        <span style={{ fontWeight: 'bold' }}>Email:</span> {userData.email}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1">
                                        <span style={{ fontWeight: 'bold' }}>Mobile Number:</span> {userData.mobileNumber}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body1">
                                        <span style={{ fontWeight: 'bold' }}>Date of Birth:</span> {userData.birthDate}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2, width: "136px" }}
                                onClick={() => setIsFormActive((prevState) => !prevState)}
                            >
                                Change
                            </Button>
                        </div>
                    )}
                </Box>
            </Paper>
        </>
    );
};

export default PersonalInfoPage;

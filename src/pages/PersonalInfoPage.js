import Typography from "@mui/material/Typography";
import {Avatar, Divider, Grid, InputLabel, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import {ReactComponent as DeleteIcon} from "../assets/icons/delete-small.svg";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import {useUser} from "../hooks/useAppAPIs";
import {useState} from "react";
import LoadingProgress from "../components/Loading/LoadingProgress";


const PersonalInfoPage = () => {

    const [isFormActive, setIsFormActive] = useState(false)
    const {userData,isLoading} = useUser()

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmitHandler = () => {
        setIsFormActive((prevState) => !prevState)
    };


    if (isLoading) {
        return (
            <LoadingProgress />
        )
    }

    return (
      <>
          <Paper elevation={0} sx={{width: '100%'}}>
              <Typography variant={'h3'} component={'h3'}>Personal Information</Typography>
              <Divider sx={{marginTop: '1rem', marginBottom: '1rem'}}/>
              <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
                  <Avatar sx={{ height: ['30px', '50px', '80px'], width: ['30px', '50px', '80px'] }} src="/broken-image.jpg" />
                  <Button variant={'contained'} sx={{ width: '136px', height: '40px' }}>Upload</Button>
                  <Button variant={'outlined'} color="error" sx={{ width: '136px', height: '40px' }} startIcon={<DeleteIcon />}>Delete</Button>
              </Box>

              <Box
                  sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                      mt: 3,
                      width: 'auto'
                  }}
              >
                  <form onSubmit={handleSubmit(onSubmitHandler)}>
                      <Grid container sx={{width: ['100%', '70%']}} spacing={2}>
                          <Grid item xs={12} sm={6}>

                              {isFormActive ?
                                  <>
                                      <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="firstName">First Name</InputLabel>
                                      <TextField
                                          variant="outlined"
                                          margin="normal"
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
                                  </>
                                   :
                                  <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="firstName">First Name: {userData.firstName}</InputLabel>
                              }

                          </Grid>
                          <Grid item xs={12} sm={6}>
                              {
                                  isFormActive ?
                                  <>
                                      <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="lastName">Last Name</InputLabel>
                                      <TextField
                                          variant="outlined"
                                          margin="normal"
                                          placeholder={"Enter Last Name"}
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
                                  </>
                                   :
                                  <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="lastName">Last Name: {userData.lastName}</InputLabel>
                              }
                          </Grid>

                          <Grid item xs={12} sm={10}>
                              {
                                  isFormActive ?
                                      <>
                                          <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="street">Email</InputLabel>
                                          <TextField
                                              placeholder={"Enter Email"}
                                              variant="outlined"
                                              margin="normal"
                                              fullWidth
                                              name="street"
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
                                      </>
                                      :
                                      <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="email">Email: {userData.email}</InputLabel>
                              }
                          </Grid>
                          <Grid item xs={12} sm={12}>
                              {
                                  isFormActive ?
                                      <>
                                          <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="mobileNumber">Mobile Number</InputLabel>
                                          <TextField
                                              variant="outlined"
                                              margin="normal"
                                              placeholder={"Enter Mobile Number"}
                                              {...register("mobileNumber", {
                                                  pattern: {
                                                      value: /^[0-9]{9}$/,
                                                      message: "Mobile Number should be 9 digits",
                                                  },
                                              })}
                                              error={!!errors.mobileNumber}
                                              helperText={errors.mobileNumber && errors.mobileNumber.message}
                                          />
                                      </> :
                                      <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="mobileNumber">Mobile Number: {userData.mobileNumber}</InputLabel>
                              }
                          </Grid>

                          <Grid item xs={12} sm={6}>
                              {
                                  isFormActive ?

                                      <>
                                          <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="state">State</InputLabel>
                                          <TextField
                                              variant="outlined"
                                              margin="normal"
                                              name="birthday"
                                              placeholder={"Enter Birthday"}
                                              {...register("state", {
                                              })}
                                              error={!!errors.state}
                                              helperText={errors.state && errors.state.message}
                                          />
                                      </> :
                                      <InputLabel sx={{ color: 'TypeHighEmphasis.main' }} htmlFor="birthday">Birthday: {userData.birthDate}</InputLabel>
                              }
                          </Grid>

                      </Grid>
                      {isFormActive &&  <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          sx={{ mt: 2 }}
                      >
                          Save Changes
                      </Button>
                      }
                  </form>
                  {
                      !isFormActive &&
                      <Button
                          variant="contained"
                          color="primary"
                          sx={{ mt: 2 }}
                          onClick={() => setIsFormActive((prevState) => !prevState)}
                      >
                          Change
                      </Button>
                  }
              </Box>

          </Paper>
      </>
    )
}

export default PersonalInfoPage;
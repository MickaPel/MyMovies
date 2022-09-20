import React from 'react';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth } from '../Firebase/firebase';
import {createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {  useNavigate } from "react-router-dom";

import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';




const StyledTextField = styled(TextField)({
  "& label": {
    color: "#fff7c2"
  },
  "&:hover label": {
    fontWeight: 400
  },
  "& label.Mui-focused": {
    color: "#fff7c2"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff7c2"
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff7c2",
      color: "#fff7c2"
    },
    "&:hover fieldset": {
      borderColor: "#fff7c2",
      borderWidth: 2
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff7c2"
    }
  }
});

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#fff7c2',
      contrastText: '#fff',
    },
  },
});

function SignUp() {

  const navigate = useNavigate();

  const formSchema = Yup.object().shape({
    pseudo: Yup.string()
      .required("Pseudo is required")
      .min(4, "Pseudo length should be at least 4 characters")
      .max(20, "Pseudo cannot exceed more than 20 characters"),
    email: Yup.string()
      .required("Email is required")
      .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "email address is not valid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password length should be at least 8 characters")
      .max(25, "Password cannot exceed more than 25 characters"),
    cpassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords do not match")
  });

  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema)
  });

  // async function onSubmit(e, data) {
  //   e.preventDefault()
  //   try {
  //     await createUserWithEmailAndPassword(
  //       auth, data.email, data.password, data.pseudo)
      //  history.push("/");
  //     alert("User Created Successfully")
  //   } catch (error) {
  //     console.log(error)
  //     alert("User created failed")
  //     alert(error);
  //   }
  // }
  
  // const onSubmit = (data) => {
  //   console.log(data);
  //   try {
  //     createUserWithEmailAndPassword(
  //       auth, data.email, data.password, data.pseudo);
  //       await updateProfile(auth.currentUser, { displayName })

  //   setUserInformation({
  //     displayName,
  //     email: user.email,
  //     uid: user.uid,
  //     accessToken: user.accessToken,
  //   });
  //       navigate("/");
  //     alert("User Created Successfully")
      
  //   } catch (error) {
  //     console.log(error)
  //     alert("User created failed")
  //     alert(error);
  //   }
  // }
  const onSubmit = async (data) => {
      const { user } = await createUserWithEmailAndPassword(auth, data.email, data.password)
        await updateProfile(user, {
          displayName: data.pseudo
        })
        .then(() => {navigate('/')}).catch(() => console.log("signup not work"))
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 25 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h4" gutterBottom sx={{ color: '#fff7c2' }}>Inscription</Typography>
            <StyledTextField id="outlined-basic" label="Pseudo" variant="outlined" type="text" margin="dense" {...register("pseudo")} sx={{ input: { color: "#FD841F" } }} />
            {errors.pseudo ? (<> <p className='alerts' style={{ color: "#FF4A4A" }}>{errors.pseudo?.message}</p> </>) : null}
            <StyledTextField id="outlined-basic" label="E-Mail" variant="outlined" type="text" margin="dense" {...register("email")} sx={{ input: { color: "#FD841F" } }} />
            {errors.email ? (<> <p className='alerts' style={{ color: "#FF4A4A" }}>{errors.email?.message}</p> </>) : null}
            <StyledTextField id="outlined-basic" label="Mot de passe" variant="outlined" type="text" margin="dense" {...register("password")} sx={{ input: { color: "#FD841F" } }} />
            {errors.password ? (<> <p className='alerts' style={{ color: "#FF4A4A" }}>{errors.password?.message}</p> </>) : null}
            <StyledTextField id="outlined-basic" label="Confirmation mot de passe" variant="outlined" margin="dense" type="text" {...register("cpassword")} sx={{ input: { color: "#FD841F" } }} />
            {errors.cpassword ? (<> <p className='alerts' style={{ color: "#FF4A4A" }}>{errors.cpassword?.message}</p> </>) : null}
            <Button variant="outlined" type="submit" color="neutral" sx={{ marginTop: 3 }}>Valider</Button>
          </ThemeProvider>
        </Grid>
      </form>
    </div>
  )
}

export default SignUp
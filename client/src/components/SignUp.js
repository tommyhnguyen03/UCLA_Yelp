import React from 'react'
import { Typography, Grid, Paper, TextField, Button } from "@mui/material"
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate("/home");
    }

    return (
        <div id="SignUp">
            <div id="logo-container">
                <img src="yelp.png" />
            </div>
            <Typography variant="h3">B-EAT</Typography>
            <div id="signin-form-container">
                <Grid>
                    <Paper elevation={10} style={{ width: "50vh", height: "50vh" }} id="signIn-form">
                        <Typography variant="h4">Sign in here!</Typography>
                        <TextField label="Username" placeholder='Enter your username!' fullWidth required />
                        <TextField label="Password" placeholder='Enter your password!' type="password" fullWidth required />
                        <Button type='submit' color='primary' onClick={handleSubmit}>Sign In</Button>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}

export default SignUp
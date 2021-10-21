import React from 'react';
import Logo from '../Images/Showcase.png';
import {Grid, Paper, TextField, Button, Typography, Link} from '@material-ui/core';
function Login() {
    const handleSignIn = () =>{

    }
    return (
        <>
            <Grid>
                <Paper elevation = {10} style = {{padding : 15, height : '60vh', width :320, margin:'20px auto'}}>
                    <Grid align='center'>
                        <img src={Logo} style={{height:'50px',marginBottom:'20px'}} />
                        <h5><strong>Sign In</strong></h5>
                    </Grid>
                    <TextField label = 'Username' placeholder ='Enter username' fullWidth required />
                    <TextField label = 'Password' placeholder ='Enter password' type ='password' fullWidth required />
                    <Button type='Submit' color ='primary' style={{margin:'20px 0px'}} variant = 'contained' fullWidth>Sign In</Button>
                    <Typography>
                        <Link href='#' onClick={handleSignIn}>
                            Forgot Password?
                        </Link>
                    </Typography>
                    <Typography> Don't have an account ? 
                        <Link href='#' onClick={handleSignIn}>
                            Sign Up
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </>
    )
}

export default Login;
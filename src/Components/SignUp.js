/*Auther : Aditya Manapure */
import React from 'react';
import Logo from '../Images/Showcase.png';
import { useRef, useState} from 'react';
import {Grid, Paper, TextField, Button, Typography, Link} from '@material-ui/core';
import { useAuth } from '../Context/AuthContext';
import { Alert } from 'react-bootstrap';
function SignUp() {

    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const handleSignIn = () =>{

    }
    const {signup} = useAuth(); 
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value)
        {
            return setError('Password do not match')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
        }
        catch
        {
            setError('Failed to Create an Account');
        }

        setLoading(false);
    }

    return (
        <>
            <Grid>
                <Paper elevation = {10} style = {{padding : 15, height : '70vh', width :320, margin:'20px auto'}}>
                    <Grid align='center'>
                        <img src={Logo} style={{height:'50px' , marginBottom:'20px'}} />
                        <h5><strong>Sign Up</strong></h5>
                    </Grid>
                    {error && <Alert variant ="danger">{error}</Alert> }
                    <TextField label = 'Username' placeholder ='Enter username' inputRef ={userRef} fullWidth required />
                    <TextField label = 'Email'  type = 'email' placeholder ='Enter email address' inputRef={emailRef} fullWidth required />
                    <TextField label = 'Password' placeholder ='Enter password' type ='password'  inputRef={passwordRef} fullWidth required />
                    <TextField label = 'Confirm Password' placeholder ='Enter Confirm password' type ='password' inputRef={passwordConfirmRef} fullWidth required />
                    <Button type='Submit' onClick={handleSubmit} disabled= {loading} color ='primary' style={{margin:'20px 0px'}} variant = 'contained' fullWidth>Sign Up</Button>
                   
                    <Typography> Already have an account ? 
                        <Link href='#' onClick={handleSignIn}>
                            Sign In
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </>
    )
}

export default SignUp;
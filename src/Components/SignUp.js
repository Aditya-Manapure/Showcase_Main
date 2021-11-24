/*Auther : Aditya Manapure */
import React,{ useRef, useState} from 'react';
import Logo from '../Images/Showcase.png';
import {Link, useHistory} from 'react-router-dom';
import {Grid, Paper, Typography,Button,TextField} from '@material-ui/core';
import { useAuth, AuthProvider } from '../Context/AuthContext';
import '../styles/loginBg.css';
import { Alert } from 'react-bootstrap';
const SignUp = () =>{

    
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const history = useHistory();

    const {signup} = useAuth(); 
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        console.log(passwordRef.current.value);
        console.log(passwordConfirmRef.current.value);
        console.log(emailRef.current.value);
        if(passwordRef.current.value !== passwordConfirmRef.current.value)
        {
            return setError('Password do not match')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/adduser');
            setError('Created an Account');
        }
        catch
        {
            setError('Failed to Create an Account');
        }

        setLoading(false);
    }

    return (
        <>
            <Grid className ="login_bg">
            {error && <Alert variant='danger'>{error}</Alert> }
                <Paper elevation = {10} style = {{padding : 15, height : '70vh', width :340, margin:"0px 20vh"}}>
                    <Grid align='center'>
                        <img src={Logo} style={{height:'50px' , marginBottom:'20px'}} />
                        <h5><strong>Sign Up</strong></h5>
                    </Grid>
                    
                    <form onSubmit={handleSubmit}>
                        <TextField label = 'Email'  type = 'email' placeholder ='Enter email address' inputRef={emailRef} fullWidth required />
                        <TextField label = 'Password(should contain at least 6 char)' placeholder ='Enter password' type ='password'  inputRef={passwordRef} fullWidth required />
                        <TextField label = 'Confirm Password' placeholder ='Enter Confirm password' type ='password' inputRef={passwordConfirmRef} fullWidth required />
                        <Button type='Submit' disabled= {loading} color ='primary' style={{margin:'20px 0px'}} variant = 'contained' fullWidth>Sign Up</Button>
                    </form>
                        <Typography> Already have an account ? 
                            <Link to="/login" style={{textDecoration : "none"}}>
                                Login
                            </Link>
                        </Typography>
                </Paper>
            </Grid>
        </>
    )
}

export default SignUp;
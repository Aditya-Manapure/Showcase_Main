import React,{ useRef, useState} from 'react';
import Logo from '../Images/Showcase.png';
import {Link, useHistory} from 'react-router-dom';
import { db } from '../firebaseConfig';
import { useAuth, AuthProvider } from '../Context/AuthContext';
import '../styles/loginBg.css';
import { signInWithGoogle } from "../firebaseConfig.js";
import {Grid, Paper, Typography,Button,TextField} from '@material-ui/core';
import { Alert } from 'react-bootstrap';

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const {login} = useAuth(); 
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/');
            setError('logged in');
        }
        catch{
            setError('Failed to logged in');
        }
        setLoading(false);
    }
    return (
        <>
            <Grid className = "login_bg">
            {error && <Alert variant='danger'>{error}</Alert> }
                <Paper elevation = {10} style = {{padding : 15, height : '60vh', width :340 ,margin:' 0 20vh'}}>
                    <Grid align='center'>
                        <img src={Logo} style={{height:'50px',marginBottom:'20px'}} />
                        <h5><strong>Sign In</strong></h5>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <TextField label = 'Username or Email' placeholder ='Enter username or email' inputRef={emailRef} fullWidth required />
                        <TextField label = 'Password(should contain at least 6 char)' placeholder ='Enter password' type ='password'  inputRef={passwordRef} fullWidth required />
                        <Button type='Submit' disabled= {loading} color ='primary' style={{margin:'20px 0px'}} variant = 'contained' fullWidth>Sign In</Button>
                    </form>
                    <button onClick={signInWithGoogle}>Google Signin</button>
                  
                    <Typography>
                        <Link  to='/forgot-password' style={{textDecoration : "none"}}>
                            Forgot Password?
                        </Link>
                    </Typography>
                    <Typography> Don't have an account ? 
                        <Link to='/signup' style={{textDecoration : "none"}}>
                            Sign Up
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </>
    )
}

export default Login;
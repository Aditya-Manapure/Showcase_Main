import React,{ useRef, useState} from 'react';
import Logo from '../Images/Showcase.png';
import {Link} from 'react-router-dom';
import { useAuth, AuthProvider } from '../Context/AuthContext';
import {Grid, Paper, Typography,Button,TextField} from '@material-ui/core';
import { Alert } from 'react-bootstrap';
function ForgotPassword() {

    const emailRef = useRef();

    const {resetPassword} = useAuth(); 
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        
        try{
            setMessage('');
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions')
            setError('pasword set');
        }
        catch
        {
            setError('Failed to Reset Password');
        }

        setLoading(false);
    }
    return (
        <>
            <Grid>
            {error && <Alert variant='danger'>{error}</Alert> }
            {message && <Alert variant='success'>{message}</Alert> }
                <Paper elevation = {10} style = {{padding : 15, height : '60vh', width :340, margin:'10vh auto'}}>
                    <Grid align='center'>
                        <img src={Logo} style={{height:'50px',marginBottom:'20px'}} />
                        <h5><strong>Password Reset</strong></h5>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <TextField label = 'Email' placeholder ='Enter registered email' inputRef={emailRef} fullWidth required />
                        <Button type='Submit' disabled= {loading} color ='primary' style={{margin:'20px 0px'}} variant = 'contained' fullWidth>Reset Password</Button>
                    </form>
                    <Typography>
                        <Link to = '/login' style={{textDecoration : "none"}}>
                            Cancel
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

export default ForgotPassword;
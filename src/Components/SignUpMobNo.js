/*Auther : Aditya Manapure */
import React,{ useRef, useState} from 'react';
import Logo from '../Images/Showcase.png';
import {Link, useHistory} from 'react-router-dom';
import {Grid, Paper, Typography,Button,TextField} from '@material-ui/core';
import { useAuth, AuthProvider } from '../Context/AuthContext';
import '../styles/loginBg.css';
import { signInWithGoogle } from "../firebaseConfig.js";
import { Alert } from 'react-bootstrap';
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import { auth,firebaseApp } from '../firebaseConfig.js';
import firebase from 'firebase/compat';


const SignUpMobNo = () =>{
    const [error, setError] = useState('');

    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');

    const signin = () => {
  
        if (mynumber === "" || mynumber.length < 10) return;
  
        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            alert("code sent")
            setshow(true);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }
  
    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            // success
        }).catch((err) => {
            alert("Wrong code");
        })
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
                    <div style={{ "marginTop": "200px" }}>
            <center>
                <div style={{ display: !show ? "block" : "none" }}>
                    <input value={mynumber} onChange={(e) => { 
                       setnumber(e.target.value) }}
                        placeholder="phone number" />
                    <br /><br />
                    <div id="recaptcha-container"></div>
                    <button onClick={signin}>Send OTP</button>
                </div>
                <div style={{ display: show ? "block" : "none" }}>
                    <input type="text" placeholder={"Enter your OTP"}
                        onChange={(e) => { setotp(e.target.value) }}></input>
                    <br /><br />
                    <button onClick={ValidateOtp}>Verify</button>
                </div>
            </center>
        </div>
                    
                </Paper>
            </Grid>
        </>
    )
}

export default SignUpMobNo;
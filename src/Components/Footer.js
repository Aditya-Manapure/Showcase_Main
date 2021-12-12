import React from 'react'
import { FaFacebook,FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <section  className="company" >
                <h5>Company</h5>
                <ul>
                    <li><a href="#"> About us</a></li>
                    <li><a href="#"> Careers</a></li>
                    <li><a href="#"> Terms</a></li>
                    <li><a href="#"> Privacy</a></li>
                    <li><a href="#"> Help</a></li>
                </ul>
            </section>
            <section className="company">
                <h5>Work with us</h5>
                <ul>
                    <li><a href="#"> Seller</a></li>
                    <li><a href="#"> Advertise</a></li>
                    <li><a href="#"> API</a></li>
                </ul>
            </section>
            <section className="company">
                <h5>Connect</h5>
                <ul className="connect">
                    <li><a href="#"><FaFacebook /></a></li>
                    <li><a href="#"><FaTwitter /></a></li>
                    <li><a href="#"><FaInstagram /></a></li>
                    <li><a href="#"><FaLinkedinIn /></a></li>
                </ul>
               
            </section>
        </footer>
    )
}

export default Footer

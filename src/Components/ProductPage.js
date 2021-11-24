import React from 'react'
import { useParams} from 'react-router';
import '../styles/ProductPageStyle.css';
import photo from '../Images/photo.jpg'
import {BiRupee} from 'react-icons/bi';
function ProductPage() {

    const { post } = useParams();
        console.log(post);
    return (
        <body>
            <div className = "container">
                <div className= "product_data">
                    <div className="product_imgs">
                        <img className="product_img" src={photo} />
                        <div className="btns">
                            <button className="btn_b btn_add_cart">Add to Cart</button>
                            <button className="btn_b btn_buy_now">Buy Now</button>
                        </div>
                    </div>
                    <div className="product_info">
                        <h4>Xiaomi 11 Lite NE 5G (Jazz Blue 6GB RAM 128 GB Storage) | Slimmest (6.81mm) & Lightest (158g) 5G Smartphone | 10-bit AMOLED with Dolby Vision | Additional Off up to 3000 on Exchange</h4>
                        <div className="product_price">
                            <h1 style={{objectFit:'cover'}}><BiRupee /></h1><h2 style={{margin:' auto 0'}}>7999</h2>
                        </div>
                        <br/>
                        <section className="available_offers">
                            <h5>Availabe offers</h5>
                            <h6><span style={{color :"green"}}>Bank Offer</span> 5% Unlimited Cashback on Axis Bank Credit Card T&C</h6>
                            <h6><span style={{color :"green"}}>Bank Offer</span> 10% Unlimited Cashback on SBI Bank Credit Card T&C</h6>
                            <h6><span style={{color :"green"}}>Bank Offer</span> 20% Unlimited Cashback on HDFC Bank Credit Card T&C</h6>
                        </section>
                        <section className="product_highlight">
                        <h6>Highlights</h6>
                            <ul>
                                <li>Resolution: HD Ready 1366 x 768 Pixels</li>
                                <li>Sound Output: 20 W</li>
                                <li>Refresh Rate: 60 Hz</li>
                            </ul>
                        </section>
                        <h5>Seller</h5>
                        <section className="seller">
                            <img className ="seller_img" src={photo}/>
                            <div className="seller_info">
                                <h4>Aditya Manapure</h4>
                                <p>We are great in designing</p>
                                <button className="follow_btn">Follow</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </body>
    )}
export default ProductPage;
     
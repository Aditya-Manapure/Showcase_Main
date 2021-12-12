import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image';
import '../styles/CardStyle.css'
import {FaHeart,FaRegHeart,FaBookmark} from 'react-icons/fa';
import { BiRupee } from "react-icons/bi";


const SmallCards = ({productName,ImageUrl, username, userUrl, caption,price}) => {
    return (
            <div className ="card" style={{width: "15rem", height:"25rem"}}>
                <div className="card_header">
                    <section className ='post_user'>
                        <Image className = "Avtar_Image" src={userUrl} roundedCircle />
                        <h6 className ="card_title">{username}</h6>
                    </section>
                    
                    <section className = 'like_bookmark'>
                        <FaHeart color='red' />
                        <FaBookmark color='#216'/>
                    </section>
                </div>
                <div className="card_image" style={{minWidth:"14.5rem",minHeight:"15rem"}}>
                    <img style={{objectFit:"cover"}} className ="card-img-top" src={ImageUrl} alt="Card image cap"/>
                </div>
                <div className  ="card-body">
                    <div className="card_buttons">
                        <h6 >{productName}</h6>
                        <a href="#" className  ="buy_btn btn btn-primary">Buy</a>
                    </div>
                    <p className ="card-text"><BiRupee />{price}</p>
                </div>
            </div>
    );
}

export default SmallCards;

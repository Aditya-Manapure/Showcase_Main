import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image';
import '../styles/CardStyle.css'
import {FaHeart,FaRegHeart, FaBookmark} from 'react-icons/fa';
import { BiRupee } from "react-icons/bi";



const Cards = ({productName,ImageUrl,userUrl,username,caption,price}) => {
    return (
            <div className ="card" style={{minWidth: "19rem",minHeight:'25rem', objectFit:"cover"}}>
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
                <div className="card_image" style={{minWidth:"18rem",minHeight:"18rem"}}>
                    <img  className ="card-img-top" src={ImageUrl} alt="Card image cap"/>
                </div>
                <div className  ="card-body">
                    <div className="card_buttons">
                        <h5 >{productName}</h5>
                        <a href="#" className  ="buy_btn btn btn-primary">Buy</a>
                    </div>
                    <p className ="card-text"><BiRupee />{price}</p>
                </div>
            </div>
    );
}

export default Cards;

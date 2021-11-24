import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image';
import '../styles/CardStyle.css'
import {FaHeart,FaRegHeart} from 'react-icons/fa';



const Cards = ({key,ImageUrl,userUrl,username,caption}) => {
    return (
            <div className ="card" style={{minWidth: "19rem",minHeight:'25rem', objectFit:"cover"}}>
                <div className="card_header">
                    <Image className = "Avtar_Image" src={userUrl} roundedCircle />
                    <h6 className  ="card_title">{username}</h6>
                </div>
                <div className="card_image" style={{minWidth:"18rem",minHeight:"18rem"}}>
                    <img  className ="card-img-top" src={ImageUrl} alt="Card image cap"/>
                </div>
                <div className  ="card-body">
                    <div className="card_buttons">
                        <FaHeart color = "red" size="23px"/>
                        <a href="#" className  ="buy_btn btn btn-primary">Buy</a>
                    </div>
                    <p className ="card-text">{caption}</p>
                </div>
            </div>
    );
}

export default Cards;

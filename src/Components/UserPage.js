import React,{useEffect, useState} from 'react'
import NavBarComponent from './NavBarComponent';
import { useParams} from 'react-router';
import { db } from '../firebaseConfig';
import '../styles/UserStyle.css'
import artist from '../Images/artist.png';
import { FcPhone } from "react-icons/fc";

function UserPage() {

    const {id} = useParams();
    console.log(id);
    const [users, setUser] = useState([]);

    useEffect(() => {
        console.log('6');
        db.collection('User').onSnapshot((snapshot) =>{
            const items = [];
            snapshot.forEach((doc) => {
                if(doc.id == id)
                {
                    items.push(doc.data());
                }
            })
            setUser(items);
        })
      },[]);
    return (
        <div>
            <NavBarComponent />
            <div className = "container" style={{margin :'1rem auto'}}>
                <div className= "product_data">
                    <div className="product_imgs">
                        <img className="product_img" src={users[0] && users[0].userImg} />
                        <div className="btns">
                        </div>
                    </div>
                    <div className="product_info">
                        <h4>{users[0] && users[0].userName}</h4>
                        <div className="product_price">
                            <h1 style={{objectFit:'cover'}}><FcPhone /></h1><h2 style={{margin:' auto 0'}}>8459400557</h2><h6 style={{padding:'25px 0 0 0'}}></h6>
                        </div>
                        <br/>
                        
                        <h5>Seller</h5>
                        <section className="seller">
                            <img className ="seller_img" src={users[0] && users[0].userImg}/>
                            <div className="seller_info">
                                <h4>{users[0] && users[0].userName}</h4>
                                <p>{users[0] && users[0].userBio}</p>
                                <button className="follow_btn">Follow</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage;

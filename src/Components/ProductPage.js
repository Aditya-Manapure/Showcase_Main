import React,{useEffect, useState} from 'react';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams, Link} from 'react-router-dom';
import '../styles/ProductPageStyle.css';
import diya from '../Images/diva.jfif'
import photo from '../Images/photo.jpg'
import {BiRupee} from 'react-icons/bi';
import { Navbar } from 'react-bootstrap';
import NavBarComponent from './NavBarComponent';
import SmallCards from './SmallCards';
function ProductPage() {

    const {id} = useParams();
    console.log(id);
    const [product, setProduct] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        db.collection('Product').onSnapshot(snapshot =>{
          setPosts(snapshot.docs.map(doc =>( {
            id : doc.id, 
            post : doc.data()
          })));
        })
      },[]);
    
    /*useEffect( () => {
        console.log('1');
        db.collection('Product').onSnapshot(snapshot =>{
            console.log('2');
            const item = [];
            snapshot.forEach((doc) => {
                console.log('3');
                if(doc.id == {id})
                {
                    console.log('4');
                    item.push(doc.data());
                }
          });
          setProduct(item);
        })
      },[]);*/
    
      useEffect(() => {
        console.log('6');
        db.collection('Product').onSnapshot((snapshot) =>{
            const items = [];
            snapshot.forEach((doc) => {
                if(doc.id == id)
                {
                    items.push(doc.data());
                }
            })
            setProduct(items);
        })
      },[]);

    return (
        <body>
            <NavBarComponent />
            <div className = "container" style={{margin :'1rem auto'}}>
                <div className= "product_data">
                    <div className="product_imgs">
                        <img className="product_img xzoom" src={product[0] && product[0].productImg} />
                        <div className="btns">
                            <button className="btn_b btn_add_cart">Add to Cart</button>
                            <button className="btn_b btn_buy_now">Buy Now</button>
                        </div>
                    </div>
                    <div className="product_info">
                        <h4>{product[0] && product[0].productName} | {product[0] && product[0].subDetail}</h4>
                        <div className="product_price">
                            <h1 style={{objectFit:'cover'}}><BiRupee /></h1><h2 style={{margin:' auto 0'}}>{product[0] && product[0].productPrice}</h2><h6 style={{padding:'25px 0 0 0'}}></h6>
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
                                <li>{product[0] && product[0].highlight1}</li>
                                <li>{product[0] && product[0].highlight2}</li>
                                <li>{product[0] && product[0].highlight3}</li>
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

                <br/>
                <div className ="similar_products"> 
                    <h2>Similar Products</h2>
                    <section className="similar_product_cards" className="cards_container_1"  style={{overflowX:"scroll"}} >
                    {
                        posts && posts.map(({id,post}) => {
                        return <Link style ={{textDecoration : 'none', color:'black'}} to = {`/product/${id}`}><SmallCards key={id} productName = {post.productName} ImageUrl = {post.productImg} userUrl={photo} username = "Aditya" caption = {post.productCaption} price = {post.productPrice} /></Link>
                        })
                    }
                    </section>
                </div>

                <br />

                <div className ="similar_products"> 
                    <h2>More from Artist</h2>
                    <section className="similar_product_cards" className="cards_container_1"  style={{overflowX:"scroll"}} >
                    {
                        posts && posts.map(({id,post}) => {
                        return <Link style ={{textDecoration : 'none', color:'black'}} to = {`/product/${id}`}><SmallCards key={id}  ImageUrl = {post.productImg} userUrl={photo} username = "Aditya" caption = {post.productCaption} price = {post.productPrice} /></Link>
                        })
                    }
                    </section>
                </div>

            </div>
        </body>
    )}
export default ProductPage;
     
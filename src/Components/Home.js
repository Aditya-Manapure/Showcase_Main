import '../App.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

//firebase data
import firebase from 'firebase/compat/app';
import { db } from '../firebaseConfig';

//components
import Cards from './Cards';
import SmallCards from './SmallCards';
import CarouselContainer from './CarouselContainer';
import NavBarComponent from './NavBarComponent';
import CategoryCard from './CategoryCard';
import ArtistCard from './ArtistCard';
import Footer from './Footer';
import AppMap from './AppMap';


//import images
import mobiles from '../Images/mobiles.png';
import toys from '../Images/toys.png';
import offers from '../Images/offers.png';
import electronics from '../Images/electronics.png';
import fashion from '../Images/fashion.png';
import appliance from '../Images/Home.jpg';
import photo from '../Images/photo.jpg';
import ProductPage from './ProductPage';
import { useAuth } from '../Context/AuthContext';


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const {currentUser} = useAuth();
  
  useEffect( () => {
    db.collection('Product').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc =>( {
        id : doc.id, 
        post : doc.data()
      })));
    })
  },[]);

  useEffect( () => {
    db.collection('User').onSnapshot(snapshot =>{
      setUsers(snapshot.docs.map(doc =>( {
        id : doc.id, 
        user : doc.data()
      })));
    })
  },[]);

  return (
    <div className="app">
          {console.log(currentUser)} 
           <NavBarComponent />
        <div className ="app_carousels" >
            <CarouselContainer />
        </div>
        <div className = "app_category"  style={{ overflowX:"scroll"}}>
              
            <a style={{textDecoration:'none', color:'red'}} href="#"><CategoryCard ImageUrl = {offers} Category = "Top offers" /></a>
            <a style={{textDecoration:'none', color:'black'}} href="#"><CategoryCard ImageUrl = {mobiles} Category = "Mobiles" /></a>
            <a style={{textDecoration:'none', color:'black'}} href="#"><CategoryCard ImageUrl = {appliance} Category = "Backcover" /></a>
            <a style={{textDecoration:'none', color:'black'}} href="#"><CategoryCard ImageUrl = {electronics} Category = "WallArt" /></a>
            <a style={{textDecoration:'none', color:'black'}} href="#"><CategoryCard ImageUrl = {fashion} Category = "Fashion" /></a>
            <a style={{textDecoration:'none', color:'black'}} href="#"><CategoryCard ImageUrl = {toys} Category = "Toys" /></a>
        </div>
       {/* <div style={ {display : "flex",backgroundColor:'#fff'}}>
          <div >*/}
            <div className="Container_1">
              <h3>Latest deals</h3>
              <hr/>
                <div className="cards_container_1"  style={{overflowX:"scroll"}}>
                  {
                    posts && posts.map(({id,post}) => {
                    return <Link style ={{textDecoration : 'none', color:'black'}} to = {`/product/${id}`}><Cards key={id} productName = {post.productName} ImageUrl = {post.productImg} userUrl={photo} username = "Aditya" caption = {post.productCaption} price = {post.productPrice}/></Link>
                    })
                  }
                </div>
            </div>

            <div className="Container_2">
              <h3>Featured Artists</h3>
              <hr/>
                <div className="cards_containers" style={{overflowX:"scroll"}}>
                  {
                    users && users.map(({id,user}) => {
                      return <Link  style ={{textDecoration : 'none', color:'black'}} to = {`/user/${id}`}><ArtistCard key={id} userUrl={user.userImg} username = {user.userName} bio = {user.userBio}/></Link>
                    })
                  }
                  </div>
            </div> 
         {/*</div>

         <Grid item style={{height : '40vh', overflowY:'scroll'}} >
              <AppMap />
          </Grid>*/}
        {/*</div>*/}
        <div className="Container_1" style={{width:'100%'}}>
          <h3>Latest deals</h3>
          <hr/>
            <div className="cards_container_2"  style={{overflowX:"scroll"}}>
              {
                posts && posts.map(({id,post}) => {
                  return <Link  style ={{textDecoration : 'none', color:'black'}} to = {`/product/${id}`}><SmallCards key={id} productName = {post.productName} ImageUrl = {post.productImg} userUrl={photo} username = "Aditya" caption = {post.productCaption} price = {post.productPrice} /></Link>
                })
              }
            </div>
        </div>
        {/*<Footer /> */}
    </div>
  );
}

export default Home;

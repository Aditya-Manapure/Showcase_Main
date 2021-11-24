import '../App.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

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



//import images
import mobiles from '../Images/mobiles.png';
import toys from '../Images/toys.png';
import offers from '../Images/offers.png';
import electronics from '../Images/electronics.png';
import fashion from '../Images/fashion.png';
import appliance from '../Images/Home.jpg';
import photo from '../Images/photo.jpg';
import ProductPage from './ProductPage';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    db.collection('Product').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc =>( {
        id : doc.id, 
        post : doc.data()
      })));
    })
  },[]);

  return (
    <div className="app">
           
           <NavBarComponent />
        <div className ="app_carousels" >
            <CarouselContainer />
        </div>
        <div className = "app_category"  style={{overflowX:"scroll"}}>
            <a href="#"><CategoryCard ImageUrl = {offers} Category = "Top offers" /></a>
            <a href="#"><CategoryCard ImageUrl = {mobiles} Category = "Mobiles" /></a>
            <a href="#"><CategoryCard ImageUrl = {appliance} Category = "Backcover" /></a>
            <a href="#"><CategoryCard ImageUrl = {electronics} Category = "WallArt" /></a>
            <a href="#"><CategoryCard ImageUrl = {fashion} Category = "Fashion" /></a>
            <a href="#"><CategoryCard ImageUrl = {toys} Category = "Toys" /></a>
        </div>

        <div className="Container_1">
          <h3>Latest deals</h3>
          <hr/>
            <div className="cards_container_1"  style={{overflowX:"scroll"}}>
              {
                posts.map(({id,post}) => {
                  return <Link to="/product"><Cards key={id} ImageUrl = {post.productImg} userUrl={photo} username = "Aditya" caption = {post.productCaption} /></Link>
                })
              }
              
            </div>
            
        </div>

        <div className="Container_2">
          <h3>Featured Artists</h3>
          <hr/>
            <div className="cards_containers" style={{overflowX:"scroll"}}>
              <ArtistCard  userUrl={photo} username = "Aditya" />
              <ArtistCard  userUrl={photo} username = "Aditya" />
              <ArtistCard  userUrl={photo} username = "Aditya" />
              <ArtistCard  userUrl={photo} username = "Aditya" />
              <ArtistCard  userUrl={photo} username = "Aditya" />
              <ArtistCard  userUrl={photo} username = "Aditya" />
              <ArtistCard  userUrl={photo} username = "Aditya" />
            </div>
        </div>

        <div className="Container_1">
          <h3>Latest deals</h3>
          <hr/>
            <div className="cards_container_2"  style={{overflowX:"scroll"}}>
              <SmallCards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <SmallCards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <SmallCards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <SmallCards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <SmallCards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <SmallCards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <SmallCards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <SmallCards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <SmallCards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
            </div>
        </div>
        
    </div>
  );
}

export default Home;

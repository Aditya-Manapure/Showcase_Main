import './App.css';
import React, {useState, useEffect} from 'react';

//firebase data
import firebase from 'firebase/compat/app';
import { db } from './firebaseConfig';

//components
import Cards from './Components/Cards';
import CarouselContainer from './Components/CarouselContainer';
import NavBarComponent from './Components/NavBarComponent';
import CategoryCard from './Components/CategoryCard';
import ArtistCard from './Components/ArtistCard';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

//Context
import { AuthProvider } from './Context/AuthContext';

//import images
import mobiles from './Images/mobiles.png';
import toys from './Images/toys.png';
import offers from './Images/offers.png';
import electronics from './Images/electronics.png';
import fashion from './Images/fashion.png';
import appliance from './Images/appliance.png';
import photo from './Images/photo.jpg';
const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc =>({ 
        id : doc.id,
        post : doc.data()
      })));
    })
  },[]);

  return (
    <AuthProvider>
    <div className="app">
           
           <NavBarComponent />
        <div className ="app_carousels" >
            <CarouselContainer />
        </div>
        <div className = "app_category">
            <a href="#"><CategoryCard ImageUrl = {offers} Category = "Top offers" /></a>
            <a href="#"><CategoryCard ImageUrl = {mobiles} Category = "Mobiles" /></a>
            <a href="#"><CategoryCard ImageUrl = {appliance} Category = "Electronics" /></a>
            <a href="#"><CategoryCard ImageUrl = {electronics} Category = "Laptop" /></a>
            <a href="#"><CategoryCard ImageUrl = {fashion} Category = "Fashion" /></a>
            <a href="#"><CategoryCard ImageUrl = {toys} Category = "Toys" /></a>
        </div>

        <div className="Container_1">
          <h3>Latest deals</h3>
          <hr/>
            <div className="cards_container_1">
              {
                posts.map(post =>(
                  1
                ))
              }
              <Cards ImageUrl = {photo} userUrl = {photo} username = "Aditya" caption = "hi there ..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
            </div>
        </div>

        <div className="Container_2">
          <h3>Featured Artists</h3>
          <hr/>
            <div className="cards_containers">
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
            <div className="cards_container_2">
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "hi there ..." />
            </div>
        </div>
        
    </div>
    <Login />
    <SignUp />
    </AuthProvider>
  );
}

export default App;

import './App.css';

//components
import Cards from './Components/Cards';
import CarouselContainer from './Components/CarouselContainer';
import NavBarComponent from './Components/NavBarComponent';
import CategoryCard from './Components/CategoryCard';
import ArtistCard from './Components/ArtistCard';

//import images
import toys from './Images/toys.png';
import mobile from './Images/mobiles.png';
import offers from './Images/offers.png';
import electronics from './Images/electronics.png';
import fashion from './Images/fashion.png';
import Home from './Images/Home.jpg';
import photo from './Images/photo.jpg';
const App = () => {

  return (
    <div className="app">
           <NavBarComponent />
        <div className ="app_carousels" >
            <CarouselContainer />
        </div>
        <div className = "app_category">
            <CategoryCard ImageUrl = {offers} Category = "Top offers" />
            <CategoryCard ImageUrl = {mobile} Category = "Mobiles" />{}
            <CategoryCard ImageUrl = {electronics} Category = "Electronics" />
            <CategoryCard ImageUrl = {Home} Category = "Home" />
            <CategoryCard ImageUrl = {fashion} Category = "Fashion" />
            <CategoryCard ImageUrl = {toys} Category = "Toys" />
        </div>

        <div className="Container_1">
          <h3>Latest deals</h3>
          <hr/>
            <div className="cards_container_1">
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
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
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
              <Cards ImageUrl = {photo} userUrl={photo} username = "Aditya" caption = "You are a hero..." />
            </div>
        </div>
        
    </div>
  );
}

export default App;

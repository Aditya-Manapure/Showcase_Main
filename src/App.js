import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//firebase data
import firebase from 'firebase/compat/app';
import { db } from './firebaseConfig';

//components
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home.js';
import ForgotPassword from './Components/ForgotPassword';
import PrivateRoute from './Components/PrivateRoute';
import AddProductHome from './Components/AddProductHome';
import Userdata from './Components/AddUserData';
import ProductPage from './Components/ProductPage';
import AppMap from './Components/AppMap';
import UserPage from './Components/UserPage';
import SignUpMobNo from './Components/SignUpMobNo';

import Footer from './Components/Footer';

//Context
import { AuthProvider } from './Context/AuthContext';



const App = () => {
 /* const [posts, setPosts] = useState([]);

  useEffect( () => {
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc =>({ 
        id : doc.id,
        post : doc.data()
      })));
    })
  },[]);*/

  return (
    
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signupmob" component={SignUpMobNo} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/addproduct" component={AddProductHome} />
          <Route path="/adduser" component ={Userdata} />
          <Route path="/product/:id" component ={ProductPage} />
          <Route path="/user/:id" component={UserPage} />
          <Route path="/map" component={AppMap} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

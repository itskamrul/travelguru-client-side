import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import NavBar from './Components/Shared/Navbar/NavBar';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddPlace from './Components/AddPlace/AddPlace';
import Places from './Components/Places/Places';
import MyBooking from './Components/MyBooking/MyBooking';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import AllBooking from './Components/AllBooking/AllBooking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Places></Places>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Places></Places>
            </Route>
            <Route path="/allBooking">
              <AllBooking></AllBooking>
            </Route>
            <Route path="/addPlace">
              <AddPlace></AddPlace>
            </Route>
            <Route path="/placeDetails/:placeId">
              <PlaceDetails></PlaceDetails>
            </Route>
            <Route path="/myBooking">
              <MyBooking></MyBooking>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import NavBar from './Components/Shared/Navbar/NavBar';
import WhyTouring from './Components/WhyTouring/WhyTouring';
import Login from './Components/Login/Login';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddPlace from './Components/AddPlace/AddPlace';
import Places from './Components/Places/Places';
import MyBooking from './Components/MyBooking/MyBooking';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import BookingDash from './Components/BookingDash/BookingDash';
import Support from './Components/Support/Support';
import TravellerPackages from './Components/TravellerPackages/TravellerPackages';
import AllPlaces from './Components/AllPlaces/AllPlaces';

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
              <TravellerPackages></TravellerPackages>
              <Support></Support>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Places></Places>
              <TravellerPackages></TravellerPackages>
              <Support></Support>
            </Route>
            <PrivateRoute path="/addPlace">
              <AddPlace></AddPlace>
            </PrivateRoute>
            <PrivateRoute path="/bookingDashboard">
              <BookingDash></BookingDash>
            </PrivateRoute>
            <PrivateRoute path="/placeDetails/:placeId">
              <PlaceDetails></PlaceDetails>
            </PrivateRoute>
            <PrivateRoute path="/myBooking">
              <MyBooking></MyBooking>
            </PrivateRoute>
            <Route path="/whyTouring">
              <WhyTouring></WhyTouring>
            </Route>
            <Route path="/allPlaces">
              <AllPlaces></AllPlaces>
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

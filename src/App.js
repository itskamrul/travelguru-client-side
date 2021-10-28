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

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Header></Header>
            </Route>
            <Route path="/home">
              <Header></Header>
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

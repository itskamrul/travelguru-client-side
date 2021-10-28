import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const { signUsingGoogle, setUsers, setIsLoding } = useAuth();

  useEffect(() => {
    document.title = 'Login -Travel Guru';
  }, []);

  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || '/home';

  const handleGoogleSignin = () => {
    signUsingGoogle()
      .then(result => {
        setUsers(result.user);
        history.push(redirect_url);
      })
      .finally(() => {
        setIsLoding(false);
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="login-container shadow">
          <Button onClick={handleGoogleSignin} className="btn login-btn">
            <FontAwesomeIcon className="icon" icon={faGoogle}></FontAwesomeIcon>
            oogle Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

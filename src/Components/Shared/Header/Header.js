import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
const Header = () => {
  useEffect(() => {
    document.title = 'Home -Travel Guru';
  }, []);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/lifecyclestravel.com/wp-content/uploads/2018/04/Noosa-banner-image.jpg?fit=1200%2C400&ssl=1"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://termehtravel.com/images/transport/Train/Trian-Banner-1200-400.jpg?v=I0ZSMrqTCFQuXmlqwgUZud2qfPkvR5w8zAQ_B1klhvI"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i2.wp.com/theholidaze.com/wp-content/uploads/2018/04/banner-solo-travel.jpg?fit=1200%2C400&ssl=1"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;

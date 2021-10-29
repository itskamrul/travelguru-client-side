import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Place from '../Place/Place';

const Places = () => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { users } = useAuth();

  useEffect(() => {
    fetch('http://localhost:5000/places')
      .then(res => res.json())
      .then(data => {
        setPlaces(data);
        setIsLoading(false);
      });
  }, [isLoading]);

  const handleBooking = index => {
    if (users.email) {
      const data = places[index];
      data._id = data._id + 1;
      data.email = users.email;
      data.status = 'pending';

      fetch('http://localhost:5000/bookingPlace', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      alert('Booking Successful');
    } else {
      alert('Please login first');
    }
  };
  if (isLoading) {
    return (
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else {
    return (
      <div className="container mt-5">
        <div className=" mb-3">
          <h2 className="fw-bold">Best Tour Places For You</h2>
        </div>
        <div>
          <Row xs={1} sm={2} md={3} className="g-4 bg-white rounded-3">
            {places.map((place, index) => {
              if (index < 6) {
                return (
                  <Place
                    key={place._id}
                    place={place}
                    index={index}
                    handleBooking={handleBooking}
                  ></Place>
                );
              }
            })}
          </Row>
        </div>
      </div>
    );
  }
};

export default Places;

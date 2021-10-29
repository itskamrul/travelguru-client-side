import React from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import usePlaces from '../../hooks/usePlaces';
import Place from '../Place/Place';
// import Service from '../Service/Service';

const Places = () => {
  const { users } = useAuth();
  const places = usePlaces();
  const handleBooking = index => {
    if (users.email) {
      const data = places[index];
      data.email = users.email;
      data.status = 'pending';

      fetch('http://localhost:5000/bookingPlace', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } else {
      alert('Please login first');
    }
  };
  return (
    <div className="container mt-5">
      <div className=" mb-5">
        <h2 className="fw-bold">Tour Places </h2>
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
};

export default Places;

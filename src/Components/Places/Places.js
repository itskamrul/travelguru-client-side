import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Place from '../Place/Place';

const Places = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/places')
      .then(res => res.json())
      .then(data => {
        setPlaces(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else {
    return (
      <div className="container mt-5">
        <div className=" mb-5">
          <h2 className="fw-bold">Tour Places </h2>
        </div>
        <div>
          <Row xs={1} sm={2} md={3} className="g-4 bg-white rounded-3">
            {places.map((place, index) => {
              if (index < 6) {
                return <Place key={place._id} place={place}></Place>;
              }
            })}
          </Row>
        </div>
      </div>
    );
  }
};

export default Places;

import React from 'react';
import { Row } from 'react-bootstrap';
import usePlaces from '../../hooks/usePlaces';
import Place from '../Place/Place';

const Places = () => {
  const places = usePlaces();
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
};

export default Places;

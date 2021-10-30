import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Place.css';

const Place = ({ place, index, handleBooking }) => {
  const { _id, name, img, destinations, price } = place;

  return (
    <div>
      <Col>
        <Card className="bg-white shadow rounded border-0 p-1">
          <Card.Img
            className="card-image img-fluid rounded"
            variant="top"
            src={img}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{destinations}</Card.Text>
            <div className="d-flex justify-content-between">
              <h4 className="mt-2">${price}</h4>
              <Link className="btn-regular" to={`/placeDetails/${_id}`}>
                Book Now
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Place;

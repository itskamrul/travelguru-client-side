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
            <Card.Title>Price: ${price}</Card.Title>
            <Card.Text>{destinations}</Card.Text>
            <div className="d-flex justify-content-between">
              <Link className="btn-regular" to={`/placeDetails/${_id}`}>
                See details
              </Link>
              <Button
                className="btn-success fw-bold "
                onClick={() => {
                  handleBooking(index);
                }}
              >
                Book now
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Place;

import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const TravellerPackages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch('https://shrouded-forest-46188.herokuapp.com/travellerPackages')
      .then(res => res.json())
      .then(data => {
        setPackages(data);
      });
  }, []);
  return (
    <div className="container mt-5">
      <div className=" mb-5">
        <h3 className="fw-bold">
          Adventure tour packages for every type of traveller
        </h3>
      </div>
      <div>
        <Row xs={1} sm={2} md={3} className="g-4 bg-white rounded-3">
          {packages.map(singlePackage => {
            return (
              <div>
                <Col>
                  <Card className="bg-white shadow rounded border-0 p-1">
                    <Card.Img
                      className="card-image img-fluid rounded"
                      variant="top"
                      src={singlePackage.img}
                    />
                    <Card.Body>
                      <Card.Title>{singlePackage.title}</Card.Title>
                      <Card.Text>{singlePackage.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default TravellerPackages;

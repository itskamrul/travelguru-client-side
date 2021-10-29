import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const AllBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //get data
  useEffect(() => {
    fetch('http://localhost:5000/allBooking')
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      });
  }, [isLoading]);

  //delete my booking place
  const handleDelete = id => {
    fetch(`http://localhost:5000/deleteBooking/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(result => console.log(result));
  };
  if (isLoading) {
    return (
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h2>All Booking result</h2>
        <div>
          {bookings.map(booking => (
            <div
              key={booking._id}
              className="d-flex mt-3 bg-white shadow rounded  p-2"
            >
              <img className="w-25 rounded" src={booking.img} alt="" />
              <div className="text-start ms-3">
                <h4>{booking.name}</h4>
                <h5>
                  Status: <span className="text-danger">{booking.status}</span>
                </h5>
                <div>
                  <Button
                    onClick={() => {
                      handleDelete(booking._id);
                    }}
                    className="btn btn-success fw-bold py-2 px-3 fw-bold"
                  >
                    Cancel
                  </Button>
                  <Button className="btn btn-regular fw-bold ms-3">
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default AllBooking;

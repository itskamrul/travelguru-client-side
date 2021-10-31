import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { users } = useAuth();
  const email = users.email;

  //get data
  useEffect(() => {
    fetch(`https://shrouded-forest-46188.herokuapp.com/myBooking/${email}`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      });
  }, [isLoading]);

  //delete my booking place
  const handleDelete = id => {
    const handleConfirm = window.confirm('Are you sure to delete');
    if (handleConfirm) {
      fetch(`https://shrouded-forest-46188.herokuapp.com/deleteBooking/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(result => console.log(result));
    }
    console.log(id);
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
        <h2>Your Booking result</h2>
        <div>
          {bookings.map(booking => (
            <div
              key={booking._id}
              className="d-flex mt-3 bg-white shadow rounded  p-2"
            >
              <img className="w-25 rounded" src={booking.img} alt="" />
              <div className="text-start ms-3">
                <h4>{booking.name}</h4>
                <h4>${booking.price}</h4>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default MyBooking;

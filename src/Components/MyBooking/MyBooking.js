import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { users } = useAuth();
  const email = users.email;

  useEffect(() => {
    fetch(`http://localhost:5000/myBooking/${email}`)
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
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <div>
          <h2>My all booking list</h2>
        </div>
        <div>
          {bookings.map(booking => (
            <div key={booking._id} className="d-flex mt-3">
              <img className="w-25" src={booking.img} alt="" />
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
                    className="btn btn-danger fw-bold"
                  >
                    Cancel
                  </Button>
                  <Button className="btn btn-primary fw-bold ms-3">
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

export default MyBooking;

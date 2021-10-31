import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const PlaceDetails = () => {
  const [places, setPlaces] = useState([]);
  const [isSubmit, setIsSubmit] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const { users } = useAuth();
  const { placeId } = useParams();
  //get data
  useEffect(() => {
    fetch('https://shrouded-forest-46188.herokuapp.com/places')
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, [isSubmit]);

  //find data
  const displayPlace = places.find(place => place._id == placeId);

  // submit booking data
  const onSubmit = data => {
    displayPlace.userName = data.userName;
    displayPlace.email = data.email;
    displayPlace.gender = data.gender;
    displayPlace.number = data.number;
    displayPlace.address = data.address;
    displayPlace.status = 'pending';
    displayPlace._id = displayPlace._id + 1;

    axios
      .post(
        'https://shrouded-forest-46188.herokuapp.com/bookingPlace',
        displayPlace
      )
      .then(res => {
        if (res.data.insertedId) {
          alert('Booking successfully');
          setIsSubmit(true);
          reset();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className=" container  mt-2">
      <div className="row">
        <div className=" col-md-8 d-flex flex-column ">
          <img
            className="img-fluid rounded w-75"
            src={displayPlace?.img}
            alt=""
          />
          <div className="text-start ">
            <h4>{displayPlace?.name}</h4>
            <h5>Price: ${displayPlace?.price}</h5>
            <p>
              <span className="fw-bold">Destinations: </span>
              {displayPlace?.destinations}
            </p>
            <p>
              <span className="fw-bold">Details: </span>
              {displayPlace?.description}
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div style={{ borderRadius: '10px' }} className="shadow p-3">
            <h1 style={{ color: '#2B6878', fontWeight: 'bold' }}>Add Place</h1>
            <form
              className="d-flex flex-column  "
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                defaultValue={users.displayName}
                style={{
                  border: '2px solid #2B6878',
                  borderRadius: '5px',
                  padding: '10px',
                }}
                className="mt-2"
                {...register('userName', { required: true })}
              />
              <input
                readOnly
                defaultValue={users.email}
                style={{
                  border: '2px solid #2B6878',
                  borderRadius: '5px',
                  padding: '10px',
                }}
                className="mt-2"
                {...register('email', { required: true })}
              />
              <select
                style={{
                  border: '2px solid #2B6878',
                  borderRadius: '5px',
                  padding: '10px',
                  marginTop: '10px',
                }}
                {...register('gender')}
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              <input
                style={{
                  border: '2px solid #2B6878',
                  borderRadius: '5px',
                  padding: '10px',
                }}
                className="mt-2"
                placeholder="Address"
                {...register('address', { required: true })}
              />
              <input
                style={{
                  border: '2px solid #2B6878',
                  borderRadius: '5px',
                  padding: '10px',
                }}
                type="number"
                className="mt-2"
                placeholder="Mobile number"
                {...register('number', { required: true })}
              />

              <input className="mt-2 btn btn-regular" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;

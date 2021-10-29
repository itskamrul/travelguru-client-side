import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import usePlaces from '../../hooks/usePlaces';

const PlaceDetails = () => {
  const { placeId } = useParams();
  const places = usePlaces();
  //   console.log(places);

  const displayPlace = places.find(place => place._id == placeId);
  console.log(displayPlace);
  return (
    <div>
      <div className=" row container mt-5">
        <div className="col-md-6">
          <img className="img-fluid" src={displayPlace?.img} alt="" />
        </div>
        <div className="col-md-6 text-start">
          <h3>{displayPlace?.name}</h3>
          <h5>Price: ${displayPlace?.price}</h5>
          <p>
            <span className="fw-bold">Destinations: </span>
            {displayPlace?.destinations}
          </p>
          <p>
            <span className="fw-bold">Description: </span>
            {displayPlace?.description}
          </p>

          {/* <div className="d-flex flex-column ">
            <span>Details:</span>
            <span> {details}</span>
          </div> */}
          <Link className="btn-regular" to="/home">
            GO Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;

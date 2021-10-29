import React, { useEffect, useState } from 'react';

const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/places')
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, []);
  return places;
};

export default usePlaces;

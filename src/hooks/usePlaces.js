import { useEffect, useState } from 'react';

const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch('https://shrouded-forest-46188.herokuapp.com/places')
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, []);
  return places;
};

export default usePlaces;

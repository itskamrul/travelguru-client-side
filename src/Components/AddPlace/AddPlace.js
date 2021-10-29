import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddPlace = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);

    axios.post('http://localhost:5000/addPlace', data).then(res => {
      if (res.data.insertedId) {
        alert('added successfully');
        reset();
      }
    });
  };
  return (
    <div>
      <div className=" d-flex justify-content-center align-item-center">
        <div>
          <h1>Add Place</h1>
          <form
            className="d-flex flex-column  "
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="mt-2"
              placeholder="Name"
              {...register('name', { required: true })}
            />
            <input
              className="mt-2"
              placeholder="Price"
              {...register('price', { required: true })}
            />
            <input
              className="mt-2"
              placeholder="Destinations"
              {...register('destinations', { required: true })}
            />
            <input
              className="mt-2"
              placeholder="Image link"
              {...register('img', { required: true })}
            />
            <textarea
              className="mt-2"
              placeholder="Description"
              {...register('description', { required: true })}
            />
            <input className="mt-2 btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlace;

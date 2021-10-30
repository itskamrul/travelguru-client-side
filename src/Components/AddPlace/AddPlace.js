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
        <div style={{ borderRadius: '10px' }} className="shadow p-3 mt-3">
          <h1 style={{ color: '#2B6878', fontWeight: 'bold' }}>Add Place</h1>
          <form
            className="d-flex flex-column  "
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              style={{
                border: '2px solid #2B6878',
                borderRadius: '5px',
                padding: '10px',
              }}
              className="mt-2"
              placeholder="Name"
              {...register('name', { required: true })}
            />
            <input
              style={{
                border: '2px solid #2B6878',
                borderRadius: '5px',
                padding: '10px',
              }}
              className="mt-2"
              placeholder="Price"
              {...register('price', { required: true })}
            />
            <input
              style={{
                border: '2px solid #2B6878',
                borderRadius: '5px',
                padding: '10px',
              }}
              className="mt-2"
              placeholder="Destinations"
              {...register('destinations', { required: true })}
            />
            <input
              style={{
                border: '2px solid #2B6878',
                borderRadius: '5px',
                padding: '10px',
              }}
              className="mt-2"
              placeholder="Image link"
              {...register('img', { required: true })}
            />
            <textarea
              style={{
                border: '2px solid #2B6878',
                borderRadius: '5px',
                padding: '10px',
              }}
              className="mt-2"
              placeholder="Description"
              {...register('description', { required: true })}
            />
            <input className="mt-2 btn btn-regular" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlace;

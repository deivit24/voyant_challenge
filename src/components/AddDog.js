import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DogContext from '../_helpers/DogContext';
import '../_assets/AddDog.css';
const INIT_STATE = {
  name: '',
  breed: '',
  owner: '',
  size: '',
  description: '',
};
const AddDog = () => {
  const { dogs } = useContext(DogContext);
  const history = useHistory();
  const [values, setValues] = useState(INIT_STATE);
  const { name, breed, owner, size, description } = values;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((l) => ({ ...l, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dogs.push(values);
    history.push('/');
  };
  return (
    <div id="Add-Dog" className="container">
      <div className="form-box">
        <div className="form-title">
          <h2>Add Dog</h2>
        </div>
        <form noValidate autoComplete="on" onSubmit={handleSubmit}>
          <div className=" form-row">
            <div className="form-group col-6">
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter Dog's Name"
              />
            </div>

            <div className="form-group col-6">
              <input
                type="text"
                className="form-control"
                name="breed"
                value={breed}
                onChange={handleChange}
                placeholder="Enter Breed"
              />
            </div>
            <div className="form-group col-6">
              <input
                type="text"
                className="form-control"
                name="owner"
                value={owner}
                onChange={handleChange}
                placeholder="Enter Owner's Name"
              />
            </div>
            <div className="form-group col-6">
              <select
                class="form-control"
                name="size"
                value={size}
                onChange={handleChange}
              >
                <option selected>Choose Size</option>
                <option value="XL">XL</option>
                <option value="LG">LG</option>
                <option value="MD">MD</option>
                <option value="SM">SM</option>
                <option value="XSM">XSM</option>
              </select>
            </div>
            <div class="form-group col-12">
              <textarea
                class="form-control"
                name="description"
                value={description}
                placeholder="Enter Dog's Description"
                onChange={handleChange}
                rows="3"
              />
            </div>
            <button onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDog;

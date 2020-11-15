import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DogContext from '../_helpers/DogContext';
import '../_assets/DogDetails.css';
import { useParams, useHistory } from 'react-router-dom';
import { API } from './DogCard';
import { defaultImg } from './DogCard';

const DogDetails = () => {
  const { dogs } = useContext(DogContext);
  const { name } = useParams();
  const history = useHistory();
  const search = (nameKey, myArray) => {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].name.toLowerCase() === nameKey) {
        return myArray[i];
      }
    }
  };
  const dog = search(name, dogs);

  const [img, setImg] = useState(null);
  useEffect(() => {
    const getImage = async () => {
      const res = await axios.get(`${API}/${cleanUp(dog.breed)}/images/random`);

      if (res.data.status !== 'success') {
        setImg(defaultImg);
      } else {
        setImg(res.data.message);
      }
      console.log(res.data.status);
    };
    getImage();
  }, [dog.breed]);

  const cleanUp = (s) => {
    return s.split(' ').join('').toLowerCase();
  };

  const handleDelete = (e) => {
    e.preventDefault();
    let index = dogs.findIndex(({ name }) => name === dog.name);
    if (index === -1) {
      console.log(true);
    } else {
      dogs.splice(index, 1);
    }

    history.push(`/`);
  };
  return (
    <div id="Dog-Details" className="container">
      <div className="profile-card-4 text-center">
        <img
          src={img ? img : defaultImg}
          className="img img-responsive"
          alt="gfsgs"
        />
        <div className="profile-content">
          <div className="profile-name">
            {dog.name}
            <p>{dog.breed}</p>
          </div>
          <div className="profile-description">{dog.description}</div>
          <div className="row ">
            <div className="col-xs-6">
              <div className="profile-overview">
                <p>OWNER</p>
                <h4>{dog.owner}</h4>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="profile-overview">
                <p>SIZE</p>
                <h4>{dog.size}</h4>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-xs-6">
              <div className="profile-overview">
                <Link
                  to={`/${dog.name.toLowerCase()}/edit`}
                  className="btn btn-info"
                >
                  Edit Dog
                </Link>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="profile-overview">
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetails;

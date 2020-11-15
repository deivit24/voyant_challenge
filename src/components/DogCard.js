import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../_assets/DogCard.css';
import { Link } from 'react-router-dom';

export const API = 'https://dog.ceo/api/breed';
export const defaultImg =
  'https://previews.123rf.com/images/istanbul2009/istanbul20091507/istanbul2009150700665/42444397-vector-image-dog-silhouette-in-default-pose-isolated-on-white-background.jpg';

const DogCard = ({ name, breed, owner, size, description }) => {
  const [img, setImg] = useState(null);
  useEffect(() => {
    const getImage = async () => {
      const res = await axios.get(`${API}/${cleanUp(breed)}/images/random`);

      if (res.data.status !== 'success') {
        setImg(defaultImg);
      } else {
        setImg(res.data.message);
      }
    };
    getImage();
  }, [breed]);

  const cleanUp = (s) => {
    return s.split(' ').join('').toLowerCase();
  };
  return (
    <Link to={`/${name.toLowerCase()}`}>
      <div className="profile-card-2">
        <img
          src={img ? img : defaultImg}
          className="img img-responsive"
          alt={breed}
        />
        <div className="profile-name">{name}</div>
        <div className="profile-username">{breed}</div>
      </div>
    </Link>
  );
};

export default DogCard;

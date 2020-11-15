import React, { useContext } from 'react';

import DogCard from './DogCard';

import DogContext from '../_helpers/DogContext';

const Home = () => {
  const { dogs } = useContext(DogContext);

  let result;
  if (!dogs) {
    result = <p>loading...</p>;
  } else {
    result = dogs.map((dog) => (
      <DogCard
        name={dog.name}
        breed={dog.breed}
        owner={dog.owner}
        size={dog.size}
        description={dog.description}
      />
    ));
  }

  return (
    <div className="container">
      <h1 className="my-5">The dogs at Voyant</h1>
      <div className="card-columns">{result}</div>
    </div>
  );
};

export default Home;

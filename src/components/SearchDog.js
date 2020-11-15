import React, { useState, useContext } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import DogContext from '../_helpers/DogContext';

const INIT_STATE = {
  search: '',
};
const SearchDog = () => {
  const { dogs, setDogs } = useContext(DogContext);
  const [values, setValues] = useState(INIT_STATE);
  const { search } = values;
  const [found, setFound] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((l) => ({ ...l, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line array-callback-return
    let found = dogs.filter(function (dog) {
      if (dog.name.toLowerCase().includes(values.search.toLowerCase())) {
        return true;
      }
    });

    setFound(found);
    setValues(INIT_STATE);
  };
  let searchResults;

  if (found.length === 0) {
    searchResults = `Sorry...couldn't find any dogs with the name of "${values.search}"`;
  } else {
    searchResults = found.map((d) => (
      <Link to={`/${d.name.toLowerCase()}`} data-dismiss="modal">
        <p>
          {d.name} - {d.breed}{' '}
        </p>
      </Link>
    ));
  }

  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        name="search"
        value={search}
        onChange={handleChange}
        placeholder="Search"
        aria-label="Search"
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        data-toggle="modal"
        data-target="#searchResults"
        onClick={handleSubmit}
      >
        Search
      </button>

      <div
        className="modal fade"
        id="searchResults"
        tabindex="-1"
        aria-labelledby="searchResultsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="searchResultsLabel">
                Search Results
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul>{searchResults}</ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchDog;

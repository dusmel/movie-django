import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Card extends Component {
  overview(text) {
    let trimmedString = text.substr(0, 70);
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')),
    );
    return `${trimmedString}...`;
  }

  render() {
    const {
      data: { id, poster_path, title, overview },
    } = this.props;
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return (
      <div className="card text-white bg-primary my-1 my-md-2">
        <img className="card-img-top img-fluid" src={poster} alt="poster" />
        <div className="card-body">
          <Link className="card-title text-light text-decoration-none h4" to={`/single/${id}`}>
            {title}
          </Link>
          <p className="card-text">{this.overview(overview)}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Card;

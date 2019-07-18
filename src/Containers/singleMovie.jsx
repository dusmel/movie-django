import React, { Component } from 'react';
import moment from 'moment';
import { PropTypes } from 'prop-types';
import movieDb from '../api/movieDb';
import Navbar from '../components/shared/_navbar';

class SingleMovie extends Component {
  state = {
    data: {},
    genre: [],
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    movieDb
      .get(`/movie/${id}`)
      .then(res => {
        this.setState({
          data: res.data,
        });
      })
      .catch(error => console.error(error));
  }

  getSingle(id) {
    const { data } = this.state;
    const singleMovie = data.find(d => {
      return d.id === Number(id);
    });
    return singleMovie;
  }

  handleSelectedGenre = async genreId => {
    const selectedGenre = await movieDb.get('/discover/movie', {
      params: {
        with_genres: genreId,
        sort_by: 'vote_average.desc',
      },
    });
    this.setState({
      data: selectedGenre.data.results,
    });
  };

  render() {
    const {
      data: { poster_path, title, overview, release_date },
      genre,
    } = this.state;
    const released_date = moment(new Date(release_date)).format('MMMM DD, YYYY');
    const poster = `https://image.tmdb.org/t/p/original${poster_path}`;
    return (
      <React.Fragment>
        <Navbar genres={genre} onSelectGenre={this.handleSelectedGenre} />
        <div id="single-page">
          <div className="row">
            <div className="col-md-6 px-0">
              <div className="movie-details">
                <div className="content">
                  <div className="header">
                    <h1 className="fade-in-left-1">{title}</h1>
                    <p className="overview">{overview}</p>
                  </div>
                  <div className="release">
                    <p>Release date</p>
                    <h4 className="fade-in-left-2">{released_date}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={poster} alt="" className="fade-in-left img-single" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
SingleMovie.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SingleMovie;

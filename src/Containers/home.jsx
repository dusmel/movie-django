import React, { Component } from 'react';
import movieDb from '../api/movieDb';
import Card from '../components/shared/_card';
import Navbar from '../components/shared/_navbar';

class Home extends Component {
  state = {
    data: [],
    isLoaded: false,
    genre: [
      { id: 878, name: 'Science Fiction' },
      { id: 28, name: 'Action' },
      { id: 16, name: 'Animation' },
      { id: 35, name: 'Comedy' },
      { id: 18, name: 'Drama' },
    ],
  };

  async componentDidMount() {
    movieDb
      .get('/discover/movie', {
        params: {
          sort_by: 'popularity.desc',
        },
      })
      .then(res => {
        this.setState({
          data: res.data.results,
          isLoaded: true,
        });
      })
      .catch(error => console.error(error));
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
      isLoaded: true,
    });
  };

  homecontent(dataWithPoster) {
    return (
      <div className="p-md-4 p-1">
        <div className="row">
          {dataWithPoster.map(m => (
            <div className="col-md-2" key={m.id}>
              <Card data={m} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { isLoaded, data, genre } = this.state;
    const dataWithPoster = data.filter(d => d.poster_path !== null);
    if (!isLoaded) {
      return <h2>Loading...</h2>;
    }
    return (
      <React.Fragment>
        <Navbar genres={genre} onSelectGenre={this.handleSelectedGenre} />
        {this.homecontent(dataWithPoster)}
      </React.Fragment>
    );
  }
}

export default Home;

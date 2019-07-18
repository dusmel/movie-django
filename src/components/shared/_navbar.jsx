import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Navbar extends Component {
  getNavItemClass(index) {
    if (index === 0) {
      return 'nav-item active';
    }
    return 'nav-item';
  }

  render() {
    const { genres, onSelectGenre } = this.props;
    console.log(genres);
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            Movie-Jango
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {genres.map(({ id, name }, index) => (
                <li className={this.getNavItemClass(index)} key={id}>
                  <a className="nav-link" onClick={() => onSelectGenre(id)} href>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  genres: PropTypes.array,
  onSelectGenre: PropTypes.func,
};

Navbar.defaultProps = {
  genres: [],
  onSelectGenre: null,
};

export default Navbar;

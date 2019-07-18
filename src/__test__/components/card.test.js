import React from 'react';
import { shallow, mount } from 'enzyme';
import mockAxios from 'axios';
import Card from '../../components/shared/_card';

// const mockStore = configureMockStore([thunk]);
const props = {
  match: {
    params: {
      id: 565550,
    },
  },
  data: {
    vote_count: 1870,
    id: 429617,
    video: false,
    vote_average: 7.8,
    title: 'Spider-Man: Far from Home',
    popularity: 461.454,
    poster_path: '/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg',
    original_language: 'en',
    original_title: 'Spider-Man: Far from Home',
    genre_ids: [28, 12, 878],
    backdrop_path: '/dihW2yTsvQlust7mSuAqJDtqW7k.jpg',
    adult: false,
    overview:
      'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
    release_date: '2019-06-28',
  },
};

describe('Home page', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.find('.card').length).toBe(1);
  });
});

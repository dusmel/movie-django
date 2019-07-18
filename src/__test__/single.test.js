import React from 'react';
import { shallow, mount } from 'enzyme';
import mockAxios from 'axios';
import Single from '../Containers/singleMovie';

// const mockStore = configureMockStore([thunk]);
const props = {
  match: {
    params: {
      id: 565550,
    },
  },
  data: '',
};

describe('Home page', () => {
  it('Should match the snapshot', () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          page: 1,
          total_results: 426348,
          total_pages: 21318,
          results: [
            {
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
            {
              vote_count: 2552,
              id: 399579,
              video: false,
              vote_average: 6.8,
              title: 'Alita: Battle Angel',
              popularity: 262.237,
              poster_path: '/xRWht48C2V8XNfzvPehyClOvDni.jpg',
              original_language: 'en',
              original_title: 'Alita: Battle Angel',
              genre_ids: [28, 878, 53, 12],
              backdrop_path: '/8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg',
              adult: false,
              overview:
                'When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.',
              release_date: '2019-01-31',
            },
          ],
        },
      }),
    );

    const wrapper = shallow(<Single {...props} />);
    expect(wrapper.find('#single-page').length).toBe(1);
  });
});

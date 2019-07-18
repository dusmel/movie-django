import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/shared/_navbar';

// const mockStore = configureMockStore([thunk]);

describe('Home page', () => {
  it('Should match the snapshot', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find('.navbar').length).toBe(1);
  });
});

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { Home } from './Home';
import Adater from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adater() });

describe('Home Component', () => {
    test('renders', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.exists()).toBe(true);
    });
});
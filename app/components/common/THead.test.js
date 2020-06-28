import './commonStyle.css';
jest.mock('./commonStyle.css', () => {
    return {
    }
});

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import THead from './THead';
import Adater from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adater() });

describe('THead Component', () => {
    test('display table header', () => {
        const wrapper = shallow(<THead columns={["vote", "comments"]} />);
        expect(wrapper.exists()).toBe(true);
    });
});
import '../components/common/commonStyle.css';
import '../components/styles/App.css';
jest.mock('../components/common/commonStyle.css', () => {
    return {

    }
});

jest.mock('../components/styles/App.css', () => {
    return {
    }
});

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { Home } from './Home';
import Adater from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adater() });

describe('Home Component', () => {
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    },
        props = {
            mockFetchStats: jest.fn()
        };
    beforeAll(() => {
        localStorage.setItem = jest.fn();
        localStorage.getItem = jest.fn();
    });
    beforeEach(() => {
        React.useEffect = jest.spyOn(React, "useEffect");
    })
    test('renders', () => {
        const wrapper = shallow(<Home {...props} />);
        expect(wrapper.exists()).toBe(true);
    });
});
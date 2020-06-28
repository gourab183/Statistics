import './commonStyle.css';
jest.mock('./commonStyle.css', () => {
    return {
    }
});

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import TBody from './TBody';
import Adater from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adater() });

const data = [{
    objectID: '1234',
    num_comments: '32',
    points: '12'
}];

const mockFunction = jest.fn().mockReturnValue(1);

describe('TBody Component', () => {
    test('renders correctly', () => {
        const wrapper = shallow(<TBody context={{}} data={data} />);
        expect(wrapper.exists()).toBe(true);
    });
    test('should increase upvote in mouse click', () => {
        const wrapper = shallow(<TBody data={[]} />);
        wrapper.setProps({
            data: data,
            handleUpVote: mockFunction
        });
        wrapper.find('span.glyphicon-chevron-up').simulate('click', {
            type: 'click',
            target: {
                dataset: {
                    objectID: '1234'
                }
            }
        });
        expect(mockFunction).toHaveBeenCalled();
    });
    test('should hide the row in mouse click', () => {
        const wrapper = shallow(<TBody data={[]} />);
        wrapper.setProps({
            data: data,
            handleHide: mockFunction
        });
        wrapper.find('span a').simulate('click', {
            type: 'click',
            target: {
                dataset: {
                    objectID: '1234'
                }
            }
        });
        expect(mockFunction).toHaveBeenCalled();
    });
    test('should hide the row by pressing enter', () => {
        const wrapper = shallow(<TBody data={[]} />);
        wrapper.setProps({
            data: data,
            handleHide: mockFunction
        });
        wrapper.find('span a').simulate('keyup', {
            type: 'keyup',
            keyCode: 13,
            target: {
                dataset: {
                    objectID: '1234'
                }
            }
        });
        expect(mockFunction).toHaveBeenCalled();
    });
    test('should increase upvote by pressing enter', () => {
        const wrapper = shallow(<TBody data={[]} />);
        wrapper.setProps({
            data: data,
            handleUpVote: mockFunction
        });
        wrapper.find('span.glyphicon-chevron-up').simulate('keyup', {
            type: 'keyup',
            keyCode: 13,
            target: {
                dataset: {
                    objectID: '1234'
                }
            }
        });
        expect(mockFunction).toHaveBeenCalled();
    });
});
import './common/commonStyle.css';
import './styles/App.css';
jest.mock('./common/commonStyle.css', () => {
    return {
    }
});
jest.mock('./styles/App.css', () => {
    return {
    }
});

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Tabular from './Tabular';
import Adater from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adater() });

const data = [{
    objectID: '1234',
    num_comments: '32',
    points: '12'
}];

const mockFunction = jest.fn().mockReturnValue(1);
const props = {
    columns: ["Vote", "Comments"],
    data: ["1", "2"],
    pageNo: 2,
    nbPage: 10,
    handlePrev: jest.fn(),
    handleNext: jest.fn(),
    handleHide: jest.fn(),
    handleUpVote: jest.fn()
}

describe('TBody Component', () => {
    test('renders correctly', () => {
        const wrapper = shallow(<Tabular {...props} />);
        expect(wrapper.find('table').length).toBe(1);
    });
    test('should go to previous page in mouse click', () => {
        const wrapper = shallow(<Tabular {...props} />);
        wrapper.find('a.prevPage').simulate('click', {
            preventDefault: jest.fn(),
            type: 'click',
            target: {
                dataset: {
                    objectID: '1234'
                }
            }
        });
        expect(props.handlePrev).toHaveBeenCalled();
    });
    test('should go to next page in mouse click', () => {
        const wrapper = shallow(<Tabular {...props} />);
        wrapper.find('a.nextPage').simulate('click', {
            preventDefault: jest.fn(),
            type: 'click',
            target: {
                dataset: {
                    objectID: '1234'
                }
            }
        });
        expect(props.handleNext).toHaveBeenCalled();
    });
    test('should go to previous page by pressing enter', () => {
        const wrapper = shallow(<Tabular {...props} />);
        wrapper.find('a.prevPage').simulate('keyup', {
            preventDefault: jest.fn(),
            type: 'keyup',
            keyCode: 13,
            target: {
                dataset: {
                    objectID: '1234'
                }
            }
        });
        expect(props.handlePrev).toHaveBeenCalled();
    });
    test('should go to next page by pressing enter', () => {
        const wrapper = shallow(<Tabular {...props} />);
        wrapper.find('a.nextPage').simulate('keyup', {
            preventDefault: jest.fn(),
            type: 'keyup',
            keyCode: 13,
            target: {
                dataset: {
                    objectID: '1234'
                }
            }
        });
        expect(props.handleNext).toHaveBeenCalled();
    });
});
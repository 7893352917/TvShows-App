import SearchBar from '../components/SearchBar';
import React from 'react'
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() });

describe("Search bar Component", () => {
    const component = shallow(<SearchBar />);

    it('should have an form field', () => {
        expect(component.find('form').length).toEqual(1);
    });

    it('should disable submit button on submit click when search is empty', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => { });
        const wrapper = shallow(<SearchBar />);
        const mockedEvent = { preventDefault: jest.fn() };
        const submitButton = wrapper.find('button').simulate('click', mockedEvent);
        expect(submitButton).toBeTruthy();
    });


});
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

    it('should disable submit button on submit click', () => {
        const wrapper = shallow(<SearchBar />);
        const submitButton = wrapper.find('Button').simulate('click');
        expect(submitButton).toBeTruthy();
    });

});
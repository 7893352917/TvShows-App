import NavBar from '../components/NavBar'
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure} from 'enzyme'

configure({ adapter: new Adapter() });

describe("renders NavBar  Component", () => {
    const component = shallow(<NavBar/> );
    
    it('should have an div field', () => {
        expect(component.find('div').length).toEqual(2);
      });

});
import ItemList from '../components/ItemList'
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure} from 'enzyme'

configure({ adapter: new Adapter() });

describe("Home Component", () => {
    const component = shallow(<ItemList/> );

    it('should have an div field', () => {
        expect(component.find('div').length).toEqual(1);
      });
      
      it('should have an h3 field', () => {
        expect(component.find('h3').length).toEqual(2);
      });
});
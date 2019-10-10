import React from 'react';
import {shallow} from 'enzyme';
import Weather from './weather';

describe('Weather', () =>{
    let weather = shallow(<Weather />);
    it('should render correctly', () =>{
        expect(weather).toMatchSnapshot();
    });
});
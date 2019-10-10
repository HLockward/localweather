import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Weather from './Weather';

describe('App', () =>{
  const app = shallow(<App />); 
  
  it('should render correctly', () =>{
    expect(app).toMatchSnapshot();
  });
  
  it('should contain Weather component', () =>{
    expect(app.find('Weather').exists()).toBe(true);
  });
  
})



import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RangeSlider from './Slider';
import createStore from '../store';
const store = createStore();
configure({adapter: new Adapter()});
describe('Result function', () => {
    let wrapper;
    beforeEach( ()=> {
        wrapper = shallow(<RangeSlider store={store} />).dive()
    })
    it('Calculate result',  () => {
        wrapper.setProps({ slidedVal: 1 });
        wrapper.setState({ interestVal: 10 });
        wrapper.find('.show-result').simulate('click');
        expect(wrapper.state('result')).toEqual(11);
    })
})
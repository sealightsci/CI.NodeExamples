import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {expect} from 'chai'
import App from './App';

configure({adapter: new Adapter()});
const mockEvt = {
    preventDefault: () => {
    }
}
describe('App', function () {
    it('should return 4', () => {
        const wrapper = shallow(<App/>);
        const number1 = wrapper.find("#number1").at(0);
        const number2 = wrapper.find("#number2").at(0);
        const add = wrapper.find("button").at(0);
        number1.simulate('change', {target: {value: 2, id: "number1"}});
        number2.simulate('change', {target: {value: 2, id: "number2"}});
        add.simulate('click', mockEvt);
        const result = wrapper.find("#result").at(0);
        expect(result.props().value).to.equal(4);
    });
    describe('class methods', () => {
        const app = shallow(<App/>).instance();
        describe('multiple', () => {
            it('should return same number', () => {
                const result = app.multiple(4, 1);
                expect(result).to.equal(4);
            });
            it('should return 8', () => {
                const result = app.multiple(4, 2);
                expect(result).to.equal(8);
            });
        });
        describe('divide', () => {
            it('should return 0', () => {
                const result = app.divide(4, 0);
                expect(result).to.equal(0);
            });
            it('should return 2', () => {
                const result = app.divide(4, 2);
                expect(result).to.equal(2);
            });
        });
        describe('isDividedBy', () => {
            it('should return false', () => {
                const result = app.isDividedBy(4, 3);
                expect(result).to.equal(false);
            });
            it('should return true', () => {
                const result = app.isDividedBy(4, 2);
                expect(result).to.equal(true);
            });
        });
        describe('printAllNumbers', () => {
            it('should print till 10', () => {
                app.printAllNumbers(10);
            });
        });
    });
});

import test from 'ava';
import Calculator from '../src/calculator'

const calculator = new Calculator();

test('add -> should return 4', t =>{
     let result = calculator.add(2,2);
     t.is(result, 4);
});
test('multiple -> should return the same number', t =>{
    let result = calculator.multiple(4,1);
    t.is(result, 4);
});
test('multiple -> should return 8', t =>{
    let result = calculator.multiple(4, 2);
    t.is(result, 8);
});
test('divide -> should return 0', t =>{
    let result = calculator.divide(4, 0);
    t.is(result, 0);
});
test('divide -> should return 2', t =>{
    let result = calculator.divide(4, 2);
    t.is(result, 2);
});

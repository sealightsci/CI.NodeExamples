import test from 'ava';
import Calculator from '../src/calculator'

const calculator = new Calculator();

test('isDividedBy -> should return false', t =>{
     let result = calculator.isDividedBy(4,3);
     t.is(result, false);
});
test('isDividedBy -> should return true', t =>{
    let result = calculator.isDividedBy(4,2);
    t.is(result, true);
});
test('printAllNumbers -> should return all till 10', t =>{
    const expected  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let result = calculator.getAllNumbers(10);
    t.deepEqual(result, expected)
});

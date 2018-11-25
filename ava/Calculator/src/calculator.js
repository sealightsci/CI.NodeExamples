class Calculator {
    add(num1, num2) {
         return num1 + num2;
    }

    multiple(num1, num2) {
        if (num2 == 1) {
            console.log("meaningless")
        }
        return num1 * num2;
    }

    /**
     *
     * @param num1
     * @param num2
     * @returns {number}
     */
    divide(num1, num2 = 1) {
        if (num2 == 0) {
            return 0;
        }
        else {
            return num1 / num2
        }
    }

    isDividedBy(num1, num2) {
        const result = num1 % num2;
        return result == 0 ? true : false;
    }

    getAllNumbers(arg) {
        const numArray = [];
        for (let i = 0; i < arg; i++) {
            numArray.push(i);
        }
        return numArray;
    }
}

module.exports = Calculator;

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private question = '';
  private answer = '';


  handleClick(targetId: string) {
    switch (targetId) {
      case '=': { // if it's an equal sign, use the eval module to evaluate the question
        // convert the answer (in number) to String
        this.answer = this.calculateExpression(this.question).toString();
        break;
      }
      case 'cls': {
        // if it's the Cls sign, just clean our question and answer in the state
        this.answer = '';
        this.question = '';
        break;
      }
      default: {
        // for every other commmand, update the answer in the state
        this.question += targetId;
        break;
      }
    }
  }

  calculateExpression(expressionStr: string) {
    const operatorsRegex = /\+|-|\*|\//;
    // Find the arithmetic operator
    const operator = expressionStr.match(operatorsRegex)[0];
    const argumentsArr = expressionStr.split(operatorsRegex);
    const leftNum = parseInt(argumentsArr[0]);
    const rightNum = parseInt(argumentsArr[1]);
    switch (operator) {
      case '+': {
        return this.add(leftNum, rightNum);
      }
      case '-': {
        return this.sub(leftNum, rightNum);
      }
      case '/': {
        return this.divide(leftNum, rightNum);
      }
      case '*': {
        return this.multiple(leftNum, rightNum);
      }
    }
  }

  add(num1, num2) {
    return num1 + num2;
  }

  sub(num1, num2) {
    return num1 - num2;
  }

  multiple(num1, num2) {
    if (num2 === 1) {
      console.log('meaningless');
    }
    return num1 * num2;
  }

  divide(number1, number2 = 1) {
    if (number2 === 0) {
      return 0;
    } else {
      return number1 / number2;
    }
  }
}

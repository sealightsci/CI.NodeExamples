import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _number1;
  private _number2;
  private _result;

  constructor(){
    this._number1 = 0;
    this._number2 = 0;
    this._result = 0;
  }
  add(): void {
    this._result = parseInt(this._number1) + parseInt(this._number2);
  }

  multiple(num1, num2){
    if(num2 ==1){
      console.log("meaningless")
    }
    return num1 * num2;
  }

  divide(number1, number2 = 1){
      if(number2 == 0){
        return 0;
      }
      else{
        return number1 / number2
      }
  }

  isDividedBy(num1, num2) {
    const result  = num1 % num2;
    return result == 0 ? true : false;
  }

  printAllNumbers(arg){
   for(let i =0; i < arg; i++){
     console.log(i);
   }
 }

  get result() {
    return this._result;
  }


  set number1(value) {
    this._number1 = value;
  }

  set number2(value) {
    this._number2 = value;
  }
}

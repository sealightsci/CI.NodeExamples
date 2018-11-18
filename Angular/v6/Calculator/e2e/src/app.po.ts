import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  reset(){
    element(by.id('result')).clear();
    element(by.id('number1')).clear();
    element(by.id('number2')).clear();
  }

  getResult() {
    return element(by.id('result')).getAttribute('value');
  }

  setNumber1(content) {
    element(by.id('number1')).sendKeys(content);
  }

  setNumber2(content) {
    element(by.id('number2')).sendKeys(content);
  }

  clickAddBtn() {
    element(by.id('add')).click();
  }
}

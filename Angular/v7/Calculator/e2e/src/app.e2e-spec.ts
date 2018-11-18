import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.reset();
  });

  it('should display 4 as result',  () => {
    page.setNumber1(2);
    page.setNumber2(2);
    page.clickAddBtn();
    expect(page.getResult()).toEqual('4');
  });
});

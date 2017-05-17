import { IBarterPage } from './app.po';

describe('i-barter App', () => {
  let page: IBarterPage;

  beforeEach(() => {
    page = new IBarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

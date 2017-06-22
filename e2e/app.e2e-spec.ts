import { MobilespaPage } from './app.po';

describe('mobilespa App', () => {
  let page: MobilespaPage;

  beforeEach(() => {
    page = new MobilespaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

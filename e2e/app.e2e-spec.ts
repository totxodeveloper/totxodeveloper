import { TotxodeveloperPage } from './app.po';

describe('totxodeveloper App', () => {
  let page: TotxodeveloperPage;

  beforeEach(() => {
    page = new TotxodeveloperPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

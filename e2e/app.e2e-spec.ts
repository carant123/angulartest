import { NewTestPage } from './app.po';

describe('new-test App', () => {
  let page: NewTestPage;

  beforeEach(() => {
    page = new NewTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

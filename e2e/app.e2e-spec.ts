import { PlatziAngular4PlaceholderPage } from './app.po';

describe('platzi-angular4-placeholder App', () => {
  let page: PlatziAngular4PlaceholderPage;

  beforeEach(() => {
    page = new PlatziAngular4PlaceholderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

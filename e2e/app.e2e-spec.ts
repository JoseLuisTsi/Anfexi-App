import { AnfexiAppPage } from './app.po';

describe('anfexi-app App', () => {
  let page: AnfexiAppPage;

  beforeEach(() => {
    page = new AnfexiAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

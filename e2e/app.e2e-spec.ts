import { FramedPage } from './app.po';

describe('framed App', () => {
  let page: FramedPage;

  beforeEach(() => {
    page = new FramedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

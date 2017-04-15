import { RatdoraPage } from './app.po';

describe('ratdora App', function() {
  let page: RatdoraPage;

  beforeEach(() => {
    page = new RatdoraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

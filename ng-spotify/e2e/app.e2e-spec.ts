import { Ng2SpotfiyPage } from './app.po';

describe('ng2-spotfiy App', () => {
  let page: Ng2SpotfiyPage;

  beforeEach(() => {
    page = new Ng2SpotfiyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

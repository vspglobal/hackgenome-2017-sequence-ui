import { SequenceUiPage } from './app.po';

describe('sequence-ui App', function() {
  let page: SequenceUiPage;

  beforeEach(() => {
    page = new SequenceUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

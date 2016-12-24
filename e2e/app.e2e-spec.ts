import { JcServicallsUiPage } from './app.po';

describe('jc-servicalls-ui App', function() {
  let page: JcServicallsUiPage;

  beforeEach(() => {
    page = new JcServicallsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

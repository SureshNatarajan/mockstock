import { MockStockGroupAppPage } from './app.po';

describe('mock-stock-group-app App', () => {
  let page: MockStockGroupAppPage;

  beforeEach(() => {
    page = new MockStockGroupAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

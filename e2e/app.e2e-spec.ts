import { AngularEnterprisePage } from './app.po';

describe('angular-enterprise App', () => {
  let page: AngularEnterprisePage;

  beforeEach(() => {
    page = new AngularEnterprisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

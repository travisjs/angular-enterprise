import { AngularEnterprisePage } from './app.po';

describe('angular-enterprise App', () => {
  let page: AngularEnterprisePage;

  beforeEach(() => {
    page = new AngularEnterprisePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

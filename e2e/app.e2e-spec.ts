import { ItoAppsup3WebFrontendPage } from './app.po';

describe('ito-appsup3-web-frontend App', () => {
  let page: ItoAppsup3WebFrontendPage;

  beforeEach(() => {
    page = new ItoAppsup3WebFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

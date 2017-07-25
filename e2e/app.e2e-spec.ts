import { NgTutorial1Page } from './app.po';

describe('ng-tutorial1 App', () => {
  let page: NgTutorial1Page;

  beforeEach(() => {
    page = new NgTutorial1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
